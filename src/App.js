import { useDispatch, useSelector } from "react-redux";
import { fetchJobsData } from "./features/jobSearchSlice";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import JobCard from "./components/JobCard";

function App() {
    const { jobs, totalJobs, loading, error } = useSelector(
        state => state.jobSearch
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobsData({ limit: 20, offset: 0 }));
    }, [dispatch]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        ) {
            return;
        } else if (jobs.length < totalJobs) {
            dispatch(fetchJobsData({ limit: 10, offset: jobs.length }));
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [jobs.length, dispatch]);

    console.log("jobSearch: ", { jobs, totalJobs, loading, error });

    return (
        <div>
            <Grid container spacing={2}>
                {jobs.map(job => {
                    return <JobCard key={job.jdUid} job={job} />;
                })}
            </Grid>
            {loading && (
                <Typography
                    marginBlock={4}
                    variant="body1"
                    textAlign={"center"}
                >
                    Hang-on! Loading more data...
                </Typography>
            )}
        </div>
    );
}

export default App;
