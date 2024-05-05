import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Chip,
    CardHeader,
    Avatar,
    Paper,
    Box,
    IconButton,
    Tooltip
} from "@mui/material";
import "./JobCard.css";

const JobCard = ({ job }) => {
    return (
        <Grid item xs={12} md={6} lg={4}>
            {/* <Card>
                {job.logoUrl && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={job.logoUrl}
                        alt={job.companyName}
                    />
                )}
                <CardHeader
                    avatar={
                        <CardMedia
                            component="img"
                            height="140"
                            image={job.logoUrl}
                            alt={job.companyName}
                        />
                    }
                ></CardHeader>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {job.companyName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job.location}
                    </Typography>
                    <Typography variant="body2">
                        {job.jobRole} ({job.minExp}-{job.maxExp} yrs exp)
                    </Typography>
                    <Chip
                        label={`${job.minJdSalary ? job.minJdSalary : 0} - ${
                            job.maxJdSalary ? job.maxJdSalary : ""
                        } ${job.salaryCurrencyCode}`}
                        variant="outlined"
                        size="small"
                    />
                </CardContent>
            </Card> */}

            <Card elevation={1} square={false}>
                <CardContent>
                    <Box
                        display="flex"
                        justifyContent="start"
                        alignItems="start"
                        gap={1}
                    >
                        <Avatar src={job.logoUrl} alt={job.companyName} />
                        <div>
                            <div className="info-container">
                                <h3>{job.companyName}</h3>
                                <h2>{job.jobRole}</h2>
                            </div>
                            <p className="cards-sub-text">{job.location}</p>
                        </div>

                        {/* <Box>
                            <Typography variant="subtitle1" color={"GrayText"}>
                                {job.companyName}
                            </Typography>
                            <Typography variant="subtitle2">
                                {job.jobRole}
                            </Typography>
                        </Box> */}
                    </Box>

                    <Typography
                        variant="body2"
                        color={"GrayText"}
                        className="card-salary"
                    >
                        Estimated Salary: {job.minJdSalary}-{job.maxJdSalary}{" "}
                        <Tooltip title="Estimated by Weekday. Not provided by employer">
                            <IconButton>⚠️</IconButton>
                        </Tooltip>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default JobCard;
