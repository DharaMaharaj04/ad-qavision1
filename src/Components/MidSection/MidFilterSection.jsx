import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCogs, FaRobot, FaLightbulb } from "react-icons/fa"; // Import react-icons

const MidFilterSection = () => {
  const [data, setData] = useState([]);

  const divVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, // Slide up and scale
    visible: { opacity: 1, y: 0, scale: 1 }, // Fully visible
  };

  useEffect(() => {
    setData([
      {
        id: 1,
        title: "Manual & Automation Testing",
        content:
          "We offer both manual and automated testing to cover every base. From functional to performance testing, our experts ensure your software performs at its best.",
        icon: <FaCogs className="text-4xl" />, // Icon
      },
      {
        id: 2,
        title: "Cutting-Edge Technologies",
        content:
          "We don’t just keep up; we lead. With expertise in Selenium, JMeter, Appium, and the latest tools, our testing services are as advanced as your needs.",
        icon: <FaRobot className="text-4xl" />, // Icon
      },
      {
        id: 3,
        title: "Bespoke Solutions",
        content:
          "No two projects are alike. We tailor our approach to fit your unique requirements, making sure nothing is overlooked.",
        icon: <FaLightbulb className="text-4xl" />, // Icon
      },
    ]);
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto gap-12">
        {/* Left Side */}
        <motion.div
          className="md:w-4/5 space-y-6 text-center text-white md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 },
          }}
        >
          <h2 className="text-4xl md:text-5xl text-white font-extrabold leading-tight text-gray-800 tracking-wide">
            Experience the QA Vision Difference
          </h2>
          <motion.p
            className="text-lg text-gray-700 mt-4 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
          >
            Ever wondered how seamless software can make or break user
            experience? And we get it. Our job is to catch every little hiccup
            before it reaches your users. Here’s what makes us stand out:
          </motion.p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, duration: 2.0 }}
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-6"
              variants={divVariants}
            >
              <div>{item.icon}</div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MidFilterSection;
