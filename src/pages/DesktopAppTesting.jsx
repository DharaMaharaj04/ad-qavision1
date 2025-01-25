import { FaClipboardList, FaCogs, FaMobileAlt, FaTachometerAlt, FaLock, FaCheckCircle } from 'react-icons/fa';
import desktoptest from "../assets/images/DESKTOP_APP.jpg";

const services = [
  {
    name: 'Functionality Testing',
    description: 'Verifies that the application performs as expected, fulfilling all specified requirements and user stories.',
    icon: <FaClipboardList className="text-4xl text-blue-600" />,
  },
  {
    name: 'Usability Testing',
    description: 'Evaluates the application’s UI and UX, ensuring it is intuitive, efficient, and user-friendly.',
    icon: <FaCogs className="text-4xl text-green-600" />,
  },
  {
    name: 'Performance Testing',
    description: 'Determines the application’s speed, responsiveness, and stability under various workloads.',
    icon: <FaTachometerAlt className="text-4xl text-red-600" />,
  },
  {
    name: 'Compatibility Testing',
    description: 'Ensures seamless operation across different OS, hardware configurations, and browsers.',
    icon: <FaMobileAlt className="text-4xl text-purple-600" />,
  },
  {
    name: 'Security Testing',
    description: 'Identifies vulnerabilities and weaknesses to safeguard sensitive data and prevent unauthorized access.',
    icon: <FaLock className="text-4xl text-yellow-600" />,
  },
  {
    name: 'Regression Testing',
    description: 'Verifies that new code changes do not negatively impact existing functionalities.',
    icon: <FaCheckCircle className="text-4xl text-teal-600" />,
  },
];

const testingSteps = [
    {
      title: 'Requirement Gathering',
      description: 'Thorough analysis of client specifications & application requirements to ensure comprehensive test coverage.',
      icon: <FaClipboardList className="text-white text-3xl" />,
    },
    {
      title: 'Test Plan Creation',
      description: 'Developing a detailed blueprint outlining testing objectives, scope, resources, and schedule.',
      icon: <FaCogs className="text-white text-3xl" />,
    },
    {
      title: 'Test Case Development',
      description: 'Creating test cases to verify application functionality, performance, and user experience.',
      icon: <FaMobileAlt className="text-white text-3xl" />,
    },
    {
      title: 'Test Execution',
      description: 'Meticulous execution of test cases to identify defects and ensure product quality.',
      icon: <FaTachometerAlt className="text-white text-3xl" />,
    },
  ];
  

const DesktopAppTesting = () => {
  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${desktoptest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Desktop Testing
          </h2>
        </div>
      </div>
      <div className="container mx-auto mb-12 py-16 px-6">
        <h2 className="text-3xl  font-semibold mb-4">
          Superlative Functionality, Performance & User-Experience
        </h2>
        <p className="text-gray-600 mx-auto mb-4">
          Say Hi to QA Vision’s reliable desktop application testing services for unmatched functionality, performance, and UX on diverse OS’ & hardware configurations.
        </p>

        <p className="text-gray-600 mx-auto">With a streamlined process, cutting-edge tools, and an expert team of desktop app testing experts, QA Vision ensures that your desktop applications function seamlessly for a phenomenal user experience.  
        </p>
      </div>


      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Our Desktop App Testing Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At QA Vision, we’ve got a meticulous desktop app testing process that’s all about getting you exceptional results. Our structured approach ensures your desktop applications hit the highest quality standards.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-6">
      
        <div className="relative border-l-4 border-blue-600 timeline">
          {testingSteps.map((step, index) => (
            <div className="mb-10 ml-8 flex" key={index}>
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-lg">
                {step.icon}
              </div>
              <div className="ml-6 bg-white p-6 rounded-lg shadow-lg w-full hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       
      <h2 className="text-3xl text-center font-semibold text-gray-800 my-8">
      QA Vision’s Ultra-Advanced Desktop Application Testing Services
    </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto mb-8">
      
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full aspect-w-1 aspect-h-1"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-700">
              {service.name}
            </h3>
            <p className="text-gray-600 text-center mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <section className="py-16 bg-[#4daaf6] text-white text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4">Let’s get it rolling!</h3>
        <p className="text-lg mb-6">
          Ready to enhance your software's reliability? Contact QA Vision for
          expert Desktop App testing solutions tailored to your needs!
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


export default DesktopAppTesting;