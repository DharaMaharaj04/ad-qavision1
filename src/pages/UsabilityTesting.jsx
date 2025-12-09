import React from "react";
import { FaCheckCircle, FaMobileAlt, FaLaptop} from "react-icons/fa";
import { motion } from "framer-motion";
import usabilitytest from "../assets/images/UsabilityTestingServices.jpg";

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const UsabilityTesting = () => {
  const services = [
    { icon: <FaLaptop size={50} className="text-blue-500" />, title: "Websites and Web Applications", description: "From e-commerce platforms to complex enterprise software, we evaluate user flows, information architecture, and overall usability." },
    { icon: <FaMobileAlt size={30} className="text-green-500" />, title: "Mobile Apps", description: "We test iOS and Android apps for intuitive navigation, performance, and user satisfaction." },
    { icon: <FaLaptop size={50} className="text-purple-500" />, title: "Software Applications", description: "QA Vision’s experts assess desktop as well as cloud-based software for efficiency, user interface design, & task completion rates." },
    { icon: <FaMobileAlt size={30} className="text-red-500" />, title: "IoT Devices", description: "We evaluate the user experience of connected devices, inclusive of smart homes, wearables, and automotive systems." },
    { icon: <FaLaptop size={40} className="text-orange-500" />, title: "Voice Assistants", description: "We test voice-activated interfaces for natural language understanding, task completion, and error handling." },
  ];



  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${usabilitytest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Usability Testing Services
          </h2>
        </div>
      </div>
      {/* Usability Testing Section */}
      <section className="container mx-auto mb-12 text-center pt-8 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Experience the Power of QA Vision’s Usability Testing Services in India</h1>
        <p className="text-lg text-gray-600 mb-6">
          A product is only as good as its user experience. QA Vision is your trusted strategic partner in crafting intuitive, user-centric designs. Touted as one of the best usability testing companies in India, our expert usability testing services delve deep into user behavior, identifying the pain points and spotting opportunities for optimization.
        </p>
        <p className="text-lg text-gray-600">
          By understanding your users on a profound level, our usability testing experts empower you to create products that not only meet expectations but exceed them.
        </p>
      </section>

      {/* Comprehensive Usability Testing Services Section */}
      <section className="container mx-auto mb-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">Comprehensive Usability Testing Services Offered by Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Ranked amongst the leading usability testing agencies in India, QA Vision offers a whole suite of usability testing services to its worldwide clientele. Our expertise extends across various industries to ensure optimal user experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              {service.icon}
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optimize Your Product Section */}
      <div className="container my-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Optimize Your Product with Our Usability Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { icon: <FaCheckCircle className="h-10 w-8 text-blue-500 mb-4" />, title: "Web Usability Testing", description: "Evaluate your website’s user experience to ensure seamless navigation and satisfaction." },
          {  icon: <FaCheckCircle className="h-10 w-8 text-blue-500 mb-4" />,title: "Hallway Testing", description: "Gather unbiased feedback by observing users interacting with your product without prior training." },
          {  icon: <FaCheckCircle className="h-10 w-8 text-blue-500 mb-4" />,title: "Mobile App Usability Testing", description: "Ensure intuitive navigation and high user satisfaction for your iOS and Android apps." },
          {  icon: <FaCheckCircle className="h-10 w-8 text-blue-500 mb-4" />,title: "Remote Usability Testing", description: "Conduct usability tests with real users from anywhere in the world for diverse insights." },
          {  icon: <FaCheckCircle className="h-10 w-8 text-blue-500 mb-4" />,title: "Other Services", description: "Tailored usability solutions that fit your unique product requirements and user needs." },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 relative"
            variants={cardVariants}
            whileHover="hover"
          >
          {service.icon}
            <h3 className="text-xl font-bold text-blue-600 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

      {/* Call to Action Section */}
      <section className="container mx-auto text-white text-center bg-[#4daaf6] p-8">
        <h2 className="text-3xl font-bold mb-6">All Set for a Flawless User Experience?</h2>
        <p className="text-lg mb-6">Let QA Vision create an optimum user experience. Book your free consultation.</p>
        <a href='/contact-us'>
        <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
          Let’s get going
        </button>
        </a>
      </section>
    </div>
  );
};

export default UsabilityTesting;