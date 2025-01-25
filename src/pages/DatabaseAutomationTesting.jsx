import React from 'react';
import { FaDatabase, FaCogs, FaChartBar, FaSync, FaClipboardList, FaPaperPlane, FaUserShield, FaCheckCircle } from 'react-icons/fa';
import dataAUTObanner from '../assets/images/autoWebExtra.jpg';
import dataextraimage from '../assets/images/autoWebExtra1.jpg';

const DatabaseAutomationTesting = () => {
  return (
    <div className=''>
        
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover mb-8"
      style={{ backgroundImage: `url(${dataAUTObanner})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
        Database Automation Testing
          </h2>
        </div>
      </div>




    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Count on QA Vision’s Selenium Database Automation Testing
      </h2>
      <p className="text-lg font-light text-justify mb-6">
        Ensuring the integrity and performance of your database plays an instrumental role in seamless application functionality. QA Vision offers exceptional database automation testing services under the Selenium framework.
      </p>
      <p className="text-lg font-light text-justify mb-6">
        Our team of Selenium database testing pros in India uses cutting-edge tools and methods to provide spot-on testing solutions. For over 5 years, we’ve worked with all kinds of industries, tailoring our services to fit each client's unique needs. With QA Vision, you can count on your database being secure and running smoothly all the time.
      </p>

      <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
        Database Automation Testing Solutions We Offer
      </h2>
      <p className="text-lg font-light text-justify mb-6">
        QA Vision is known for its vast global portfolio. Having served a global clientele, our database automation testing experts in India know what works and what doesn’t.
      </p>
      <p className="text-lg font-light text-justify mb-6">
        We provide a comprehensive range of database automation testing solutions to ensure your database is robust and efficient. Our services include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <FaClipboardList className="text-blue-600" />, text: "Data Validation: Ensuring data integrity and accuracy through automated validation checks." },
          { icon: <FaChartBar className="text-blue-600" />, text: "Database Performance Testing: Assessing and optimizing database performance under various loads." },
          { icon: <FaSync className="text-blue-600" />, text: "Data Migration Testing: Verifying data integrity and consistency during migration processes." },
          { icon: <FaCogs className="text-blue-600" />, text: "ETL Testing: Ensuring correct extraction, transformation, and loading of data." },
          { icon: <FaDatabase className="text-blue-600" />, text: "Regression Testing: Identifying and fixing issues arising from database changes." },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">{item.icon}</div>
              <h3 className="font-bold">{item.text.split(':')[0]}</h3>
            </div>
            <p className="text-sm">{item.text.split(':')[1]}</p>
          </div>
        ))}
      </div>
       
      <div className="w-full flex justify-center pt-8">
      <img src={dataextraimage} alt="database image" className="w-[60%] rounded-md shadow-sm" />
    </div>

      <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
        Our Process or Methodology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          { icon: <FaClipboardList className="text-blue-600" />, text: "Requirement Analysis: Understand database requirements and objectives." },
          { icon: <FaCogs className="text-blue-600" />, text: "Test Planning: Develop a detailed test plan." },
          { icon: <FaDatabase className="text-blue-600" />, text: "Test Case Development: Create comprehensive test cases and scripts." },
          { icon: <FaChartBar className="text-blue-600" />, text: "Test Execution: Execute rigorous tests using Selenium." },
          { icon: <FaPaperPlane className="text-blue-600" />, text: "Reporting: Provide detailed reporting including results and insights." },
          { icon: <FaSync className="text-blue-600" />, text: "Maintenance: Update test scripts for database changes." },
        ].map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">{item.icon}</div>
              <h3 className="font-bold">{item.text.split(':')[0]}</h3>
            </div>
            <p className="text-sm">{item.text.split(':')[1]}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
        Perks of Choosing QA Vision for Selenium Database Automation Testing
      </h2>
      <p className="text-lg font-light text-justify mb-6">
        Choosing QA Vision for Selenium database automation testing services brings a myriad of benefits including, but not limited to:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          { icon: <FaUserShield className="text-blue-600" />, text: "Expertise and Experience: Skilled QA professionals with extensive Selenium experience." },
          { icon: <FaClipboardList className="text-blue-600" />, text: "Customized Solutions: Tailored testing services to meet specific database needs." },
          { icon: <FaCogs className="text-blue-600" />, text: "Comprehensive Coverage: Thorough testing for data validation, performance, and migration." },
          { icon: <FaChartBar className="text-blue-600" />, text: "Advanced Tools: Utilizing the latest Selenium tools for accurate testing." },
          { icon: <FaCheckCircle className="text-blue-600" />, text: "Quality Commitment: Dedicated to delivering high-quality testing services for optimal database performance." },
        ].map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">{item.icon}</div>
              <h3 className="font-bold">{item.text.split(':')[0]}</h3> 
            </div>
            <p className="text-sm">{item.text.split(':')[1]}</p>
          </div>
        ))}
      </div>
    <div className='p-6 text-center rounded bg-[#4daaf6] text-white'>
      <h2 className="text-2xl font-bold  mt-8 mb-4">
        Enhance the reliability of your database with QA Vision
      </h2>
      <a href='/contact-us'>
      <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700 hover:bg-blue-600 hover:text-white">
        Book your consultation call now
      </button>
      </a>
      </div>
    </div>
    </div>
  );
};

export default DatabaseAutomationTesting;
