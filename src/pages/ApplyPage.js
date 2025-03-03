import { useState } from "react";
import { useParams } from "react-router-dom";

const ApplyPage = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    experience: "",
    resumeUrl: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://ls2hj1z789.execute-api.ap-south-1.amazonaws.com/prod/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobId, ...formData }),
    });

    const result = await response.json();
    setMessage(result.message || "Something went wrong. Try again.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">📋 Apply for the Job</h2>
        {message && <p className="text-green-600">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required className="w-full p-2 mb-3 border rounded"
            value={formData.fullName} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required className="w-full p-2 mb-3 border rounded"
            value={formData.email} onChange={handleChange} />
          <input type="text" name="mobile" placeholder="Mobile Number" required className="w-full p-2 mb-3 border rounded"
            value={formData.mobile} onChange={handleChange} />
          <input type="text" name="experience" placeholder="Experience (e.g., 2 years)" required className="w-full p-2 mb-3 border rounded"
            value={formData.experience} onChange={handleChange} />
          <input type="text" name="resumeUrl" placeholder="Resume Link" required className="w-full p-2 mb-3 border rounded"
            value={formData.resumeUrl} onChange={handleChange} />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
