import { createSlice } from "@reduxjs/toolkit";

export const jobSearchSlice = createSlice({
        name: "jobSearch",
        initialState: {
                jobs: [],
        },
        reducers: {
                addJobs: (state, action) => {
                        state.jobs = [...state.jobs, ...action.payload];
                },
                resetJobs: (state) => {
                        state.jobs = [];
                },
        },
});

export const { addJobs, resetJobs } = jobSearchSlice.actions;

export default jobSearchSlice.reducer;
