import { configureStore } from "@reduxjs/toolkit";
import jobSearchReducer from "./features/jobSearchSlice";
export default configureStore({
    reducer: {
        jobSearch: jobSearchReducer
    }
});
