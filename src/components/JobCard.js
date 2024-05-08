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
    Tooltip,
    Button,
    Link
} from "@mui/material";
import "./JobCard.css";
import {
    capitalizeFirstLetter,
    getExperienceRange,
    getSalaryText
} from "../utils/utils";
import { Bolt } from "@mui/icons-material";

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
                                <h3>
                                    {capitalizeFirstLetter(job?.companyName)}
                                </h3>
                                <h2>{capitalizeFirstLetter(job?.jobRole)}</h2>
                            </div>
                            <p className="cards-sub-text">
                                {capitalizeFirstLetter(job?.location)}
                            </p>
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

                    <p className="card-salary">
                        {getSalaryText({
                            minJdSalary: job?.minJdSalary,
                            maxJdSalary: job?.maxJdSalary,
                            salaryCurrencyCode: job?.salaryCurrencyCode
                        })}
                        {/* Estimated Salary: {job?.minJdSalary}-{job?.maxJdSalary} */}
                    </p>

                    <p className="card-details">{job?.jobDetailsFromCompany}</p>

                    <Box marginTop={1} className="info-container">
                        <h3>Required Experience</h3>
                        <h2>
                            {getExperienceRange({
                                minExp: job?.minExp,
                                maxExp: job?.maxExp
                            })}
                        </h2>
                    </Box>

                    <Box
                        // paddingInline={1}
                        display="flex"
                        flexDirection={"column"}
                        alignItems="center"
                        gap={1}
                        marginTop={1}
                    >
                        <Link href={job?.jdLink} width={"100%"}>
                            <Button
                                variant="contained"
                                fullWidth
                                startIcon={<Bolt />}
                            >
                                Easy Apply
                            </Button>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default JobCard;
