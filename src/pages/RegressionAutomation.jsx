import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaTools, FaFastForward, FaSitemap } from 'react-icons/fa';

// Import your images here
import regressionLogo from '../assets/images/autoRegressionBanner.jpg';
import regressionTestingImage from '../assets/images/autoRegressionExtra.jpg';

const RegressionAutomation = () => {
  return (
    <div className=" ">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover mb-8"
      style={{ backgroundImage: `url(${regressionLogo})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Regression Testing
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 px-6"
        >
          <motion.h1 className="text-5xl font-extrabold text-blue-600">
            QA Vision's Regression Automation Testing Services
          </motion.h1>
          <motion.p className="mt-6 text-lg font-light text-justify">
            At QA Vision, we stand out as a top-tier regression automation testing agency in India due to our deep specialization in Selenium-based solutions. Our state-of-the-art infrastructure and advanced Selenium frameworks ensure that your software remains robust and reliable through every update and enhancement.
          </motion.p>
          <motion.p className="mt-4 text-lg font-light text-justify">
            Our dedicated team of experts leverages Selenium’s powerful capabilities to deliver precise, efficient testing, ensuring that each feature performs flawlessly after changes. We have invested heavily in cutting-edge testing tools and a highly skilled workforce, which allows us to tackle even the most complex testing scenarios with ease.
          </motion.p>
          <img src={regressionTestingImage} alt="Regression Automation Testing" className="mt-8 mx-auto rounded shadow-lg w-[60%]" />
        </motion.section>

       
<motion.section
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
className="my-12"
>
<h2 className="text-3xl font-bold mb-6 text-center">
  Why Regression Automation Testing?
</h2>

<motion.p className="text-lg font-light text-justify mb-6">
  In the fast-paced world of software, even small updates can mess with existing features. That’s where regression automation testing comes in—it's crucial for making sure new changes don’t cause new bugs or mess up what’s already working. Partnering with a leading regression automation testing agency in India like QA Vision helps you manage risks and keep your software in top shape. It’s a smart, time-saving way to boost the overall user experience.
</motion.p>

{/* Unique Card container for bullet points */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Card 1 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className=" p-6 rounded-lg shadow-xl text-dark transition duration-300"
  >
    <h3 className="text-xl font-semibold mb-2">Identifies New Defects Early</h3>
    <p>Detect issues before they impact end users.</p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className=" p-6 rounded-lg shadow-xl text-white transition duration-300"
  >
    <h3 className="text-xl text-dark font-semibold mb-2">Reduces Manual Testing Efforts</h3>
    <p className='text-dark'>Automates repetitive tasks to save time and resources.</p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className=" p-6 rounded-lg shadow-xl text-dark transition duration-300"
  >
    <h3 className="text-xl font-semibold mb-2">Ensures Software Stability</h3>
    <p>Verifies that new changes don’t disrupt existing features.</p>
  </motion.div>

  {/* Card 4 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="p-6 rounded-lg shadow-xl text-dark transition duration-300"
  >
    <h3 className="text-xl font-semibold mb-2">Enhances Quality Assurance</h3>
    <p>Provides comprehensive coverage and reliability.</p>
  </motion.div>

  {/* Card 5 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="p-6 rounded-lg shadow-xl text-dark transition duration-300"
  >
    <h3 className="text-xl font-semibold mb-2">Speeds Up Testing Process</h3>
    <p>Accelerates release cycles and time-to-market.</p>
  </motion.div>
</div>
</motion.section>

        {/* Services Provided by QA Vision */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Regression Automation Testing Services Provided by QA Vision
          </h2>
          <motion.p className="text-lg font-light mb-6">
            QA Vision offers an extensive suite of regression automation testing services using Selenium. We tailor our approach to meet your specific needs, ensuring thorough and efficient testing processes. Our services cover all aspects of regression automation, from initial setup to ongoing maintenance.
          </motion.p>
          <ul className="list-none list-inside mb-6 text-lg font-light">
            <li><FaSitemap className="inline-block w-5 h-5 mr-2 text-blue-500" />Custom Automation Frameworks: Designed to fit your unique testing requirements.</li>
            <li><FaTools className="inline-block w-5 h-5 mr-2 text-blue-500" />Test Script Development: Creation of reusable and maintainable scripts.</li>
            <li><FaFastForward className="inline-block w-5 h-5 mr-2 text-blue-500" />Test Execution: Automated running of regression tests.</li>
            <li><FaCheckCircle className="inline-block w-5 h-5 mr-2 text-blue-500" />Detailed Reporting: In-depth analysis and documentation of test results.</li>
            <li><FaTools className="inline-block w-5 h-5 mr-2 text-blue-500" />Continuous Maintenance: Ongoing updates and adjustments to test scripts as needed.</li>
          </ul>
        </motion.section>

<motion.section
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
className="my-12"
>
<h2 className="text-3xl font-bold mb-8 text-center">
  Perks of Choosing QA for Regression Automation Testing
</h2>

{/* Card container */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Card 1 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
  >
    <div className="text-blue-500 text-4xl mb-4">
      <FaCheckCircle />
    </div>
    <h3 className="text-xl font-semibold mb-2">Enhanced Accuracy</h3>
    <p className="text-gray-600">Precise testing with minimal errors.</p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
  >
    <div className="text-blue-500 text-4xl mb-4">
      <FaRocket />
    </div>
    <h3 className="text-xl font-semibold mb-2">Faster Turnaround</h3>
    <p className="text-gray-600">Quicker identification and resolution of issues.</p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
  >
    <div className="text-blue-500 text-4xl mb-4">
      <FaTools />
    </div>
    <h3 className="text-xl font-semibold mb-2">Expertise with Selenium</h3>
    <p className="text-gray-600">Leveraging advanced tools for optimal results.</p>
  </motion.div>

  {/* Card 4 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
  >
    <div className="text-blue-500 text-4xl mb-4">
      <FaSitemap />
    </div>
    <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
    <p className="text-gray-600">Flexible services to match your needs.</p>
  </motion.div>
</div>
</motion.section>


        {/* Streamlined Process Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Our Streamlined Process at a Glance
          </h2>
          <ul className="list-none list-inside mb-6 text-lg font-light">
            <li>Requirement Analysis: Understand your needs and objectives.</li>
            <li>Script Development: Create and customize test scripts using Selenium.</li>
            <li>Test Execution: Run automated tests and collect data.</li>
            <li>Result Analysis: Review and document test outcomes.</li>
            <li>Feedback and Refinement: Continuously improve testing processes based on results.</li>
          </ul>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center py-12 bg-[#4daaf6] text-white rounded-lg my-16 px-6"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Your Software Quality Notches Higher?
          </h2>
          <a href='/contact-us'>
          <motion.button
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule An Appointment
          </motion.button>
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default RegressionAutomation;
