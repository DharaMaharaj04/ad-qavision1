import React, { useState } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    positionName: '',
    roles: '',
    numberOfPositions: '',
    location: '',
    fullName: '',
    mobile: '',
    email: '',
    applyPost: '',
    experience: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen sm:pt-2 md:pt-24 pb-4 p-4">
  {/* Career Page */}
  <div className="bg-blue-200 justify-center items-center p-6 w-full max-w-md shadow-md rounded-md">
    <h2 className="text-xl font-bold mb-4 text-center text-black">
      Career Page
    </h2>
    <h3 className="text-lg font-bold mb-4 text-white text-center">
      Let's start a career with QAVision Test Lab
    </h3>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name*"
        value={formData.fullName}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md"
        required
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile*"
        value={formData.mobile}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md"
        required
      />
      <input
        type="text"
        name="applyPost"
        placeholder="Apply for the post* (Auto Select)"
        value={formData.applyPost}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md"
        required
      />
      <input
        type="text"
        name="experience"
        placeholder="Total Experience*"
        value={formData.experience}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md"
        required
      />
      <div className="border p-3 rounded-md">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full"
          required
        />
        <p className="text-sm text-gray-600 mt-2">PDF Mandatory</p>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
        required
      >
        Submit
      </button>
    </form>
  </div>
</div>

  );
};

export default CareerForm;
