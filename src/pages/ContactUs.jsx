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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  // 🛠 Validation function
  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
  if (!formData.email.trim() || !emailRegex.test(formData.email))
    newErrors.email = "Enter a valid email address.";
  if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required.";
  if (!formData.phone.trim() || !phoneRegex.test(formData.phone))
    newErrors.phone = "Enter a valid phone number (e.g., +919876543210).";
  if (!formData.projectDescription.trim())
    newErrors.projectDescription = "Project Description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  // 🛠 Debug: Check API Request Data Before Sending
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // 🔥 Ensure the API expects these exact field names
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      companyName: formData.companyName,
      phone: formData.phone,
      projectDescription: formData.projectDescription,
    };

    console.log("📤 Sending Data:", JSON.stringify(payload, null, 2)); // Debugging

    try {
      const response = await fetch(
        "https://hhouoolvu1.execute-api.ap-south-1.amazonaws.com/dev/contactFormHandler",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json(); // 🔥 Convert response to JSON
      console.log("📥 API Response:", responseData); // Debugging

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          phone: "",
          projectDescription: "",
        });
      } else {
        alert(`❌ Failed to send message: ${responseData.error || "Please try again."}`);
      }
    } catch (error) {
      console.error("⚠️ Error:", error);
      alert("❌ Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Image Section */}
      <div
        className="relative w-full min-h-[400px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
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
              <a href="mailto:sales@qavisiontestlab.com" className="text-lg text-gray-700 hover:text-blue-600 transition">
                sales@qavisiontestlab.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <a href="tel:+8780834040" className="text-lg text-gray-700 hover:text-blue-600 transition">
                +8780834040
              </a>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <p className="text-lg text-gray-700">
                A-9, Sangath-1, B/h Parimal Hospital, Narendra Modi Stadium Road, Motera, Ahmedabad, Gujarat 380005
              </p>
            </div>
          </div>
        </div>

        {/* Form (Right Side) */}
        <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.keys(formData).map((field, index) => (
              <div key={index}>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={`${field.replace(/([A-Z])/g, " $1")}*`}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors[field] ? "border-red-500 ring-red-500" : "border-blue-300 focus:ring-blue-700"
                  }`}
                  required
                />
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2 bg-[#4daaf6] text-black rounded-md font-semibold hover:bg-blue-200 transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
