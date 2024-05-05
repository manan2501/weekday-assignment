import { useDispatch, useSelector } from "react-redux";
import { fetchJobsData } from "./features/jobSearchSlice";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import JobCard from "./components/JobCard";

function App() {
    const { jobs, totalJobs, loading, error } = useSelector(
        state => state.jobSearch
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobsData({ limit: 10, offset: 0 }));
    }, []);

    console.log("jobSearch: ", { jobs, totalJobs, loading, error });

    return (
        <div>
            <Grid container spacing={2}>
                {jobs.map(job => {
                    return <JobCard key={job.jdUid} job={job} />;
                })}
            </Grid>
        </div>
    );
}

export default App;
