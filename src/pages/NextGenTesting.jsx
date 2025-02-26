import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineRobot,
  AiOutlineAreaChart,
  AiOutlineSecurityScan,
  AiOutlineThunderbolt,
} from "react-icons/ai";

import HeroImage  from "../assets/images/Next-Generation-Testing.jpg";
import IconAI  from "../assets/images/erp.jpg";
import IconPredictive  from "../assets/images/vr.png"; 
import IconSecurity  from "../assets/images/qalogo.png"; 
import IconPerformance  from "../assets/images/ar.jpg"; 
import { Helmet } from "react-helmet-async";


const NextGenTesting = () => {
  return (
    <div> 
                          <Helmet>
                            <title>QAVisiontestlab</title>
                            <title>Next Generation Testing Services in India | Leading QA Solutions </title>
                            <meta name="description" content="Hire the best next-generation testing services in India. Our solutions cover AI-powered testing, predictive analytics, performance testing, &amp; security testing.- qavisiontestlab.com" />
                            <meta name="keywords" content="React, SEO, Helmet, Web Development, QA, Automation, AI, Testing" />
                            <meta property="og:title" content="Next Generation Testing Services in India | Leading QA Solutions" />
                            <meta property="og:url" content="https://www.qavisiontestlab.com/nextgenaration-testing" />
                            <meta property="og:type" content="website" />
                            <meta property="og:description" content="Hire the best next-generation testing services in India. Our solutions cover AI-powered testing, predictive analytics, performance testing, &amp; security testing. - qavisiontestlab.com" />
                            <meta property="og:image" content="https://www.qavisiontestlab.com/static/media/Next-Generation-Testing.8d465e4024d05999320c.jpg" />
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta property="twitter:domain" content="qavisiontestlab.com" />
                            <meta property="twitter:url" content="https://www.qavisiontestlab.com/nextgenaration-testing" />
                            <meta name="twitter:title" content="Next Generation Testing Services in India | Leading QA Solutions" />
                            <meta name="twitter:description" content="Hire the best next-generation testing services in India. Our solutions cover AI-powered testing, predictive analytics, performance testing, &amp; security testing.- qavisiontestlab.com" />
                            <meta name="twitter:image" content="https://www.qavisiontestlab.com/static/media/Next-Generation-Testing.8d465e4024d05999320c.jpg" />
                            <body id="page-nextgenaration-testing" /> 
                        </Helmet>

    {/* Full-Width Hero Section */}
    <section
      className="relative object-cover h-[500px] flex items-center justify-center text-white md:pt-20"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative text-center max-w-2xl px-4 md:pt-20">
        <motion.h1
          className="text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        Next Generation Testing Services
        </motion.h1>
        </div>
      
    </section>
     <section className="py-16 bg-gradient-to-r from-blue-100 to-white text-gray-800 text-center">
     <div className="relative text-center px-4 md:pt-20">
        <motion.h2
          className="text-3xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Discover the Future with Next Generation Testing Services
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
        Are you ready to take your software testing to the next level?
        Welcome to QA Vision, where we offer next-generation testing
        services tailored to meet the demands of today’s fast-paced digital
        world. As a leading next-generation testing company in India, we’re
        here to ensure your software is robust, reliable, and ready for
        anything.
        </motion.p>
        <motion.a
          href="#services"
          className="px-8 py-4 bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-900 hover:border rounded-full text-lg font-semibold shadow-lg transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Learn More
        </motion.a>
      </div>
     </section>
    {/* What Sets Us Apart Section */}
    <section className="py-16 bg-[#4ca7f0] px-4 text-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Sets Next-Generation Testing Services Apart?
      </motion.h2>
      <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-12">
      Have you ever wondered how to speed up your testing process
      without compromising quality? That’s where next generation testing
      services come in. By leveraging advanced technologies like AI,
      machine learning, and predictive analytics, these services make
      testing faster, smarter, and more efficient. The result? Quicker time-
      to-market and software that performs flawlessly.
      </p>
      </section>

      <section className="py-16 px-4 bg-100 to-white text-center">
      <motion.h2
      className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      Why Choose QA Vision for Next-Gen Testing Services?
      </motion.h2>
      
      <motion.p
          className="text-lg max-w-3xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
        So, why should QA Vision be your testing partner? As one of the best
next generation testing companies in India, we combine innovation,
expertise, and a client-first approach to deliver exceptional results.
Here’s why partnering with us is a smart move:
        </motion.p>
      {/* Icon-Based Features with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {[
          {
            title: "AI-Powered Testing",
            description: "Automate test case generation and execution with our AI-driven tools.",
            icon: IconAI,
          },
          {
            title: "Predictive Analytics",
            description: "Identify potential issues before they occur with advanced analytics.",
            icon: IconPredictive,
          },
          {
            title: "Security Testing",
            description: "We provide rigorous security testing to protect your applications.",
            icon: IconSecurity,
          },
          {
            title: "Performance Testing",
            description: "Ensure your software can handle high traffic and heavy loads.",
            icon: IconPerformance,
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={service.icon} alt={service.title} className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section id="services" className="py-16 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose QA Vision for Next-Gen Testing Services?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AiOutlineRobot className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Tech-Savvy Expertise</h3>
          <p className="text-gray-600">
            Our team uses cutting-edge technologies like AI-driven tools to deliver accurate and
            efficient testing.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AiOutlineAreaChart className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Comprehensive Solutions</h3>
          <p className="text-gray-600">
            We cover all aspects of testing, from functional and performance testing to security.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AiOutlineThunderbolt className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Customized for You</h3>
          <p className="text-gray-600">
            Our solutions are flexible and scalable, designed to grow with your business and adapt
            to your specific needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AiOutlineSecurityScan className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-3">Trusted Team</h3>
          <p className="text-gray-600">
            Our experts are industry veterans who stay ahead of the latest trends, bringing their
            knowledge to every project.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="text-center py-8 bg-[#4daaf6] text-white rounded-lg shadow-lg px-2 mb-16">
        <motion.h2
          className="text-3xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        Let’s Take Your Testing Strategy to the Next Level
        </motion.h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-12 text-white">
        Ready to experience the future of software testing? Partner with QA
        Vision for the <strong className="font-bolder">best next generation testing services in India</strong> . Let’s
        collaborate to enhance your software’s performance with faster,
        smarter, and more reliable testing.
        </p>
        <a href="/contact-us" className="px-8 py-4 bg-white text-blue-500 font-bold rounded-lg hover:bg-white hover:text-blue-700">
          Contact Us Today
        </a>
      </section>
  </div>
  );
};

export default NextGenTesting;
