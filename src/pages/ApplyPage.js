import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ApplyPage = () => {
  const { state: job } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: "", mobile: "", email: "", experience: "", resumeUrl: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://ls2hj1z789.execute-api.ap-south-1.amazonaws.com/prod/apply", {
      method: "POST",
      body: JSON.stringify({ ...formData, jobId: job.jobId }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    alert(result.message);
    navigate("/career");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Applying for {job.title}</h2>
      <input type="text" name="fullName" placeholder="Full Name*" required onChange={handleChange} />
      <input type="tel" name="mobile" placeholder="Mobile*" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Email*" required onChange={handleChange} />
      <input type="text" name="experience" placeholder="Experience*" required onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplyPage;
