import React from "react";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaCheckCircle,
  FaChartLine,
  FaUser,
} from "react-icons/fa";

// Import your images here
import appiumtest from "../assets/images/10200835.jpg";

const AppiumTesting = () => {
  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${appiumtest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Appium Testing Services
          </h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 className="text-5xl font-extrabold text-blue-600">
            QA Vision’s Premium Mobile Automation Testing with Appium
          </motion.h1>
          <motion.p className="mt-6 text-lg font-light text-justify">
            At QA Vision, we’ve got your mobile automation testing covered with
            Appium, the top open-source framework out there. Whether you’re
            working with Android or iOS, our Appium expertise means we can
            deliver thorough testing solutions for your apps.
          </motion.p>
        </motion.section>

        {/* Android App Automation Testing Section */}
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
        <h2 className="text-4xl font-bold text-center mb-8">
        Result-Oriented Android App Automation Testing Solutions
      </h2>
      
      {/* Introductory Text */}
      <motion.p 
        className="text-lg font-light text-gray-700 text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        As a premier Android app automation testing company in India, we are trusted for cutting-edge automation testing solutions. QA Vision leverages Appium’s robust framework to test a wide range of Android devices and operating systems. Our Android app automation testing services comprise the following:
      </motion.p>
    
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Functional Testing */}
        <div className="flex items-start p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-500 text-white rounded-full mr-4">
            <FaCheckCircle className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Functional Testing
            </h3>
            <p className="text-gray-700">
              Ensures all features work as intended across different devices and OS versions.
            </p>
          </div>
        </div>
    
        {/* Performance Testing */}
        <div className="flex items-start p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-500 text-white rounded-full mr-4">
            <FaChartLine className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Performance Testing
            </h3>
            <p className="text-gray-700">
              Our team identifies and resolves performance bottlenecks to improve app speed and responsiveness.
            </p>
          </div>
        </div>
    
        {/* Usability Testing */}
        <div className="flex items-start bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-500 text-white rounded-full mr-4">
            <FaUser className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-500 mb-2">
              Usability Testing
            </h3>
            <p className="text-gray-700">
              Evaluate the app’s user interface and user experience to ensure ease of use.
            </p>
          </div>
        </div>
    
        {/* Compatibility Testing */}
        <div className="flex items-start p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-500 text-white rounded-full mr-4">
            <FaAndroid className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Compatibility Testing
            </h3>
            <p className="text-gray-700">
              Verifies app performance on Android devices of varied screen sizes.
            </p>
          </div>
        </div>
      </div>
          <motion.p className="text-lg mt-8 font-light">
            With a meticulous & streamlined testing process in place, our pool
            of Android app automation testers in India helps you deliver
            high-end Android apps that meet the expectations of your end-users
            and business objectives.
          </motion.p>
        </motion.section>

        {/* iOS App Automation Testing Section */}
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
 
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center mb-8">
          iOS App Automation Testing for Effective Outcomes
        </h2>
        
        {/* Introductory Text */}
        <motion.p 
          className="text-lg font-light text-gray-700 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          QA Vision leverages the power of Appium to offer unparalleled iOS app automation testing solutions. Our services are crafted to address all critical areas, ensuring seamless app functionality. Explore our core offerings:
        </motion.p>
        
        {/* Timeline Section */}
        <div className="relative border-l-4 border-purple-600">
          {/* Functionality Testing */}
          <div className="mb-10 ml-8 flex items-start">
            <div className="absolute -left-6 w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full">
              <FaCheckCircle className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                Functionality Testing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our team validates the functionality of app features across diverse iOS versions and devices, ensuring robust performance.
              </p>
            </div>
          </div>
      
          {/* Performance Testing */}
          <div className="mb-10 ml-8 flex items-start">
            <div className="absolute -left-6 w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
              <FaChartLine className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-500 mb-2">
                Performance Testing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive evaluation of app performance under different conditions, ensuring smooth functionality for users.
              </p>
            </div>
          </div>
      
          {/* Usability Testing */}
          <div className="mb-10 ml-8 flex items-start">
            <div className="absolute -left-6 w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full">
              <FaUser className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-500 mb-2">
                Usability Testing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We test the app's interface to ensure consistency, ease of use, and a seamless user experience.
              </p>
            </div>
          </div>
      
          {/* Compatibility Testing */}
          <div className="mb-10 ml-8 flex items-start">
            <div className="absolute -left-6 w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full">
              <FaApple className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-2">
                Compatibility Testing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ensures compatibility across various iOS devices, including iPhones and iPads, for consistent performance.
              </p>
            </div>
          </div>
        </div>
      
          <motion.p className="text-lg font-light">
            Our iOS app automation testing services ensure your app is free from
            defects and performs optimally, providing a superior user
            experience.
          </motion.p>
        </motion.section>

        {/* Why Choose QA Vision Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Perks of Choosing QA Vision for Appium Testing?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="flex items-start gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-blue-500 text-3xl">
                <i className="fas fa-user-check"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-700 text-base">
                  Our team of testers has extensive experience of 7+ years in
                  mobile automation testing using Appium.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-start gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-blue-500 text-3xl">
                <i className="fas fa-list-check"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Comprehensive Testing
                </h3>
                <p className="text-gray-700 text-base">
                  All aspects of mobile app testing, from functionality and
                  performance to usability and compatibility, are covered.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-start gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-blue-500 text-3xl">
                <i className="fas fa-tools"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Cutting-Edge Tools
                </h3>
                <p className="text-gray-700 text-base">
                  Our team makes optimum use of advanced tools and technologies
                  to deliver accurate and reliable testing results.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex items-start gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-blue-500 text-3xl">
                <i className="fas fa-cogs"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Bespoke Services
                </h3>
                <p className="text-gray-700 text-base">
                  Team QA Vision tailors the services to meet your specific
                  needs, ensuring your app meets all requirements and standards.
                </p>
              </div>
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
          <h2 className="text-3xl font-bold mb-4">
            Top-Tier Mobile App Automation Testing Services
          </h2>
          <p className="text-lg font-light mb-6">
            Experience the power of top-tier mobile automation testing with QA
            Vision.
          </p>
          <a href='/contact-us'>
          <motion.button
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Grab your Quote Now!
          </motion.button>
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default AppiumTesting;
