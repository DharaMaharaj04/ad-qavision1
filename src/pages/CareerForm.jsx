import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CareerForm = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://cl80il2pef.execute-api.ap-south-1.amazonaws.com/dev/jobs"
        );
        if (!response.ok) {
          throw new Error(`Error fetching jobs: ${response.status}`);
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-4 md:mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Job Listings
        </h2>
        {isLoading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-600">No jobs available.</p>
        ) : (
          jobs.map((job) => {
            // Extract plain values from DynamoDB attribute objects
            const jobId = job.jobId?.S;
            const title = job.title?.S;
            const description = job.description?.S;
            const location = job.location?.S;
            const positions = job.positions?.N;
            return (
              <div
                key={jobId}
                className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {title}
                </h3>
                <div className="flex flex-wrap text-gray-600 text-sm mb-4">
                  <span className="mr-4">
                    <strong>Location:</strong> {location}
                  </span>
                  <span>
                    <strong>Positions:</strong> {positions}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{description}</p>
                <Link
                  to={`/apply/${jobId}`}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CareerForm;
