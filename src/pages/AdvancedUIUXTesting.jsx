import React from 'react';
import { FaCheckCircle, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import uiuxtest from "../assets/images/UI_UX_2.jpg";

// Variants for animations
const cardVariants = {
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 200 },
  },
};

const AdvancedUIUXTesting = () => {
  return (
    <div className="">
    <div
    className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url(${uiuxtest})` }}
  >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
       UI/UX Testing Services
        </h2>
      </div>
    </div>
      {/* Title Section */}
      <div className="container mx-auto text-center mb-12 pt-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Advanced UI/UX Testing Services for Appeal & User-friendliness
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          At QA Vision, a top UI/UX testing company in India, we focus on UI/UX testing that goes beyond surface-level evaluations to ensure an exceptional user experience.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Want to make sure your app looks great and feels intuitive? Our experienced UI/UX testers dive deep into interface design, usability, and user interactions to deliver solutions that are not just visually appealing but also super user-friendly.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Our testing approach ensures your product doesn’t just meet but exceeds user expectations, boosting overall satisfaction and engagement.
        </p>
      </div>

      {/* QA Vision's Comprehensive UI/UX Testing Solutions */}
      <div className='container mx-auto px-4'>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          QA Vision’s Comprehensive UI/UX Testing Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Usability Testing', description: 'Evaluates the ease of use and intuitiveness of your application, ensuring a smooth and satisfying user experience.', icon: <FaCheckCircle className="text-blue-800 w-20 h-10" />  },
            { title: 'Accessibility Testing', description: 'Ensures your application is accessible to all users, including those with disabilities, by complying with accessibility standards.', icon: <FaCheckCircle className="text-blue-800 w-20 h-10" />  },
            { title: 'Interface Testing', description: 'Checks the functionality and performance of the user interface elements, ensuring they work seamlessly across various devices and platforms.', icon: <FaCheckCircle className="text-blue-800 w-20 h-10" />  },
            { title: 'Compatibility Testing', description: 'Verifies that your application functions correctly across different browsers, operating systems, and devices, providing a consistent user experience.', icon: <FaCheckCircle className="text-blue-800 w-20 h-10" />  },
            { title: 'Performance Testing', description: 'Measures the responsiveness, stability, and speed of your application under various conditions to ensure optimal performance.', icon: <FaCheckCircle className="text-blue-800 w-20 h-10" />  },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all flex items-center"
              variants={cardVariants}
              whileHover="hover"
            >
            {service.icon}
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Perks Section */}
      <div className="container mx-auto px-4 mt-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Perks of Choosing QA Vision
      </h2>
      <div className="flex flex-wrap justify-center gap-20">
        {/* Perk 1 */}
        <div className="w-full sm:w-72 rounded-xl p-6 shadow-lg">
        <FaCogs className="text-blue-800 text-2xl mb-4" />
          <h3 className="text-lg text-blue-800 font-semibold mb-3">Comprehensive UI/UX Testing</h3>
          <p className='text-gray-700'>Ensuring seamless design and functionality with in-depth testing.</p>
        </div>
        {/* Perk 2 */}
        <div className="w-full sm:w-72 rounded-xl p-6 shadow-lg ">
        <FaCogs className="text-blue-800 text-2xl mb-4" />
          <h3 className="text-lg text-blue-800 font-semibold mb-3">User-Centric Approach</h3>
          <p className='text-gray-700'>Focusing on user satisfaction to deliver impactful results.</p>
        </div>
        {/* Perk 3 */}
        <div className="w-full sm:w-72 rounded-xl p-6 shadow-lg ">
        <FaCogs className="text-blue-800 text-2xl mb-4" />
          <h3 className="text-lg text-blue-800 font-semibold mb-3">Advanced Methodologies</h3>
          <p className='text-gray-700'>Implementing cutting-edge techniques for top-notch testing.</p>
        </div>
        {/* Perk 4 */}
        <div className="w-full sm:w-72 rounded-xl p-6 shadow-lg ">
        <FaCogs className="text-blue-800 text-2xl mb-4" />
          <h3 className="text-lg text-blue-800 font-semibold mb-3">
            Enhanced Usability & Performance
          </h3>
          <p className='text-gray-700'>Optimizing accessibility, usability, and system performance.</p>
        </div>
        {/* Perk 5 */}
        <div className="w-full sm:w-72 rounded-xl p-6 shadow-lg">
        <FaCogs className="text-blue-800 text-2xl mb-4" />
          <h3 className="text-lg text-blue-800 font-semibold mb-3">Experienced Testers</h3>
          <p className='text-gray-700'>Collaborate with experts having 5+ years of industry experience.</p>
        </div>
      </div>
    </div>

      {/* Call to Action */}
      <div className="container mx-auto mt-12 text-center text-white bg-[#4daaf6] p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Join Hands with the Best UI/UX Testing Company in India
        </h2>
        <p className="text-lg mb-8">
          Transform your user experience with our expert UI/UX testing services in India
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/contact-us"
          className="px-6 py-3 text-blue-600 bg-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 hover:text-white"
        >
          Get a Quote
        </motion.a>
      </div>
    </div>
  );
};

export default AdvancedUIUXTesting;
