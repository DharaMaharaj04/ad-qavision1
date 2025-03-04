import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ApplyPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [application, setApplication] = useState({ name: "", email: "", resume: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch job details using jobId
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `https://2tlb4p195k.execute-api.ap-south-1.amazonaws.com/jobs/${jobId}`
        );
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("https://ha59zbszd3.execute-api.ap-south-1.amazonaws.com/dev/applications", {
        ...application,
        jobId,
      });
      alert("Application Submitted Successfully!");
    } catch (error) {
      console.error("Error applying for job:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-4 md:mt-16">
        <p className="text-gray-600 text-lg">Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 mt-4 md:mt-16">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
        {/* Job Details */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Apply for {job.title}</h2>
          <p className="text-gray-600 mb-1">
            <strong>Company:</strong> {job.company || "N/A"}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Location:</strong> {job.location}
          </p>
          <p className="text-gray-600">
            <strong>Description:</strong> {job.description}
          </p>
        </div>
        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={application.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={application.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume Link
            </label>
            <input
              type="text"
              name="resume"
              id="resume"
              value={application.resume}
              onChange={handleChange}
              placeholder="Enter URL of your resume"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
