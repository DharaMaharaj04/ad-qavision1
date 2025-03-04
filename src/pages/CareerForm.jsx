import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CareerForm = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://cl80il2pef.execute-api.ap-south-1.amazonaws.com/dev/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      {jobs.length === 0 ? <p>No jobs available.</p> : jobs.map((job) => (
        <div key={job.jobId} className="p-4 border rounded shadow mb-4">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-600">{job.company} - {job.location}</p>
          <p>{job.description}</p>
          <Link to={`/apply/${job.jobId}`} className="text-blue-500">Apply Now</Link>
        </div>
      ))}
    </div>
  );
};

export default CareerForm;
