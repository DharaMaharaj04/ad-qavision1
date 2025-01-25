import React from 'react';
import { FaChartLine, FaServer, FaTools, FaTrafficLight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Jmeter1 from "../assets/images/jmeter-5.jpg";
import Jmeter3 from "../assets/images/jmeter-1.jpg";
import Jmeter4 from "../assets/images/7034334.jpg";


const JMeter = () => {
  return (
    <div className=" ">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Jmeter4})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          JMeter Automation Testing
          </h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 className="text-5xl font-extrabold text-blue-600"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            JMeter Automation Testing Service Company in India
          </motion.h1>
          <motion.p className="mt-6 text-lg font-light text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
          Ever wondered how your software handles peak traffic? QA Vision is
          a top JMeter automation testing service company in India, and we’re
          all about delivering top-notch performance and load-testing
          solutions.
          
          With our JMeter expertise, we accurately assess your software’s
          performance under different load conditions. Want to ensure your
          applications can handle high traffic and provide a smooth user
          experience? We’ve got you covered with our comprehensive JMeter
          automation testing services!
          </motion.p>
          <motion.p className="mt-6 text-lg font-bold text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
          Our experienced team of automation testing experts has a stellar
          track record. Do you wonder how we simulate real-world user
          behavior?
          </motion.p>
          <motion.p className="mt-6 text-lg font-light text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
          With our JMeter expertise, we accurately assess your software’s
          performance under different load conditions. Want to ensure your
          applications can handle high traffic and provide a smooth user
          experience? We’ve got you covered with our comprehensive JMeter
          automation testing services!
          </motion.p>
        
        </motion.section>

        {/* Expertise Section */}
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
            JMeter Automation Testing Services in India
            </h2>
            <p className="text-lg font-light">
            At QA Vision, we specialize in offering top-tier JMeter automation
            testing services in India. Our team of experienced professionals uses
            JMeter to conduct thorough performance testing, identifying critical
            bottlenecks and performance issues before they impact your users.
            By leveraging JMeter’s robust capabilities, we deliver detailed
            insights into your application&#39;s performance, helping you optimize
            and enhance your system&#39;s reliability.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={Jmeter4}
              alt="JMeter Expertise"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>
        </motion.section>

        {/* JMeter Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white py-12 px-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Load Testing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Best JMeter Automation Testing Solutions in India
              </h3>
              <p>
              Our commitment to excellence positions us among the best JMeter
automation testing solutions in India. We utilize advanced testing
strategies and tools to provide accurate, reliable results. Our JMeter
automation testing services include load testing, stress testing, and
performance monitoring, ensuring your applications meet the
highest standards of performance and stability.
              </p>
            </motion.div>

            {/* Stress Testing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Top JMeter Automation Testing Services Near Me
              </h3>
             <p>
             Looking for top JMeter automation testing services near me? QA
             Vision is your go-to partner for all your performance testing needs.
             Our localized services ensure that you receive personalized support
             and solutions tailored to your specific requirements. With QA Vision,
             you benefit from the expertise of one of the best JMeter automation
             testing service companies in India, right at your doorstep.
             </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose QA Vision Section */}
        <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose QA Vision for JMeter Automation Testing?
            </h2>
            <ul className="space-y-4 text-lg font-light">
              <li className="flex items-center">
                <FaTools className="text-blue-500 mr-2" />
                <span><strong className="font-semibold text-blue-500">Expert Team: </strong> Skilled professionals with extensive experience in JMeter and performance testing.</span>
              </li>
              <li className="flex items-center">
                <FaServer className="text-blue-500 mr-2" />
                <span><strong className="font-semibold text-blue-500">Comprehensive Services: </strong> Full range of testing solutions, including load testing and performance optimization.</span>
              </li>
              <li className="flex items-center">
                <FaChartLine className="text-blue-500 mr-2" />
                <span><strong className="font-semibold text-blue-500">Advanced Tools: </strong> Utilization of the latest JMeter features and techniques for accurate results.</span>
              </li>
              <li className="flex items-center">
                <FaTrafficLight className="text-blue-500 mr-2" />
                <span><strong className="font-semibold text-blue-500">Customer Focus: </strong> Personalized services tailored to meet your specific needs and objectives.</span>
              </li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={Jmeter3}
              alt="Why Choose Us"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center py-12 bg-[#4daaf6] text-white rounded-lg my-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Software Performance?
          </h2>
          <p className="text-lg font-light mb-6">
            Contact QA Vision today to learn more about our JMeter automation testing services and get a free quote!
          </p>
          <a href='/contact-us'>
          <motion.button
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default JMeter;
