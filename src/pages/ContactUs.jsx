import React, { useState } from 'react';
import image from '../assets/images/CONTACTUS.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    projectDescription: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen">

    <div
    className="relative w-full min-h-[400px] bg-center bg-no-repeat bg-contain"
    style={{ backgroundImage: `url(${image})` }}
  >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
        Contact US
        </h2>
      </div>
    </div>
      {/* Header Text */}
      <div className="py-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="italic">We</span><span className="font-bold italic">'re here.</span> Let's talk
        </h2>
      </div>
    <div className=" flex flex-col justify-center items-center">
       
      {/* Form */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name*"
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email*"
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name*"
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone*(with Country Code)"
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            placeholder="Describe your project*"
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 h-32"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#4daaf6] text-black rounded-md font-semibold hover:bg-blue-200 transition duration-200"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
