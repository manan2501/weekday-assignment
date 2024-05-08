import { Box, Select, Option, MenuItem, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const expYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Filters = ({ setFilteredJobs }) => {
    const { jobs } = useSelector(state => state.jobSearch);

    const [selectedExperience, setSelectedExperience] = useState(expYears[0]);

    const handleExperienceChange = event => {
        setSelectedExperience(event.target.value);
    };

    useEffect(() => {
        setFilteredJobs(
            jobs.filter(
                job =>
                    selectedExperience >= job.minExp &&
                    job.maxExp >= selectedExperience
            )
        );
    }, [selectedExperience]);

    return (
        <Box display={"flex"} gap={1} flexWrap={"wrap"}>
            <Box>
                <InputLabel id="experience-label">Experience</InputLabel>
                <Select
                    labelId="experience-label"
                    id="experience-select"
                    value={selectedExperience}
                    onChange={handleExperienceChange}
                >
                    {expYears.map(year => (
                        <MenuItem key={year} value={year}>
                            {year} Year{year !== 1 ? "s" : ""}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
        </Box>
    );
};

export default Filters;
