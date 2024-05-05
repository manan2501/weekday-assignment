import { useDispatch, useSelector } from "react-redux";
import { fetchJobsData } from "./features/jobSearchSlice";
import { useEffect } from "react";

function App() {
    const { jobs, totalJobs, loading, error } = useSelector(
        state => state.jobSearch
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobsData({ limit: 10, offset: 0 }));
    }, []);

    console.log("jobSearch: ", { jobs, totalJobs, loading, error });

    return <div>Clean React App</div>;
}

export default App;
