import React from "react";
import { motion } from "framer-motion";
import functional from "../assets/images/functional.png";
import performance from "../assets/images/performance.png";
import integration from "../assets/images/integration.png";
import security from "../assets/images/secure.jpg";
import banner from "../assets/images/Security_Testing.jpg";
import { Helmet } from "react-helmet-async";

const SecurityTesting = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div className="bg-white">

    <Helmet>
                            <title>QAVisiontestlab</title>
                            <title>Best VAPT Security Testing Agency in India | Security Testing</title>
                            <meta name="description" content="Hire the best VAPT security testing agency in India. We provide top-notch vulnerability assessments and security solutions for your systems. - qavisiontestlab.com" />
                            <meta name="keywords" content="React, SEO, Helmet, Web Development, QA, Automation, AI, TESTING" />
                            <meta property="og:title" content="Best VAPT Security Testing Agency in India | Security Testing" />
                            <meta property="og:url" content="https://www.qavisiontestlab.com/security-testing" />
                            <meta property="og:type" content="website" />
                            <meta property="og:description" content="Hire the best VAPT security testing agency in India. We provide top-notch vulnerability assessments and security solutions for your systems. - qavisiontestlab.com" />
                            <meta property="og:image" content="https://www.qavisiontestlab.com/static/media/Security_Testing.813ae0b978c31df1ea9a.jpg" />
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta property="twitter:domain" content="qavisiontestlab.com" />
                            <meta property="twitter:url" content="https://www.qavisiontestlab.com/security-testing" />
                            <meta name="twitter:title" content="Best VAPT Security Testing Agency in India | Security Testing" />
                            <meta name="twitter:description" content="Hire the best VAPT security testing agency in India. We provide top-notch vulnerability assessments and security solutions for your systems. - qavisiontestlab.com" />
                            <meta name="twitter:image" content="https://www.qavisiontestlab.com/static/media/Security_Testing.813ae0b978c31df1ea9a.jpg" />
                            <body id="page-security-testing" /> 
                        </Helmet>

      {/* Hero Section */}
      <div
  className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
  style={{ backgroundImage: `url(${banner})` }}
>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Security Testing
        </h2>
      </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
          Frontrunning Security Testing Company in India 
          </h2>
          <p className="text-lg">
            At QA Vision, we offer top-tier VAPT services in India, ensuring your
            digital systems are secure against potential cyber threats. </p>
            
            <p className="text-lg py-4">Our security
            testing services include a thorough vulnerability assessment and penetration
            testing to identify and mitigate risks in your network, web applications,
            and other digital assets. As a leading security testing company in India,
            we employ advanced tools and methodologies to deliver robust cybersecurity
            solutions.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-6">
        <motion.div
          className="text-center mb-8 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
            QA Vision’s Cutting-Edge &amp; Comprehensive VAPT Services
          </h2>
          <p className="text-lg mb-8">
            QA Vision specializes in offering all-embracing security assessment services
            in India, tailored to meet the unique needs of your organization. Our VAPT
            services include:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vulnerability Assessment */}
          <motion.div
            className="text-center bg-white shadow-2xl rounded-lg p-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <img
              src={integration} // Replace with your image
              alt="Vulnerability Assessment"
              className="w-full h-48 object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">
              Vulnerability Assessment
            </h3>
            <p className=" mt-2">
              Identifying potential vulnerabilities in your systems.
            </p>
          </motion.div>

          {/* Penetration Testing */}
          <motion.div
            className="text-center bg-white shadow-2xl rounded-lg p-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <img
              src={performance} // Replace with your image
              alt="Penetration Testing"
              className="w-full h-48 object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">
              Penetration Testing
            </h3>
            <p className=" mt-2">
              Simulation of cyber-attacks to evaluate system defenses to the core.
            </p>
          </motion.div>

          {/* Network Security Testing */}
          <motion.div
            className="text-center bg-white shadow-2xl rounded-lg p-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <img
              src={functional} // Replace with your image
              alt="Network Security Testing"
              className="w-full h-48 object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">
              Network Security Testing
            </h3>
            <p className=" mt-2">
              Ensuring your network is secure from intrusions.
            </p>
          </motion.div>

          {/* Web Application Security Testing */}
          <motion.div
            className="text-center bg-white shadow-2xl rounded-lg p-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <img
              src={security} // Replace with your image
              alt="Web Application Security Testing"
              className="w-full h-48 object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">
              Web Application Security Testing
            </h3>
            <p className="mt-2">
              Protecting your web applications from security breaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
            Why Join Hands with QA Vision for VAPT?
          </h2>
          <p className="text-lg">
            Partner with QA Vision—the best VAPT company in India—to secure your digital
            assets. Our expertise and dedication to cybersecurity make us the preferred
            choice in the ever-competitive industry for both small and large-sized businesses.
          </p>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#4daaf6] text-white text-center sm:mb-2 md:mb-16">
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Let’s Get the Ball Rolling
          </h2>
          <p className="text-lg mb-8">
            Trust QA Vision to provide reliable, comprehensive VAPT solutions that
            protect your organization from evolving cyber threats.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-blue-600 text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Let’s Discuss Your Project
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default SecurityTesting;
