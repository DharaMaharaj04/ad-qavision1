import React from "react";
import { FaCheckCircle, FaClipboardList, FaRegFileAlt, FaBug, FaUserCheck } from "react-icons/fa";
import UATservice from "../assets/images/UserAcceptanceTestingServices_1.jpg";

const UATServices = () => {
  const stages = [
    { icon: <FaClipboardList size={40} className="text-blue-500" />, title: "Business Requirements Analysis", description: "First things first! Our process begins with a comprehensive analysis of your business requirements." },
    { icon: <FaRegFileAlt size={40} className="text-green-500" />, title: "Creating Test Plan", description: "We develop a detailed test plan tailored to your unique needs." },
    { icon: <FaClipboardList size={40} className="text-purple-500" />, title: "Creating Test Cases", description: "Our experts design precise and effective test cases that cover all functional and non-functional requirements." },
    { icon: <FaBug size={40} className="text-red-500" />, title: "Execution of Test Cases", description: "We meticulously execute the test cases, simulating real-world usage scenarios to ensure your software functions as intended." },
    { icon: <FaUserCheck size={40} className="text-orange-500" />, title: "Reporting Results", description: "Finally, we compile detailed reports highlighting test outcomes, identifying defects, and providing actionable insights for improvement." },
  ];

  const benefits = [
    { icon: <FaCheckCircle size={40} className="text-blue-500" />, title: "Tailored Approach", description: "We customize our UAT services to align with your specific business needs." },
    { icon: <FaCheckCircle size={40} className="text-green-500" />, title: "Cutting-Edge Tools", description: "We harness the latest tools and state-of-the-art methodologies to ensure thorough and accurate testing." },
    { icon: <FaCheckCircle size={40} className="text-purple-500" />, title: "Detailed Reporting", description: "Our comprehensive reports provide clear insights and actionable recommendations." },
    { icon: <FaCheckCircle size={40} className="text-red-500" />, title: "Top-Notch Quality", description: "We prioritize delivering the highest quality testing services to ensure your software's success." },
  ];

  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${UATservice})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          User Acceptance Testing
          </h2>
        </div>
      </div>
    <div className="container mx-auto pt-6 px-6">
      {/* UAT Section */}
      <section className="container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Cutting-Edge User Acceptance Testing Services</h1>
        <p className="text-lg text-gray-600 mb-6">
          Ever wondered why User Acceptance Testing (UAT) is such a game-changer? UAT is a crucial step in the software development process that takes your product quality to the next level.
          It’s all about making sure your software meets business needs and truly satisfies end-user expectations.
        </p>
        <p className="text-lg text-gray-600">
          At QA Vision, one of India’s top UAT service providers, we offer thorough UAT services to ensure your software is flawless.
          Ready to see your product shine? Let’s make sure it hits all the right marks!
        </p>
      </section>

      {/* Stages Section */}
      <section className="container mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Key Stages of Our User Acceptance Testing @ QA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
              {stage.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{stage.title}</h3>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why QA Vision Section */}
      <section className="container mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why QA Vision for UAT Services?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Experienced Professionals: Our team consists of seasoned experts with extensive experience in UAT.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
              {benefit.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center text-white bg-[#4daaf6] p-8">
        <h2 className="text-3xl font-bold mb-6">Exceptional UAT Services In India</h2>
        <p className="text-lg  mb-6">Connect with us for a quick consultation and your free quote.</p>
        <a href='/contact-us'>
        <button className="bg-white text-blue-600 py-3 px-6 rounded-lg text-lg shadow-md hover:text-white hover:bg-blue-600 transition duration-300">
          Get a Quote
        </button>
        </a>
      </section>
    </div>
    </div>
  );
};

export default UATServices;
