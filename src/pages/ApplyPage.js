import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ApplyPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [application, setApplication] = useState({ fullName: "", phone: "", email: "", resume: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://2tlb4p195k.execute-api.ap-south-1.amazonaws.com/dev/jobs/${jobId}`);
        if (!response.ok) throw new Error("Failed to fetch job details");
        const data = await response.json();
        setJob(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  const handleChange = (e) => setApplication({ ...application, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(",")[1]; // Remove metadata
      setApplication((prevState) => ({ ...prevState, resume: base64String }));
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      alert("Failed to read file. Please try again.");
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!application.resume) {
        alert("Please upload a resume");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        fullName: application.fullName,
        phone: application.phone,
        email: application.email,
        jobId,
        resume: application.resume,
      };
      
      const response = await fetch(
        "https://ha59zbszd3.execute-api.ap-south-1.amazonaws.com/dev/applications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      
      const responseData = await response.json();
      console.log("Full Response:", responseData);
      

      if (!response.ok) throw new Error(responseData.error || "Failed to submit application");

      alert("Application Submitted Successfully!");
      setApplication({ fullName: "", phone: "", email: "", resume: "" });
    } catch (error) {
      console.error("Error applying for job:", error);
return {
  statusCode: 500,
  body: JSON.stringify({
    error: "Failed to submit application",
    details: error.message, // Include detailed error
    stack: error.stack, // Optional: Include stack trace for debugging
  }),
};
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading job details...</div>;

  return (
    <div className="bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Apply for {job?.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="fullName" value={application.fullName} onChange={handleChange} required className="w-full p-2 border" placeholder="Full Name" />
          <input type="email" name="email" value={application.email} onChange={handleChange} required className="w-full p-2 border" placeholder="Email" />
          <input type="text" name="phone" value={application.phone} onChange={handleChange} required className="w-full p-2 border" placeholder="Phone Number" />
          <input type="file" accept=".pdf" onChange={handleFileChange} required className="w-full p-2 border" />
          <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white py-2 px-4 rounded">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
