import React from 'react';
import about from '../assets/images/ABOUT_US.jpg';
import innovative from '../assets/images/soft-test.png';
import Ingenuity from '../assets/images/Ingenuity.png';
import Integrity from '../assets/images/Integrity.png';
import Commitment from '../assets/images/Commitment.png';
import boy from '../assets/images/boy.png';
import girl from'../assets/images/girl.png';
import { FaBullseye, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="">
                    <Helmet>
                        <title>QAVisiontestlab</title>
                        <title>Leading Software & Application Testing Company in India | About Us</title>
                        <meta name="description" content="QA Vision is a leading software & web application testing company in India. We offer quality manual testing, function testing, and automation testing services. - qavisiontestlab.com" />
                        <meta name="keywords" content="React, SEO, Helmet, Web Development, QA, Automation, AI, Testing" />
                        <meta property="og:title" content="Leading Software & Application Testing Company in India | About Us" />
                        <meta property="og:url" content="https://www.qavisiontestlab.com/about-us" />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content="QA Vision is a leading software & web application testing company in India. We offer quality manual testing, function testing, and automation testing services. - qavisiontestlab.com" />
                        <meta property="og:image" content="https://www.qavisiontestlab.com/static/media/soft-test.3a16a7cb7da41f660c8e.png" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta property="twitter:domain" content="qavisiontestlab.com" />
                        <meta property="twitter:url" content="https://www.qavisiontestlab.com/about-us" />
                        <meta name="twitter:title" content="Leading Software & Application Testing Company in India | About Us" />
                        <meta name="twitter:description" content="QA Vision is a leading software & web application testing company in India. We offer quality manual testing, function testing, and automation testing services. - qavisiontestlab.com" />
                        <meta name="twitter:image" content="https://www.qavisiontestlab.com/static/media/soft-test.3a16a7cb7da41f660c8e.png" />
                        <body id="page-about-us" /> 
                    </Helmet>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center text-dark ">
      <img 
        src={about} 
        alt='about-us' 
        className='w-full h-[600px]'
      />
      </section>

      <section className='flex flex-col items-center justify-center text-center py-8 text-dark'>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-slide-in-top">Who We Are</h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl animate-slide-in-left">
          At QA Vision, we push the boundaries of software quality with over 10 years of combined experience.
        </p>
      </section>

      {/* About QA Vision */}
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-24 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">Innovative Software Testing Solutions</h2>
            <p className=" mt-4 text-base sm:text-lg md:text-xl">
              We offer best-in-class software & web app testing services, delivering excellence across all testing domains.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={innovative} alt="QA Vision" className="w-full h-auto animate-zoom-in" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#2196f3] mb-8 animate-fade-in">
    Our Core Values
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-24">
    <div className="text-center p-6 shadow-xl rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <img src={Ingenuity} alt="Ingenuity" className="w-12 mx-auto mb-4" />
      <h3 className="font-bold text-lg md:text-2xl">Ingenuity</h3>
      <p className="text-gray-600 mt-2">We push boundaries to innovate and ensure software quality.</p>
    </div>
    <div className="text-center p-6 shadow-xl rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <img src={Integrity} alt="Integrity" className="w-12 mx-auto mb-4" />
      <h3 className="font-bold text-lg md:text-2xl">Integrity</h3>
      <p className="text-gray-600 mt-2">We uphold the highest standards with our ethical approach.</p>
    </div>
    <div className="text-center p-6 shadow-xl rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <img src={Commitment} alt="Commitment" className="w-12 mx-auto mb-4" />
      <h3 className="font-bold text-lg md:text-2xl">Commitment</h3>
      <p className="text-gray-600 mt-2">We go the extra mile for every client, ensuring success.</p>
    </div>
  </div>
</section>


<section className="py-16 px-4 sm:px-8 md:px-12 lg:px-24 bg-blue-300 overflow-hidden">
<div className="absolute inset-0">
  <div className="w-full h-full opacity-30 rounded-full transform translate-x-1/2 translate-y-1/4 blur-3xl"></div>
</div>
<div className="md:flex items-center justify-between gap-8 z-10">
  {/* Mission Section */}
  <motion.div
    className="w-full md:w-1/2 flex flex-col items-start p-6 space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <div className="flex items-center gap-4">
      <FaBullseye size={50} className="text-white" />
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Our Mission</h2>
    </div>
    <p className=" text-lg md:text-xl">
      To drive excellence in software testing by delivering innovative solutions that ensure top-notch quality and performance.
    </p>
    <div className="w-24 h-1 bg-white"></div>
  </motion.div>

  {/* Vision Section */}
  <motion.div
    className="w-full md:w-1/2 flex flex-col items-start p-6 space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <div className="flex items-center gap-4">
      <FaEye size={50} className="text-white" />
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Our Vision</h2>
    </div>
    <p className=" text-lg md:text-xl">
      To be the leading software testing partner in India, setting new industry standards with cutting-edge technology and unmatched expertise.
    </p>
    <div className="w-24 h-1 bg-white"></div>
  </motion.div>
</div>
<div className="absolute left-0 top-0 transform translate-x-1/4 translate-y-1/4">
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current text-white opacity-30"
  >
  </svg>
</div>
</section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <h2 className="text-xl sm:text-xl md:text-5xl font-bold text-center text-[#2196f3] mb-8 animate-slide-in-left">Meet our Architect of QA Vision</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <div className="w-80 bg-gray-50 p-6 text-center rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img src={girl} alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Rachna Sonar</h3>
            <p className="text-gray-600">Co-Founder</p>
          </div>
          <div className="w-80 bg-gray-50 p-6 text-center rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img src={boy} alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Aditya Sonar</h3>
            <p className="text-gray-600">Founder</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
