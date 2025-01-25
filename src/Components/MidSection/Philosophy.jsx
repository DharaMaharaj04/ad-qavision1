import React from 'react';
import Single from '../../assets/images/single.png';
import Double from '../../assets/images/double.png';
import Triple from '../../assets/images/triple.png';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 py-20 px-6 md:px-12">
      {/* Section Header */}
      <motion.div
        className="mx-auto mb-16 max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.9 },
        }}
      >
        <h2 className="text-gray-900 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Our Philosophy
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          At <strong>QA Vision</strong>, we believe in a no-compromise approach to quality. Here’s <span className="text-indigo-600 font-semibold">how we do it:</span>
        </p>
      </motion.div>

      {/* Philosophy Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.6, staggerChildren: 0.2 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        {/* Card 1 */}
        <motion.div
          className="relative bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 rounded-xl"
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <div className="w-24 h-24 mx-auto mt-[-3rem] flex items-center justify-center rounded-full shadow-md">
            <img className="w-12 h-12" src={Single} alt="Detail-Oriented" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold  mb-2">Detail-Oriented Testing</h3>
            <p className="">
              Every bug, every glitch – we spot them all. Our meticulous process ensures your software is flawless.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative bg-gradient-to-r from-indigo-50 to-indigo-200 shadow-lg hover:shadow-2xl transition-transform duration-300 rounded-xl"
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <div className="w-24 h-24 mx-auto mt-[-3rem] z-10 flex items-center justify-center rounded-full shadow-md">
            <img className="w-12 h-12" src={Double} alt="Real-World Scenarios" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Real-World Scenarios</h3>
            <p className="">
              We test under real-world conditions to ensure your users have a top-notch experience, no matter what device they use.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative bg-white shadow-lg hover:shadow-2xl transition-transform duration-300  rounded-xl"
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <div className="w-24 h-24 mx-auto mt-[-3rem] flex items-center justify-center rounded-full shadow-md">
            <img className="w-12 h-12" src={Triple} alt="Proactive Communication" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold  mb-2">Proactive Communication</h3>
            <p className="">
              We keep you in the loop with regular updates and clear reports, so you’re never in the dark.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Philosophy;
