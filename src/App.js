import { useDispatch, useSelector } from "react-redux";
import { fetchJobsData } from "./features/jobSearchSlice";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";

function App() {
    const { jobs, totalJobs, loading, error } = useSelector(
        state => state.jobSearch
    );
    const dispatch = useDispatch();
    const [filteredJobs, setFilteredJobs] = useState(jobs);

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

    return (
        <Box display={"flex"} flexDirection={"column"} gap={4} padding={8}>
            <Filters setFilteredJobs={setFilteredJobs} />

            <Grid container spacing={2}>
                {filteredJobs.map(job => {
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
        </Box>
    );
}

export default App;
