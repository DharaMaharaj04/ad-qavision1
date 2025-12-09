import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaLaptopCode, FaChartLine, FaRegCheckCircle } from 'react-icons/fa';
import webapp from "../assets/images/autoWebBanner.jpg";
import webAutomationImg from '../assets/images/autoWebExtra.jpg';
import seleniumLogo from '../assets/images/autoWebExtra1.jpg';

const WebAutomationTesting = () => {
  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover mb-8"
      style={{ backgroundImage: `url(${webapp})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Web App Automation Testing
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600">QA Vision – The Best Web App Automation Testing Company</h1>
          <p className="mt-6 text-lg font-light text-justify">
            QA Vision excels in offering top-notch Selenium Web App Automation Testing services. We are a leading web app automation testing services provider, with a team of seasoned QA professionals leveraging cutting-edge tools to deliver efficient, reliable, and scalable solutions.
          </p>
          <p className="mt-6 text-lg font-light text-justify">
            Our expertise spans various industries, enabling us to tailor our services to meet each client's unique needs. We prioritize quality, precision, and timely delivery, ensuring your web applications perform seamlessly in every scenario, no matter what!
          </p>
        </motion.section>

        {/* Reasons to Choose Selenium */}
        <motion.section
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="my-12 bg-gray-50 p-6 rounded-lg shadow-md"
>
  <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Reasons to Choose Selenium Over Other Tools</h2>
  <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <img src={seleniumLogo} alt="Selenium Logo" className="w-full rounded-md shadow-sm" />
    </div>
    
    {/* Text Section */}
    <div className="w-full md:w-1/2">
      <ul className="list-none text-lg font-light space-y-4">
        <li>
          <FaRegCheckCircle className="inline-block w-5 h-5 mr-2 text-blue-500" />
          <strong>Open Source:</strong> Free to use with extensive community support.
        </li>
        <li>
          <FaGlobe className="inline-block w-5 h-5 mr-2 text-blue-500" />
          <strong>Cross-Browser Compatibility:</strong> Works seamlessly across all major browsers.
        </li>
        <li>
          <FaLaptopCode className="inline-block w-5 h-5 mr-2 text-blue-500" />
          <strong>Multi-Language Support:</strong> Compatible with various languages like Java, C#, and Python.
        </li>
        <li>
          <FaChartLine className="inline-block w-5 h-5 mr-2 text-blue-500" />
          <strong>Integration Capabilities:</strong> Easily integrates with other tools and frameworks.
        </li>
        <li>
          <FaRegCheckCircle className="inline-block w-5 h-5 mr-2 text-blue-500" />
          <strong>Scalability & Flexibility:</strong> Handles complex testing scenarios efficiently.
        </li>
      </ul>
    </div>
  </div>
</motion.section>


        {/* Web App Automation Testing Solutions */}
        <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="my-12"
>
  <h2 className="text-3xl font-bold mb-8">
    Web App Automation Testing Solutions We Offer
  </h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div className="order-2 lg:order-1">
      <ul className="grid grid-cols-1 gap-6 text-lg">
        <li className="flex items-start space-x-4">
          <FaGlobe className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Cross-Browser Testing</h3>
            <p className="text-gray-600">
              Ensuring compatibility across all major browsers.
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <FaRegCheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Regression Testing</h3>
            <p className="text-gray-600">
              Identifying and fixing issues from code changes.
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <FaChartLine className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Performance Testing</h3>
            <p className="text-gray-600">
              Assessing speed, responsiveness, and stability.
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <FaRegCheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Functional Testing</h3>
            <p className="text-gray-600">
              Verifying that all features work as intended.
            </p>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <FaLaptopCode className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Integration Testing</h3>
            <p className="text-gray-600">
              Ensuring seamless interaction between components.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div className="order-1 lg:order-2">
      <div className="relative w-full max-w-md mx-auto lg:max-w-none">
        <img
          src={webAutomationImg}
          alt="Web Automation"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500 rounded-full opacity-25 blur-3xl" />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-25 blur-3xl" />
      </div>
    </div>
  </div>
</motion.section>

        {/* Our Process or Methodology */}
        <motion.section
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="my-12"
>
  <h2 className="text-3xl font-bold text-center mb-8">Our Process or Methodology</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Step 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="bg-blue-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
          1
        </span>
        <h3 className="text-lg font-semibold text-gray-800">Requirement Analysis</h3>
      </div>
      <p className="text-gray-600">Understand objectives and requirements.</p>
    </div>
    {/* Step 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="bg-blue-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
          2
        </span>
        <h3 className="text-lg font-semibold text-gray-800">Test Planning</h3>
      </div>
      <p className="text-gray-600">Develop a comprehensive test plan.</p>
    </div>
    {/* Step 3 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="bg-blue-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
          3
        </span>
        <h3 className="text-lg font-semibold text-gray-800">Test Case Development</h3>
      </div>
      <p className="text-gray-600">Create detailed test cases and scripts.</p>
    </div>
    {/* Step 4 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="bg-blue-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
          4
        </span>
        <h3 className="text-lg font-semibold text-gray-800">Test Execution</h3>
      </div>
      <p className="text-gray-600">Execute tests using Selenium.</p>
    </div>
    {/* Step 5 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="bg-blue-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
          5
        </span>
        <h3 className="text-lg font-semibold text-gray-800">Reporting</h3>
      </div>
      <p className="text-gray-600">Provide detailed results and recommendations.</p>
    </div>
    {/* Step 6 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="bg-blue-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
          6
        </span>
        <h3 className="text-lg font-semibold text-gray-800">Maintenance</h3>
      </div>
      <p className="text-gray-600">
        Update test scripts for application changes.
      </p>
    </div>
  </div>
</motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center py-12 bg-[#4daaf6] text-white rounded-lg my-16"
        >
          <h2 className="text-3xl font-bold mb-4">Need to Discuss Your Requirement?</h2>
          <p className="text-lg font-light mb-6">
            Let Our Experts Take Your Web Applications to the Next Level with Web App Automation Testing.
          </p>
          <a href='/contact-us'>
          <motion.button
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default WebAutomationTesting;
