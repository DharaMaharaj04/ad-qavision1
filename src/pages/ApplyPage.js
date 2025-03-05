import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const getValue = (attr) => {
  if (!attr) return "";
  return typeof attr === "object" && attr.S ? attr.S : attr;
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

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `https://2tlb4p195k.execute-api.ap-south-1.amazonaws.com/dev/jobs/${jobId}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching job details: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched job data:", data);
        setJob(Array.isArray(data) ? data[0] : data);
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
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading job details...</div>;
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Apply for {getValue(job.title)}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="fullName" value={application.fullName} onChange={handleChange} required />
          <input type="email" name="email" value={application.email} onChange={handleChange} required />
          <input type="file" onChange={handleFileChange} required />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
