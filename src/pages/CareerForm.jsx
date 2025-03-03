import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CareerForm = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ls2hj1z789.execute-api.ap-south-1.amazonaws.com/prod/fetchJobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.data || []))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">🚀 Careers</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
        {jobs.length === 0 ? (
          <p className="text-center">Loading jobs...</p>
        ) : (
          jobs.map((job) => (
            <div key={job.jobId} className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p>{job.description}</p>
              <p className="text-sm text-gray-500">📍 {job.location} | 🏆 {job.experienceRequired}</p>
              <button
                onClick={() => navigate(`/apply/${job.jobId}`)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CareerForm;
