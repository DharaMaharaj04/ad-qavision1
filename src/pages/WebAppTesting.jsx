import { FaGlobe, FaMobileAlt, FaTachometerAlt, FaDatabase, FaCogs, FaLock, FaCheckCircle } from 'react-icons/fa';
import webapp from "../assets/images/WEB_APP.jpg";

const webAppTestingSolutions = [
  {
    title: 'Cross-Browser Compatibility',
    description:
      'Ensure seamless functionality and a consistent user experience across all browsers ranging from Chrome to Firefox, Safari, and Edge—identifying and fixing any browser-specific issues.',
    icon: <FaGlobe className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Responsive Design and Mobile Compatibility',
    description:
      'Our web app testing experts verify that your web application adapts perfectly to various devices and screen sizes, ensuring a smooth and user-friendly experience on smartphones, tablets, and desktops.',
    icon: <FaMobileAlt className="text-green-500 text-3xl" />,
  },
  {
    title: 'Performance and Load Testing',
    description:
      'Assess the performance of your web application under different load conditions to ensure it can handle high traffic volumes and maintain fast response times, identifying and resolving performance bottlenecks.',
    icon: <FaTachometerAlt className="text-red-500 text-3xl" />,
  },
  {
    title: 'Data Integrity and Database Testing',
    description:
      'Validate the accuracy, consistency, and security of your application\'s data, ensuring that all database operations perform correctly and efficiently without data corruption or loss.',
    icon: <FaDatabase className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Functionality and User Experience',
    description:
      'We ensure that all features and functionalities of your web application work as intended, providing a seamless and intuitive user experience, while identifying and fixing any usability issues.',
    icon: <FaCogs className="text-yellow-500 text-3xl" />,
  },
];

const WebAppTesting = () => {
  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${webapp})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Web App Testing
          </h2>
        </div>
      </div>
      {/* Section 1: Title & Intro */}
      <div className="text-center mb-12 pt-8 px-6 mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          # 1 Web App Testing Company in India
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-4">
          At QA Vision, we understand the importance of thoroughly testing web applications across browsers, OSs, and devices. With years of experience and a proven track record, we have established ourselves as a leading web application testing company in India.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We’ve got you covered with comprehensive testing that spans functionality, performance, security, and compatibility, ensuring your web app runs smoothly and securely across all platforms.
        </p>
      </div>

      {/* Section 2: End-to-End Web App Testing Solutions */}
      <div className="bg-white py-12 px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Bid Adieu to Challenges with Our End-to-End Web App Testing Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
          {webAppTestingSolutions.map((service, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Web App Testing for Functionality, Reliability & Security */}
      <div className="py-16 px-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold">
            QA Vision’s Web App Testing for Functionality, Reliability & Security
          </h3>
          <p className="max-w-2xl mx-auto mt-4">
            Go with QA Vision for expert web testing services that make your application robust, secure, and user-friendly. Our seasoned web app testers in India take a thorough approach, ensuring your app performs at its best.
          </p>
        </div>

        {/* Key Testing Features - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCogs className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Functionality Testing</h4>
            <p className="text-gray-600">
              Verifies that the application performs as expected, fulfilling all specified requirements and user stories.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaMobileAlt className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Usability Testing</h4>
            <p className="text-gray-600">
              Evaluates the application's user interface and experience, ensuring it is intuitive and user-friendly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaTachometerAlt className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Performance Testing</h4>
            <p className="text-gray-600">
              Determines the application's speed, responsiveness, and stability under various workloads & conditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaDatabase className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Data Integrity</h4>
            <p className="text-gray-600">
              Validate the accuracy, consistency, and security of your application's data, ensuring all database operations perform correctly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaLock className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Security Testing</h4>
            <p className="text-gray-600">
              Identifies vulnerabilities and safeguards sensitive data against unauthorized access and threats.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCheckCircle className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Regression Testing</h4>
            <p className="text-gray-600">
              Verifies that new code changes do not negatively impact existing functionalities.
            </p>
          </div>
        </div>
      </div>
      <section className="py-16 bg-[#4daaf6] text-white text-center my-16 py-12">
        <div className=" mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Let’s get it rolling!</h3>
          <p className="text-lg mb-6">
            Ready to enhance your software's reliability? Contact QA Vision for
            expert Web App testing solutions tailored to your needs!
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
}


export default WebAppTesting;