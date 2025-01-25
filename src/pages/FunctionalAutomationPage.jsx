import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import functionalbanner from "../assets/images/autoFunctionalBanner.jpg";
import functionalimage from "../assets/images/autoFunctionalExtra.jpg";

const FunctionalAutomationPage = () => {
  return (
    <div className=''>

    <div
    className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
    style={{ backgroundImage: `url(${functionalbanner})` }}
  >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Functional Automation Testing
          </h2>
        </div>
        </div>

    <div className="max-w-6xl mx-auto px-6 py-8 md:pt-32">

      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-600 mb-8"
      >
        QA Vision for Advanced Functional Automation Testing Solutions
      </motion.h1>

      {/* Paragraph Section */}
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-light text-justify mb-4"
      >
        Functional automation testing is key to ensuring your apps run smoothly and without a hitch. At QA Vision, we’re seasoned pros in top-notch functional automation testing, so your software works just as it should.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-light text-justify mb-4"
      >
        As your go-to functional automation testing company in India, we use the latest tools and methods to provide reliable, efficient testing solutions tailored just for you.
      </motion.p>

      {/* Benefits Section */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl font-bold text-blue-600 mt-8 mb-4"
      >
        Benefits of Functional Automation Testing
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-light text-justify mb-6"
      >
        Implementing functional automation testing offers numerous benefits, including:
      </motion.p>

      {/* Benefits Bullets */}
      <ul className="list-disc list-inside mb-4">
        <motion.li
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-start mb-2"
        >
          <FaCheckCircle className="text-blue-600 mr-2" />
          Increased Efficiency: Automation significantly reduces the time and effort required for testing, allowing for faster releases.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-start mb-2"
        >
          <FaCheckCircle className="text-blue-600 mr-2" />
          Enhanced Accuracy: Automated tests eliminate human errors, ensuring more reliable results.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-start mb-2"
        >
          <FaCheckCircle className="text-blue-600 mr-2" />
          Cost-Effective: Over time, automation reduces testing costs by minimizing the need for manual intervention.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-start mb-2"
        >
          <FaCheckCircle className="text-blue-600 mr-2" />
          Scalability: Automated tests can be easily scaled to cover more functionalities as your application grows.
        </motion.li>
      </ul>

      <hr className='text-gray-600 py-4 m-8'></hr>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="text-3xl font-bold text-blue-600 mt-8 mb-4"
      >
        Our Step By Step Modus Operandi
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-lg font-light text-justify mb-4"
      >
        At QA Vision, our functional automation testing process is meticulous and thorough, ensuring that all aspects of your application are tested rigorously. Our process includes:
      </motion.p>

      <div className="relative">
        {/* Stepper */}
        <div className="space-y-8">
          {[
            { title: "Requirement Analysis", description: "Understanding your application’s functionality and identifying key areas that require testing." },
            { title: "Test Planning", description: "Developing a detailed test plan that outlines the testing strategy, tools to be used, and timelines." },
            { title: "Script Development", description: "Creating robust and reusable test scripts using industry-standard automation tools." },
            { title: "Test Execution", description: "Running the test scripts across various environments to validate the functionality of the application." },
            { title: "Result Analysis & Reporting", description: "Analyzing the test results and providing detailed reports, highlighting any issues or bugs found." },
          ].map((step, index) => (
            <div key={index} className="flex items-start">
              {/* Step Number */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                {index + 1}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-blue-600">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Our Step By Step Modus Operandi Section */}
      <hr className='text-gray-600 py-8 m-8'></hr>
      <div className="w-full flex justify-center">
      <img src={functionalimage} alt="Automation IOS" className="w-[40%] rounded-md shadow-sm" />
    </div>
      {/* Selenium Functional Automation Testing Services Section */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="text-3xl font-bold text-blue-600 mt-8 mb-4"
      >
        Our Selenium Functional Automation Testing Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.9 }}
        className="text-lg font-light text-justify mb-8"
      >
        At QA Vision, we offer a comprehensive suite of Selenium functional automation testing services designed to ensure top-quality performance for your applications.
      </motion.p>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Individual Card */}
        {[
          {
            title: 'Test Automation Strategy and Planning',
            description: 'We develop a tailored automation strategy, selecting the right tools and defining objectives to ensure comprehensive test coverage and effective results.',
          },
          {
            title: 'Test Script Development',
            description: 'Our team creates and maintains reusable Selenium test scripts to automate functional testing, covering all critical aspects of your application.',
          },
          {
            title: 'Cross-Browser and Cross-Platform Testing',
            description: 'We perform automated testing across various browsers and platforms using Selenium WebDriver, ensuring consistent functionality regardless of the user’s environment.',
          },
          {
            title: 'Integration with CI/CD Pipelines',
            description: 'We integrate Selenium tests with CI/CD pipelines using tools like Jenkins and GitLab, streamlining the testing process for faster feedback and releases.',
          },
          {
            title: 'Performance Testing and Optimization',
            description: 'We assess and optimize your application’s performance under different conditions to enhance testing efficiency.',
          },
          {
            title: 'Test Maintenance & Support',
            description: 'We provide ongoing support for maintaining and updating test scripts to keep pace with application changes and new features.',
          },
          {
            title: 'Detailed Reporting & Analytics',
            description: 'Our functional automation testing includes detailed reporting and analytics of test results, highlighting issues. Our experts also provide recommendations for improvements.',
          },
          {
            title: 'Custom Test Framework Development',
            description: 'We develop custom test frameworks with Selenium, integrating them with other tools to meet your specific needs and streamline the testing process.',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FunctionalAutomationPage;
