import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Helper to extract value from DynamoDB attribute format
const getValue = (attr) => {
  if (!attr) return "";
  return typeof attr === "object" && "S" in attr ? attr.S : attr;
};

const ApplyPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [application, setApplication] = useState({
    fullName: "",
    phone: "",
    email: "",
    experience: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch job details using jobId
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `https://2tlb4p195k.execute-api.ap-south-1.amazonaws.com/jobs/${jobId}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching job details: ${response.status}`);
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplication({ ...application, [name]: value });
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("fullName", application.fullName);
      formData.append("phone", application.phone);
      formData.append("email", application.email);
      formData.append("experience", application.experience);
      formData.append("jobId", jobId);
      if (cvFile) {
        formData.append("cv", cvFile);
      }
      
      const response = await fetch(
        "https://ha59zbszd3.execute-api.ap-south-1.amazonaws.com/dev/applications",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit application");
      }
      alert("Application Submitted Successfully!");
      setApplication({ fullName: "", phone: "", email: "", experience: "" });
      setCvFile(null);
    } catch (error) {
      console.error("Error applying for job:", error);
      alert("Error applying for job: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
        {/* Job Details */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Apply for {getValue(job.title)}
          </h2>
          <p className="text-gray-600 mb-1">
            <strong>Location:</strong> {getValue(job.location)}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Description:</strong> {getValue(job.description)}
          </p>
        </div>
        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={application.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={application.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={application.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="applyForPost" className="block text-sm font-medium text-gray-700">
              Apply for the Post
            </label>
            <input
              type="text"
              name="applyForPost"
              id="applyForPost"
              value={getValue(job.title)}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Total Experience (in years)
            </label>
            <input
              type="number"
              name="experience"
              id="experience"
              value={application.experience}
              onChange={handleChange}
              placeholder="Enter your experience"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
              Upload CV
            </label>
            <input
              type="file"
              name="cv"
              id="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="mt-1 block w-full text-gray-600"
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
