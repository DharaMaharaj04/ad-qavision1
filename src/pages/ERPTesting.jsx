import React from "react";
import { motion } from "framer-motion";
import erpTesting from "../assets/images/software-test.jpg";
import functional from "../assets/images/functional.png";
import performance from "../assets/images/performance.png";
import integration from "../assets/images/integration.png";
import security from "../assets/images/secure.jpg";

const ERPTesting = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${erpTesting})` }}
    >
        <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center">
          <h2 className="text-black-900 text-4xl font-bold sm:text-5xl text-center">
            ERP Testing Services
          </h2>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <motion.div
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
          Comprehensive ERP Testing Services in India
          </h2>
          <p className="text-lg pt-2 md:pt-4">
          QA Vision offers unparalleled ERP testing services in India, specializing in CRM systems to ensure seamless integration and functionality to help your organization take enterprise resource planning to another level. 
          </p>
          <p className="text-lg py-2 md:py-8">QA Vision ranks amongst the best ERP testing companies in India. We employ rigorous testing methodologies to deliver high-quality and reliable results.</p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-6 px-6">
  <motion.div
    className="text-center mb-8 max-w-5xl mx-auto"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
      Our ERP Testing Services
    </h2>
    <p className="text-lg mb-8">
      QA Vision provides a suite of cutting-edge ERP testing solutions with a focus on CRM systems. 
      Whether you need functional testing or performance evaluation, we have you covered.
    </p>
  </motion.div>

  {/* Custom Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Functional Testing */}
    <motion.div
      className="bg-white shadow-2xl rounded-lg p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img
        src={functional} // Replace with your image
        alt="Functional Testing"
        className="w-full h-48 object-contain rounded-md"
      />
      <h3 className="text-xl font-semibold text-blue-600 mt-4">
        Functional Testing
      </h3>
      <p className="mt-2">
        Ensures all CRM features and modules work as intended, providing a flawless user experience.
      </p>
    </motion.div>

    {/* Performance Testing */}
    <motion.div
      className="bg-white shadow-2xl rounded-lg p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img
        src={performance} // Replace with your image
        alt="Performance Testing"
        className="w-full h-48 object-contain rounded-md"
      />
      <h3 className="text-xl font-semibold text-blue-600 mt-4">
        Performance Testing
      </h3>
      <p className="mt-2">
        Evaluates the CRM system's responsiveness and stability under various load conditions 
        to ensure optimal performance.
      </p>
    </motion.div>

    {/* Integration Testing */}
    <motion.div
      className="bg-white shadow-2xl rounded-lg p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img
        src={integration} // Replace with your image
        alt="Integration Testing"
        className="w-full h-48 object-contain rounded-md"
      />
      <h3 className="text-xl font-semibold text-blue-600 mt-4">
        Integration Testing
      </h3>
      <p className="mt-2">
        Verifies seamless integration between the CRM system and other ERP modules to ensure smooth operations.
      </p>
    </motion.div>

    {/* Usability Testing */}
    <motion.div
      className="bg-white shadow-2xl rounded-lg p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img
        src={performance} // Replace with your image
        alt="Usability Testing"
        className="w-full h-48 object-contain rounded-md"
      />
      <h3 className="text-xl font-semibold text-blue-600 mt-4">
        Usability Testing
      </h3>
      <p className="mt-2">
        Assesses the user interface and overall user experience for ease of use.
      </p>
    </motion.div>
  </div>

  {/* Centered Security Testing */}
  <div className="flex justify-center mt-10">
    <motion.div
      className="bg-white shadow-2xl rounded-lg p-4 w-full max-w-3xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img
        src={security} // Replace with your image
        alt="Security Testing"
        className="w-full h-48 object-contain rounded-md"
      />
      <h3 className="text-xl font-semibold text-blue-600 mt-4">
        Security Testing
      </h3>
      <p className="mt-2">
        Identifies and mitigates potential security vulnerabilities within the CRM system, 
        ensuring safe and secure operations.
      </p>
    </motion.div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
            Why Choose QA Vision for ERP Testing?
          </h2>
          <p className="text-lg ">
            By choosing QA Vision, you’re partnering with experts who love
            challenges. We transform challenges into opportunities and provide
            comprehensive ERP testing solutions that enhance your CRM system's
            performance, security, and usability.
          </p>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#4daaf6] text-white text-center sm:mb-2 md:mb-16">
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Let’s Optimize Your Success
          </h2>
          <p className="text-lg mb-8 text-justify px-2">
            QA Vision is recognized as a top ERP testing agency in India. Our
            experts ensure your CRM systems are robust, secure, and
            user-friendly. Reach out to us today for comprehensive ERP testing
            services that optimize your business success.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-blue-600 text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ERPTesting;
