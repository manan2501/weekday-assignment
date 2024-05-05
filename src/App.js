import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "./features/jobSearchSlice";
import { useEffect } from "react";

function App() {
        const jobs = useSelector((state) => state.jobSearch.jobs);
        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(
                        addJobs([
                                {
                                        jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
                                        jdLink: "https://weekday.works",
                                        jobDetailsFromCompany:
                                                "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
                                        maxJdSalary: 61,
                                        minJdSalary: null,
                                        salaryCurrencyCode: "USD",
                                        location: "delhi ncr",
                                        minExp: 3,
                                        maxExp: 6,
                                        jobRole: "frontend",
                                        companyName: "Dropbox",
                                        logoUrl: "https://logo.clearbit.com/dropbox.com",
                                },
                                {
                                        jdUid: "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
                                        jdLink: "https://weekday.works",
                                        jobDetailsFromCompany:
                                                "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
                                        maxJdSalary: 103,
                                        minJdSalary: 100,
                                        salaryCurrencyCode: "USD",
                                        location: "mumbai",
                                        minExp: null,
                                        maxExp: null,
                                        jobRole: "ios",
                                        companyName: "LG",
                                        logoUrl: "https://logo.clearbit.com/lg.com",
                                },
                        ])
                );
        }, []);

        console.log("jobs", jobs);

        return <div>Clean React App</div>;
}

export default App;
