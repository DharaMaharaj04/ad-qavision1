import React from 'react';
import { motion } from 'framer-motion';
import manualTest from "../assets/images/UI_UX_3.jpg";


const ManualTestingServices = () => {

    const benefits = [
        {
          title: 'Experienced Team of Testers',
          description:
            'Our team of experienced testers with deep domain knowledge has a proven track record in delivering high-quality results.',
          icon: '👥',
        },
        {
          title: 'Custom Testing Solutions',
          description:
            'We offer bespoke testing strategies tailored to the specific needs of your application, ensuring personalized service.',
          icon: '🛠️',
        },
        {
          title: 'Cost-Effective',
          description:
            'Competitive pricing while maintaining the highest standards in manual testing services.',
          icon: '💰',
        },
        {
          title: 'Quick Turnaround Time',
          description:
            'We stick to strict deadlines to ensure timely delivery of testing reports and bug fixes.',
          icon: '⏱️',
        },
        {
          title: 'Comprehensive Reporting',
          description:
            'Detailed and easy-to-understand reports that highlight issues and offer solutions for improvement.',
          icon: '📊',
        },
      ];


  return (
    <div className=" ">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${manualTest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          functional Manual Testing Services
          </h2>
        </div>
      </div>
      {/* Title Section */}
      <div className="container mx-auto px-4 text-center mb-12 pt-8">
        <h1 className="text-3xl font-bold text-blue-500">
          Value-Rich Manual Testing Services for Quality Assurance
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          At QA Vision, our manual testing services are designed to provide your software applications with the highest level of quality assurance. We understand that each application is unique and requires meticulous attention to detail to identify any potential issues.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Looking for top-notch manual testing? As one of the best manual testing companies, our skilled testers bring a wealth of experience to the table. We’re all about making sure your software is bug-free, meets all the standards, and hits every requirement.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Curious about our approach? With our keen eye for detail and deep knowledge of testing methodologies, we deliver exceptional value to clients worldwide with our thorough manual testing services.
        </p>
      </div>

      {/* QA’s Step-by-Step Modus Operandi */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          QA’s Step-by-Step Modus Operandi at a Glance
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          At QA Vision, we follow a proven manual testing methodology comprising a series of rigorous tests. Being your trusted manual testing service provider, we follow a structured and efficient approach to manual testing for thoroughness and accuracy at all times.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 'Initial Planning',
              description: 'At this stage, we analyze the project requirements and define the testing scope.',
            },
            {
              step: 'Preparation',
              description: 'Testers chalk out a detailed plan outlining use cases, scenarios, and strategies.',
            },
            {
              step: 'Execution Stage',
              description: 'Defects and issues are uncovered as our manual software testers perform tests using sophisticated techniques and systems.',
            },
            {
              step: 'Closure',
              description: 'All defects are reported, documented, and we conduct a final review to ensure closure.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-3">{item.step}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose QA Vision Section */}
      <div className="container mx-auto px-4 text-center mb-12">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Why Choose QA Vision for Manual Testing Services?
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Experience the QA Vision advantage with a team committed to delivering the best manual testing services.
      </p>
    </div>

    {/* Benefits Section */}
    <div className="container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Icon */}
          <div className="text-5xl mb-4 text-blue-600">{benefit.icon}</div>

          {/* Benefit Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {benefit.title}
          </h3>

          {/* Benefit Description */}
          <p className="text-gray-600">{benefit.description}</p>
        </motion.div>
      ))}
    </div>

      {/* Call to Action */}
      <div className="text-center mt-12 bg-[#4daaf6] text-white p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4">
          Get Rid of Bugs with QA Vision's Manual Testing
        </h2>
        <p className="text-lg mb-8">
          Partner with QA Vision, one of the best companies offering manual testing services in India.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/contact-us"
          className="px-6 py-3 text-blue-600 bg-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 hover:text-white"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
};

export default ManualTestingServices;
