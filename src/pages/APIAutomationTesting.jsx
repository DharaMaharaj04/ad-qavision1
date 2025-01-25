import { FaClipboardCheck, FaFileAlt, FaCog, FaRocket, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import APIapp from "../assets/images/autoAPIBanner.jpg";
import APIAutomationImg from '../assets/images/autoAPIExtra.jpg';

const APIAutomationTesting = () => {
  return (
    <div className=''>
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover mb-8"
      style={{ backgroundImage: `url(${APIapp})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          API Automation Testing
          </h2>
        </div>
      </div>

    <div className="max-w-6xl mx-auto px-6 py-8">

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-lg font-light text-justify mb-4"
      >
      Welcome to QA Vision-  where API automation testing is a breeze. API automation testing is essential for ensuring that your software applications interact seamlessly and function as intended. At QA Vision, we use Selenium to address key challenges in API testing, including inconsistent responses, performance issues, and integration errors. Automating these tests enhances accuracy and speeds up validation, providing a reliable solution for your software needs.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="text-2xl font-bold text-blue-600 mt-8 mb-4 text-center"
      >
        Why is API Automation Testing Critical?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="text-lg font-light text-justify mb-4"
      >
        API automation testing is crucial for detecting issues that might elude manual testing. It ensures smooth communication between systems, accurate data flow, and overall software reliability. Automation tackles challenges such as performance bottlenecks, response inconsistencies, and integration flaws, which are vital for maintaining high-quality software.
      </motion.p>

      <div className="w-full flex justify-center text-center">
      <img src={APIAutomationImg} alt="Automation IOS" className="w-[40%] rounded-md shadow-sm" />
    </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="text-2xl font-bold mt-8 mb-4"
      >
        Full-Suite of API Automation Testing Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Test Strategy Development",
            description: "We create customized testing strategies to fit your specific API needs, ensuring comprehensive coverage and effective results.",
            icon: <FaClipboardCheck className="text-blue-600 text-3xl" />,
            
          },
          {
            title: "API Test Case Design",
            description: "Our team designs robust test cases to validate API functionality, performance, and security.",
            icon: <FaFileAlt className="text-blue-600 text-3xl" />,
           
          },
          {
            title: "Test Automation Implementation",
            description: "Using Selenium, we automate the execution of test cases, improving efficiency and accuracy.",
            icon: <FaCog className="text-blue-600 text-3xl" />,
            
          },
          {
            title: "Performance Testing",
            description: "We evaluate the performance of your APIs under various load conditions to ensure they handle traffic smoothly.",
            icon: <FaRocket className="text-blue-600 text-3xl" />,
            
          },
          {
            title: "Continuous Integration Support",
            description: "We integrate our automated tests into your CI/CD pipeline for seamless, ongoing testing.",
            icon: <FaLink className="text-blue-600 text-3xl" />,
            
          },
        ].map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 flex items-center">
                {service.icon} &nbsp; {service.title}
              </h4>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.9 }}
        className="text-2xl font-bold text-blue-600 mt-8 mb-4 text-center"
      >
        Why QA Vision for Seamless API Automation Testing?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="text-lg font-light text-justify mb-4"
      >
        At QA Vision, we excel in transforming API testing into a smooth, efficient process. Our expert team utilizes Selenium to address critical issues like performance bottlenecks and integration errors, ensuring accurate and reliable results. We formulate bespoke strategies to meet your unique needs, delivering comprehensive coverage and actionable insights.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.1 }}
        className="text-lg font-light text-justify mb-4"
      >
        By integrating seamlessly into your CI/CD pipeline, our automation services enhance accuracy and accelerate validation. Trust QA Vision for a streamlined approach that boosts your software's reliability and performance.
      </motion.p>
      <motion.section
     initial={{ opacity: 0, scale: 0.8 }}
     whileInView={{ opacity: 1, scale: 1 }}
     transition={{ duration: 1 }}
     className="text-center py-12 bg-blue-100 rounded-lg my-16"
   >
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="text-lg font-light text-white text-center mb-6 md:px-8"
      >
        Partner with QA Vision to elevate your API testing strategy. Our expert services ensure that your API testing is automated and optimized for excellence.
      </motion.p>
       <a href='/contact-us'>
      <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded mt-4 hover:bg-blue-600 hover:text-white">
        Let’s Go!
      </button>
      </a>
      </motion.section>
    </div>
    </div>
  );
};

export default APIAutomationTesting;
