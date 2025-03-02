import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import image from "../assets/images/CONTACTUS.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    projectDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://qn6w3wmrr4.execute-api.ap-south-1.amazonaws.com/dev/contactFormHandler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        projectDescription: "",
      });
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please check your connection.");
  }
};


  return (
    <div className="min-h-screen">
      {/* Background Image Section */}
      <div
        className="relative w-full min-h-[400px] bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: url({image}) }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
            Contact Us
          </h2>
        </div>
      </div>

      {/* Header Text */}
      <div className="py-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="italic">We</span>
          <span className="font-bold italic">'re here.</span> Let's talk
        </h2>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-12 px-6 lg:px-20">
        {/* Contact Info (Left Side) */}
        <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-lg p-6 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a
                href="mailto:sales@qavisiontestlab.com"
                className="text-lg text-gray-700 hover:text-blue-600 transition"
              >
                sales@qavisiontestlab.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <a
                href="tel:+8780834040"
                className="text-lg text-gray-700 hover:text-blue-600 transition"
              >
                +8780834040
              </a>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <p className="text-lg text-gray-700">
                A-9, Sangath-1, B/h Parimal Hospital, Narendra Modi Stadium Road,
                Motera, Ahmedabad, Gujarat 380005
              </p>
            </div>
          </div>
        </div>

        {/* Form (Right Side) */}
        <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-lg p-6">
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