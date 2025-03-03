import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ApplyPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [application, setApplication] = useState({ name: "", email: "", resume: "" });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://2tlb4p195k.execute-api.ap-south-1.amazonaws.com/jobs/{jobId}`);
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
    try {
      await axios.post("https://ha59zbszd3.execute-api.ap-south-1.amazonaws.com/dev/applications", {
        ...application,
        jobId
      });
      alert("Application Submitted Successfully!");
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  if (!job) return <p>Loading job details...</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Apply for {job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <p>{job.description}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="input" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" className="input" onChange={handleChange} required />
        <input type="text" name="resume" placeholder="Resume Link" className="input" onChange={handleChange} required />
        <button type="submit" className="btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyPage;
