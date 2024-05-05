import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJobsData = createAsyncThunk(
        "jobSearch/fetchData",
        async ({ limit, offset }, thunkAPI) => {
                try {
                        const response = await fetch(
                                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                                {
                                        method: "POST",
                                        headers: {
                                                "Content-Type":
                                                        "application/json",
                                        },
                                        body: JSON.stringify({ limit, offset }),
                                }
                        );
                        const data = await response.json();
                        return data;
                } catch (error) {
                        return thunkAPI.rejectWithValue(error.message);
                }
        }
);

export const jobSearchSlice = createSlice({
        name: "jobSearch",
        initialState: {
                jobs: [],
                totalJobs: 0,
                loading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder.addCase(fetchJobsData.pending, (state) => {
                        state.loading = true;
                        state.error = null;
                })
                        .addCase(fetchJobsData.fulfilled, (state, action) => {
                                state.loading = false;
                                state.totalJobs = action.payload.totalCount;
                                state.jobs = [
                                        ...state.jobs,
                                        ...action.payload.jdList,
                                ];
                        })
                        .addCase(fetchJobsData.rejected, (state, action) => {
                                state.loading = false;
                                state.error = action.payload;
                        });
        },
});

export default jobSearchSlice.reducer;
