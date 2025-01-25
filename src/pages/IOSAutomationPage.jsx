import React from 'react';
import { FaCheckCircle, FaClock, FaUndo, FaMobileAlt, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import IOSbanner from "../assets/images/autoIOSBanner.jpg";
import autoIOS from '../assets/images/autoIOSExtra.jpg';
import autoIOSimage from '../assets/images/autoIOSExtra1.jpg';

const IOSAutomationPage = () => {
  return (
    <div className=' '>

    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover mb-8"
      style={{ backgroundImage: `url(${IOSbanner})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          ISO Automation Testing
          </h2>
        </div>
      </div>

    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-600 mb-8"
      >
        Cutting-edge iOS Automation Testing Services in India
      </motion.h1>

      {/* Paragraphs */}
      {["In the competitive digital arena of mobile applications, ensuring a flawless user experience on iOS devices is imperative. QA Vision specializes in iOS Automation Testing services under the Selenium framework, providing top-notch testing solutions to guarantee the optimal performance of your iOS apps, simply because you cannot compromise on the performance aspect.",
        "The good news is that our expert team has got you covered! Our experts leverage the power of Selenium to automate testing across a wide array of iOS devices and versions, ensuring comprehensive coverage and accurate results.",
        "By leveraging extensive experience and advanced tools, team QA Vision delivers precise, efficient, and reliable testing services.",
        "As a leading iOS automation testing company in India, we offer bespoke solutions tailored to the unique needs of your iOS applications. At QA Vision, we are committed to ensuring quality and excellence, helping you deliver seamless and bug-free apps that meet the highest standards of performance and usability."
      ].map((text, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-lg font-light text-justify mb-4"
        >
          {text}
        </motion.p>
      ))}
      
      <div className="w-full flex justify-center rounded-xl mb-8">
      <img src={autoIOS} alt="Selenium Logo" className="w-[40%] rounded-md shadow-sm mb-4" />
    </div>

      {/* Selenium iOS Automation Testing Services Offered */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl font-bold text-blue-600 mb-4"
      >
        Selenium iOS Automation Testing Services Offered
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-light text-justify mb-6"
      >
        At QA Vision, we offer a range of iOS Automation Testing solutions to ensure your applications function flawlessly:
      </motion.p>

      {/* Modern Card Style for Bullets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "Functional Testing", desc: "Verifying that all features of your iOS app work as intended.", icon: <FaCheckCircle className="text-dark w-10 h-10" /> },
          { title: "Performance Testing", desc: "Assessing the speed, responsiveness, and stability of your iOS app under various conditions.", icon: <FaClock className="text-dark w-14 h-10" /> },
          { title: "Regression Testing", desc: "Ensuring that new code changes do not affect the existing functionality of your iOS app.", icon: <FaUndo className="text-dark w-10 h-10" /> },
          { title: "Compatibility Testing", desc: "Ensuring your iOS app works seamlessly across different iOS devices and versions.", icon: <FaMobileAlt className="text-dark w-10 h-10" /> },
          { title: "UI/UX Testing", desc: "Evaluating the user interface and user experience to ensure it meets the expected standards and provides a positive user experience.", icon: <FaEye className="text-dark w-20 h-10" /> },
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 p-6 rounded-lg shadow-lg text-DARK transition duration-300 flex items-center"
          >
            {service.icon}
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Selenium is Ideal for iOS Automation Testing */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-3xl font-bold text-blue-600 mt-8 mb-4"
      >
        Why Selenium is Ideal for iOS Automation Testing Services?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="text-lg font-light text-justify mb-4"
      >
        QA Vision is simply fond of Selenium as it is an ideal choice for iOS automation owing to its robust open-source framework, offering flexibility and scalability for testing iOS applications. Besides, it supports multiple programming languages, allowing seamless integration with existing tech stacks. Selenium's extensive community ensures continuous updates and support, enhancing its reliability.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-lg font-light text-justify mb-6"
      >
        Its ability to automate browser interactions on iOS devices ensures comprehensive test coverage and accurate results. Additionally, Selenium's compatibility with various CI/CD tools streamlines the automation process, making it efficient and cost-effective.
      </motion.p>
    
    <div className="w-full flex justify-center">
    <img src={autoIOSimage} alt="Automation IOS" className="w-[40%] rounded-md shadow-sm" />
  </div>
      

      {/* Perks of Choosing QA Vision for iOS Automation Testing Services */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="text-3xl font-bold text-blue-600 mt-8 mb-4"
      >
        Perks of Choosing QA Vision for iOS Automation Testing Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { text: "Expertise and Experience: Our team has extensive experience in Selenium and iOS testing.", icon: <FaCheckCircle className="text-dark w-10 h-10" /> },
          { text: "Customized Solutions: We provide tailored testing services to meet your app's specific requirements.", icon: <FaCheckCircle className="text-dark w-10 h-10" /> },
          { text: "Streamlined Process: Our efficient testing methodology ensures thorough and reliable results.", icon: <FaCheckCircle className="text-dark w-10 h-10" /> },
          { text: "Advanced Tools: We use the latest Selenium tools and technologies for accurate and efficient testing.", icon: <FaCheckCircle className="text-dark w-10 h-10" /> },
          { text: "Customer-Centric Approach: We prioritize your needs, offering personalized and responsive support throughout the testing process.", icon: <FaCheckCircle className="text-dark w-16 h-10" /> },
          { text: "Quality Assurance: We are committed to delivering high-quality testing services, ensuring your iOS apps perform optimally and provide a seamless user experience.", icon: <FaCheckCircle className="text-dark w-16 h-10" /> },
        ].map((perk, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 p-6 rounded-lg shadow-lg text-dark transition duration-300 flex items-center"
          >
            {perk.icon}
            <p className="ml-4">{perk.text}</p>
          </motion.div>
        ))}
      </div>
      <div className='text-center py-12 bg-[#4daaf6] text-white rounded-lg my-16'>
      {/* Transform your iOS Applications with QA Vision’s Automation Testing */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="text-3xl font-bold mt-8 mb-4 text-center"
      >
        Transform your IOS Applications with QA Vision’s Automation Testing
      </motion.h2>
      <a href='/contact-us'>
      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="bg-white text-blue-800 px-6 py-3 rounded-lg mt-6 mx-auto block hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Get in Touch with Us!
      </motion.button>
      </a>
      </div>
    </div>
    </div>
  );
};

export default IOSAutomationPage;
