import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CareerForm = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ls2hj1z789.execute-api.ap-south-1.amazonaws.com/fetchJobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Job Openings</h2>
      {jobs.map((job) => (
        <div key={job.jobId} onClick={() => navigate(`/apply/${job.jobId}`, { state: job })}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>Location: {job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default CareerForm;
