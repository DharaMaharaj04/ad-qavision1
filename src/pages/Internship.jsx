import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHandsHelping,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import InternshipHero from '../assets/images/InternshipProgram.jpg'; 
import ManualTestingImage from '../assets/images/Manual Testing.jpg'; 
import AutomationTestingImage from '../assets/images/Automation Testing Services.jpg'; 
import SummerInternshipImage from '../assets/images/SUMMER_INTERNSHIP.jpg';

const Internship = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${InternshipHero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl pb-20 mx-auto text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Internship Program
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight pb-10 mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get Your Career Rolling with QA Vision’s Paid QA Internship Program
          </motion.h1>
          <p className="text-lg text-gray-700 pb-4 text-justify">
            Are you ready to dive into the exciting world of software testing?
            QA Vision’s QA Internship Program is your gateway to hands-on
            experience and industry exposure. We’re not just offering a chance
            to learn; we’re offering an opportunity to become a part of a
            leading software testing company in India.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            Our program is designed to immerse you in real-world scenarios,
            whether you're interested in manual testing, automation, or a
            flexible summer internship. Sounds promising? Here’s why our
            program stands out and how it can give your career that much-needed
            boost!
          </p>
        </div>
      </section>

      {/* Why QA Vision Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Why QA Vision for QA Internship?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition">
              <FaHandsHelping className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Experience</h3>
              <p>
                Work directly on live projects that impact real-world software
                solutions. You’ll be involved in every step of the testing
                process, gaining practical knowledge that goes beyond classroom
                learning.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition">
              <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Mentors</h3>
              <p>
                Our mentors bring over 30 years of industry experience. They
                offer invaluable guidance, share industry best practices, and
                help you navigate the complexities of software testing.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition">
              <FaLaptopCode className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Enhancement</h3>
              <p>
                Our program covers both manual and automated testing in depth.
                You’ll get hands-on experience with industry-leading tools and
                techniques, ensuring you’re well-prepared for future roles.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition">
              <FaMoneyBillWave className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Paid Internship</h3>
              <p>
                Gain valuable experience while earning a competitive stipend.
                Our paid internship allows you to focus on learning and
                contributing without financial stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
      What You’ll Learn at QA Vision
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Manual Testing */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={ManualTestingImage}
          alt="Manual Testing"
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Manual Testing
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <BsCheckCircle className="text-blue-600 text-2xl mr-3" />
              <span>
                <strong>Work on Real Projects:</strong> Get involved in the daily tasks of software testing. Develop and execute test cases to ensure software quality.
              </span>
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-blue-600 text-2xl mr-3" />
              <span>
                <strong>Collaborate with Teams:</strong> Join meetings and workshops. This helps you understand the testing process and how it fits into the larger project.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Automation Testing */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={AutomationTestingImage}
          alt="Automation Testing"
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Automation Testing
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <BsCheckCircle className="text-blue-600 text-2xl mr-3" />
              <span>
                <strong>Use Cutting-Edge Tools:</strong> Gain experience with automation tools like Selenium and Appium. Learn to create and manage automated test scripts that streamline testing.
              </span>
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-blue-600 text-2xl mr-3" />
              <span>
                <strong>Participate in Live Projects:</strong> Contribute to projects that use automation to improve testing efficiency and effectiveness.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Summer Internship */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={SummerInternshipImage}
          alt="Summer Internship"
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Summer Internship
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <BsCheckCircle className="text-blue-600 text-2xl mr-3" />
              <span>
                <strong>Flexible Schedules:</strong> Perfect for students or recent grads. Fit the internship around your summer plans and career goals.
              </span>
            </li>
            <li className="flex items-start">
              <BsCheckCircle className="text-blue-600 text-2xl mr-3" />
              <span>
                <strong>Comprehensive Learning:</strong> Build connections with industry experts and fellow interns. These relationships can help you in your future career.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Ready to Begin Section */}
      <section className="py-16 px-4 text-center bg-[#4ca7f0] text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Begin?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          If you’re eager to learn and gain valuable experience in software
          testing, QA Vision’s internship program is a great start. Apply now
          and take the first step towards a successful career in QA.
        </p>
        <a
          href="/carrers"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-700 hover:text-white transition"
        >
          Let’s Shape Your Future!
        </a>
      </section>
    </div>
  );
};

export default Internship;
