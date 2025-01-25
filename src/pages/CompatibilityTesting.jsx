import React from "react";
import { FaChrome, FaLaptop, FaMobileAlt, FaBackward } from "react-icons/fa";
import browserImage from "../assets/images/Ingenuity.png";
import deviceImage from "../assets/images/Integrity.png"; 
import Compatibilitytest from "../assets/images/FINANCE.jpg";

const CompatibilityTesting = () => {
  const services = [
    {
      icon: <FaChrome className="text-blue-500 text-4xl" />,
      title: "Cross-Browser Testing",
      text: "We test your application on all major browsers, including Chrome, Firefox, Safari, Edge, and Internet Explorer, to identify and resolve any compatibility issues.",
      img: browserImage,
    },
    {
      icon: <FaLaptop className="text-green-500 text-4xl" />,
      title: "Cross-Platform Testing",
      text: "We ensure your software operates seamlessly across different operating systems, such as Windows, macOS, Linux, iOS, and Android.",
      img: deviceImage,
    },
    {
      icon: <FaMobileAlt className="text-red-500 text-4xl" />,
      title: "Device Compatibility Testing",
      text: "Our team tests your application on various devices, including desktops, tablets, and smartphones, to ensure consistent & reliable performance and functionality.",
      img: deviceImage,
    },
    {
      icon: <FaBackward className="text-purple-500 text-4xl" />,
      title: "Backward Compatibility Testing",
      text: "We check your software's compatibility with older versions of browsers and operating systems to ensure it works for all users, regardless of their system updates.",
      img: browserImage,
    },
  ];

  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${Compatibilitytest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Compatibility Testing Services
          </h2>
        </div>
      </div>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top-Shelf Compatibility Testing Services in India
        </h2>
        <p className="text-center mb-8">
          At QA Vision, the best compatibility testing company we offer comprehensive compatibility testing services in India designed to enhance the performance and user experience of your software products and applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="mr-4">{service.icon}</div>
                <img src={service.img} alt={service.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-8">
          What We Test at QA Vision?
        </h2>
        <p className="text-center mb-8">
          As a leading compatibility testing services agency, we test software solutions to verify whether they are compatible with:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">Browsers</h3>
            <p className="text-gray-600 mt-2">
              We verify whether the product is compatible with different browser versions and types, including Chrome, Safari, Opera, Firefox, and more.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">Operating Systems</h3>
            <p className="text-gray-600 mt-2">
              We check if the product operates as expected on various OSs, such as Windows, Linux, and macOS.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">Software</h3>
            <p className="text-gray-600 mt-2">
              We ensure that developed software is compatible with other software applications and systems.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">Hardware</h3>
            <p className="text-gray-600 mt-2">
              We test if a solution works as expected with different hardware configurations to ensure optimal performance.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">Networks</h3>
            <p className="text-gray-600 mt-2">
              We evaluate the system's operation in various connection types, including Wi-Fi, 3G, 4G, and more, to ensure reliable connectivity.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">Mobile Operating Systems</h3>
            <p className="text-gray-600 mt-2">
              We ensure that the solution is compatible with different mobile platforms, such as iOS and Android.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold">Mobile Device Models</h3>
            <p className="text-gray-600 mt-2">
              We ensure that the solution is compatible with different models of devices and manufacturers, ensuring broad accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#4daaf6] text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Let’s get it rolling!</h3>
          <p className="text-lg mb-6">
            Ready to enhance your software's reliability? Contact QA Vision for
            expert compatibility testing solutions tailored to your needs!
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

export default CompatibilityTesting;
