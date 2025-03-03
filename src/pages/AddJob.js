import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://th9oz7sln6.execute-api.ap-south-1.amazonaws.com/dev/jobs", job);
      alert("Job Added Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Job Vacancy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Job Title" className="input" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" className="input" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" className="input" onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" className="input" onChange={handleChange} required />
        <button type="submit" className="btn">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
