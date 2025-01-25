import React from 'react';
import { motion } from 'framer-motion';
import { FaChrome, FaCheckCircle, FaTools, FaRocket } from 'react-icons/fa';
import webapp from '../assets/images/auto-seleniumBanner.jpg'; 
import browserTestingImage from '../assets/images/auto-seleniumExtra.jpg'; 

const SeleniumTesting = () => {

    const features = [
      {
        icon: <FaChrome className="text-blue-500 w-8 h-8" />,
        title: "Browser Compatibility Testing",
        description:
          "Verify that your web application works correctly on all major browsers, including Chrome, Firefox, Safari, Edge, and Opera.",
      },
      {
        icon: <FaTools className="text-blue-500 w-8 h-8" />,
        title: "Responsive Testing",
        description:
          "Ensure your web application delivers a consistent user experience on different screen sizes and resolutions.",
      },
      {
        icon: <FaCheckCircle className="text-blue-500 w-8 h-8" />,
        title: "Functional Testing",
        description:
          "Automate functional tests to check that all features of your web application operate as expected across different browsers.",
      },
      {
        icon: <FaRocket className="text-blue-500 w-8 h-8" />,
        title: "Performance Testing",
        description:
          "Assess the speed, responsiveness, and stability of your web application on various browsers.",
      },
      {
        icon: <FaCheckCircle className="text-blue-500 w-8 h-8" />,
        title: "Regression Testing",
        description:
          "Confirm that recent changes do not negatively impact the existing functionality of your web application across multiple browsers.",
      },
    ];

  return (
    <div className="">
    <div
    className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover mb-8"
    style={{ backgroundImage: `url(${webapp})` }}
  >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
        Selenium Testing
        </h2>
      </div>
    </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 className="text-3xl md:text-5xl font-extrabold text-blue-600">
            Cross Browser Testing Services by QA Vision
          </motion.h1>
          <motion.p className="mt-6 text-lg font-light text-justify">
            In today’s competitive online world where users access websites through a variety of browsers and devices, ensuring consistent performance and functionality across all platforms is critical to the success of your website and optimum user experience.
          </motion.p>
          <motion.p className="mt-4 text-lg font-light text-justify">
            Team QA Vision specializes in Selenium Cross Browser Testing services to help you deliver seamless and reliable user experiences.
          </motion.p>
        </motion.section>

        {/* Selenium Cross Browser Testing Section */}
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Selenium Cross Browser Testing for Seamless Performance
          </h2>
          <img src={browserTestingImage} alt="Selenium Testing" className="mb-6 rounded shadow-lg w-full text-center" />
          <motion.p className="text-lg font-light mb-6">
            Our expert team uses the Selenium framework to automate testing across multiple browsers and operating systems. Ever wondered how your app performs on different setups? We identify and fix compatibility issues to make sure everything runs smoothly.
          </motion.p>
          <motion.p className="text-lg font-light mb-6">
            At QA Vision, we're proud to be one of the top cross-browser testing companies in India. Curious about how we tailor our testing solutions to your specific needs? Our team leverages their experience, the power of Selenium, our cutting-edge infrastructure, and advanced tools to exceed your expectations.
          </motion.p>
        </motion.section>

        {/* End-to-End Cross Browser Testing Solutions */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            End-to-End Cross Browser Testing Solutions by QA Vision
          </h2>
          <p className=" font-bold mb-2">
          At QA Vision, we offer a wide range of Selenium Cross Browser Testing solutions to ensure your web applications function flawlessly across various browsers:

          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-start bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold  mb-2">
            {feature.title}
          </h3>
          <p className="text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
        </motion.section>

        {/* Benefits of Partnering with QA Vision */}
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Benefits of Partnering with QA Vision
          </h2>
          <p className=" font-bold mb-2">
          Partnering with QA Vision, the best cross-browser automation testing agency in India for your Selenium Cross Browser Testing renders a plethora of advantages:
*
 
</p>
          <ul className="space-y-4 text-lg font-light">
            <li><strong className="font-semibold text-blue-500">Comprehensive Coverage: </strong> We ensure your web applications perform consistently across all major browsers and OS’ (operating systems), providing a seamless user experience.</li>
            <li><strong className="font-semibold text-blue-500">Expertise and Experience: </strong> Our experienced team of testers brings years of experience in Selenium and cross-browser testing, ensuring top notch results.</li>
            <li><strong className="font-semibold text-blue-500">Bespoke Solutions: </strong> We tailor our testing services to meet your specific requirements, addressing unique challenges and goals.</li>
            <li><strong className="font-semibold text-blue-500">Efficient Testing Process: </strong> Our streamlined testing methodology and advanced tools enable us to deliver fast, accurate, and reliable results.</li>
            <li><strong className="font-semibold text-blue-500">Technical Support: </strong> We provide ongoing support and maintenance, ensuring your applications stay up-to-date with browser updates and changes.</li>
            <li><strong className="font-semibold text-blue-500">Reasonable Pricing: </strong> QA Vision’s efficient automation processes reduce testing time and costs, providing you with high-quality services at competitive prices.</li>
          </ul>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center py-12 px-6 bg-[#4daaf6] text-white rounded-lg my-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Count on the Best Cross-Browser Testing Services Company in India
          </h2>
          <p className="text-lg font-light mb-6">
            Experience seamless and consistent performance across all browsers with QA Vision.
          </p>
          <a href='/contact-us'>
          <motion.button
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-600 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Grab Your Obligation-Free Quote Now!
          </motion.button>
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default SeleniumTesting;
