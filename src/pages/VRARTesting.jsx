import React from "react";
import { motion } from "framer-motion";
import VR from "../assets/images/vr.png";
import AR from "../assets/images/ar.jpg"

const VRARTesting = () => {
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
      {/* Header Section */}
      <div className="relative">
        <img
          src={VR} // Replace with your image
          alt="VR Testing"
          className="w-full h-[600px] object-contain"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Top VR/AR Application Testing Solutions in India
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
            Looking for Reliable VR/AR Application Testing Services?
          </h2>
          <p className="text-lg">
            You've come to the right place! At QA Vision, we take pride in being
            a top VR/AR application testing company in India, where we ensure
            your virtual and augmented reality experiences are smooth,
            immersive, and ready to impress. Sounds like a deal, right?
          </p>
        </motion.div>

        {/* Why Partner Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Why Partner with Us for VR/AR Application Testing?
          </h2>
          <p className="text-lg">
            When it comes to VR/AR applications, every minute detail matters.
            Our experts have a keen eye for detail which makes us one of the
            most preferred VR/AR app testing companies in India. From
            performance and usability to compatibility across various devices,
            we provide thorough testing that covers all bases.
          </p>
        </motion.div>

        {/* Best VR Testing Services Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* VR Testing Image */}
          <div className="flex justify-center">
            <img
              src={AR} // Replace with your image
              alt="AR Testing"
              className="rounded-lg shadow-md w-full h-96 object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
              Best VR Application Testing Services in India
            </h2>
            <p className="text-lg mb-6">
              We don’t just test; we ensure your VR/AR applications deliver the
              wow factor. Our approach is both detailed and efficient, so your
              users get the best experience possible. It’s no wonder we’re known
              for offering the best VR application testing services in India.
            </p>

            {/* Call to Action */}
            
          </div>
        </motion.div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-[#4daaf6] text-white text-center sm:mb-2 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold  mb-4">
          Ready to Elevate Your VR/AR Applications?
        </h2>
        <p className="text-lg mb-8">
          Partner with QA Vision, a leading VR/AR application testing company in
          India, and let’s create seamless, engaging experiences together.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-white text-blue-600 text-lg font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
        >
          Book a Consultation Call
        </a>
      </section>
    </div>
  );
};

export default VRARTesting;
