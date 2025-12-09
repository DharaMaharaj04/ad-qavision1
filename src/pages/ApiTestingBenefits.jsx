import { FaCheckCircle, FaCog, FaLock, FaPuzzlePiece, FaBullseye, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import APItest from "../assets/images/API.jpg";


const ApiTestingBenefits = () => {
  return (
    <div className=''>
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${APItest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          API Testing Services
          </h2>
        </div>
      </div>
    
    <section className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Robust API Testing Services with QA Vision
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-lg text-gray-600 mb-6 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Looking for top-notch API testing? QA Vision is a leading name in the game, offering end-to-end API testing solutions that cover everything from mobile apps to advanced architectures.
      </motion.p>

      {/* Second paragraph */}
      <motion.p
        className="text-lg text-gray-600 mb-6 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Ever wondered how crucial APIs are in today’s apps? Our expert API testers do, and they’re here to make sure yours are spot-on. With our top-tier API testing, we ensure 360º accuracy, security, functionality, and reliability.
      </motion.p>

      {/* Services */}
      <motion.div
        className="container mx-auto px-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-8">
          End-to-End API Testing Services by QA Vision
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "API Functional Testing",
              desc: "Ensures API endpoints perform with the highest level of efficiency.",
              icon: <FaCheckCircle className="h-16 w-16 text-blue-500 mb-4" />,
            },
            {
              title: "API Performance Testing",
              desc: "Assess API responsiveness, scalability, and stability.",
              icon: <FaCog className="h-16 w-16 text-blue-500 mb-4" />,
            },
            {
              title: "API Security Testing",
              desc: "Eliminate vulnerabilities for secure data transmission.",
              icon: <FaLock className="h-16 w-16 text-blue-500 mb-4" />,
            },
            {
              title: "API Integration Testing",
              desc: "Verify smooth interaction between APIs and other services.",
              icon: <FaPuzzlePiece className="h-16 w-16 text-blue-500 mb-4" />,
            },
            {
              title: "API Fuzz Testing",
              desc: "Test API robustness by sending random or unexpected inputs.",
              icon: <FaExclamationTriangle className="h-16 w-16 text-blue-500 mb-4" />,
            },
            {
              title: "Endpoint Verification",
              desc: "Confirm that API endpoints are accessible and return correct responses.",
              icon: <FaBullseye className="h-16 w-16 text-blue-500 mb-4" />,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        className="container mx-auto px-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          Benefits of QA Vision’s API Testing Services
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: "Improved Performance",
              desc: "Identify and resolve performance issues to enhance your API performance.",
              icon: <FaCog className="h-16 w-16 text-green-500 mb-4" />,
            },
            {
              title: "Increased Security",
              desc: "Detect and fix vulnerabilities that could pose security risks.",
              icon: <FaLock className="h-16 w-16 text-red-500 mb-4" />,
            },
            {
              title: "Seamless Integration",
              desc: "Verify seamless integration with 3rd party systems and applications.",
              icon: <FaPuzzlePiece className="h-16 w-16 text-blue-500 mb-4" />,
            },
            {
              title: "Superlative Quality",
              desc: "Ensure your APIs function reliably and meet high-quality standards.",
              icon: <FaCheckCircle className="h-16 w-16 text-yellow-500 mb-4" />,
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
            <div className='flex justify-between'>
            <div className='mr-4'>
              {benefit.icon}
              </div>
              <div className=''>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.desc}</p>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    <section className="py-16 bg-[#4daaf6] text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Let’s get it rolling!</h3>
          <p className="text-lg mb-6">
            Ready to enhance your software's reliability? Contact QA Vision for
            expert api testing solutions tailored to your needs!
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default ApiTestingBenefits;
