import React from "react";
import { FiSmartphone, FiShield, FiSettings, FiUsers, FiCpu, FiAperture } from "react-icons/fi";
import mobiletest from "../assets/images/MOBILE_APP_TESTING.jpg";

const MobileAppTesting = () => {
  const services = [
    {
      name: "Automated Testing",
      icon: <FiSettings className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "Performance Testing",
      icon: <FiCpu className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "Security",
      icon: <FiShield className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "Manual Testing",
      icon: <FiUsers className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "Compatibility Testing",
      icon: <FiSmartphone className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "Usability Testing",
      icon: <FiAperture className="text-blue-500 w-12 h-12" />,
    },
  ];

  const keyStages = [
    {
      title: "Device Compatibility",
      description:
        "We test your app on various Android devices, covering different manufacturers, screen sizes, and OS versions to ensure broad compatibility and optimal performance.",
    },
    {
      title: "Functionality Testing",
      description:
        "Our team ensures all features and functionalities of your app work as intended, identifying and resolving any issues that may impact user experience.",
    },
    {
      title: "Performance Testing",
      description:
        "We assess your app’s performance under various conditions, including different network speeds and high user loads, to ensure it remains responsive and efficient.",
    },
    {
      title: "Security Testing",
      description:
        "Protecting user data is paramount. We conduct rigorous security tests to identify and mitigate potential vulnerabilities, ensuring your app is secure against threats.",
    },
    {
      title: "User Experience Testing",
      description:
        "We evaluate the overall user experience, ensuring the app is intuitive, easy to navigate, and meets user expectations.",
    },
  ];

  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${mobiletest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Mobile App Testing Services
          </h2>
        </div>
      </div>
    <section className="container mx-auto px-4 py-16">
      <div className="">

        {/* Top-Notch Mobile App Testing Solutions in India */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Top-Notch Mobile App Testing Solutions in India
        </h2>
        <p className="text-lg text- mb-4 text-gray-600">
          QA Vision is your go-to mobile app testing company in India, packed with experienced experts who know their stuff. We specialize in thorough testing for Android and iOS, ensuring your app performs flawlessly on all sorts of devices and operating systems.
        </p>
        <p className="text-lg  mb-8 text-gray-600">
          We’re all about quality, reliability, and security, so you get robust applications that boost your business growth and ROI. Let’s make your app a standout success!
        </p>
        <p className="text-lg  mb-8 text-gray-600">
          As a leading mobile app testing company, QA Vision is dedicated to delivering high-quality, reliable, robust, and secure applications that take your business to the next level. From real mobile device testing to interruption testing, compatibility testing, usability testing, mobile automation testing, and GUI testing, we are a one-stop destination for your comprehensive mobile app testing needs.
        </p>

        {/* Our Service Offerings - Bleeding-Edge Mobile App Testing */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Service Offerings - Bleeding-Edge Mobile App Testing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="bg-blue-100 p-8 my-4 md:my-12">
        {/* Best Android App Testing Services in India */}
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Best Android App Testing Services in India
        </h2>
        <p className="text-lg  mb-8 text-gray-600">
          Owing to our massive experience and state-of-the-art infrastructure
          backed by a team of driven Android app testing experts, we serve our
          clients with end-to-end Android app testing solutions. With numerous
          manufacturers and customizations, testing for Android apps requires a
          thorough, workable, and diverse testing strategy and that’s exactly
          what we provide at QA Vision.
        </p>

        {/* Cutting-Edge iOS App Testing Services */}
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Cutting-Edge iOS App Testing Services
        </h2>
        <p className="text-lg text-center mb-8 text-gray-600">
          Being a trusted iOS app testing company in India, our iOS app testing
          services guarantee your application provides a consistent and
          flawless experience across all iOS devices. With a controlled hardware
          environment, iOS app testing focuses on ensuring compatibility across
          various devices and iOS versions at all times.
        </p>
         </div>
        {/* Key Stages of App Testing */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Key Stages of App Testing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {keyStages.map((stage, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                {stage.title}
              </h3>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          ))}
        </div>
         <div className="bg-[#4daaf6] text-white p-8 my-4 md:my-12">
        {/* Schedule Your Free Consultation */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Schedule Your Free Consultation
        </h2>
        <p className="text-lg text-center mb-8">
          By leveraging our extensive testing expertise, QA Vision ensures your
          Android and iOS apps deliver a seamless and highly secure user
          experience across all devices.
        </p>
        <div className="text-center">
        <a
            href="/contact-us">
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
            Let’s Connect
          </button>
          </a>
        </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default MobileAppTesting;
