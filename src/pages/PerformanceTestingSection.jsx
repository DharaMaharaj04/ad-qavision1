import { FaBolt, FaDatabase, FaUserShield, FaUniversalAccess } from "react-icons/fa";
import PerformanceTest from '../assets/images/PRERFORMANCE_TESTING.jpg';

const PerformanceTestingSection = () => {
  return (
    <div className="">
    <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${PerformanceTest})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Performance Testing Services
          </h2>
        </div>
      </div>
      {/* Section: Advanced Performance Testing */}
      <div className="container mx-auto px-4 mb-12 pt-8">
        <h1 className="text-3xl font-bold mb-4">Advanced Performance Testing to Identify & Mitigate Risks</h1>
        <p className="mb-4">
          Performance and load testing is super important because it helps your software handle real-world usage without crashing or slowing down. Ever wondered how your app will perform under heavy traffic? By putting your app through its paces, we make sure it runs smoothly even when it's under pressure.
        </p>
        <p>
          At QA Vision, we're one of India’s top performance testing companies. We’re known for getting things done up to 4x faster while keeping quality at its highest. Our experts use their skills and resources to ensure your software performs like a champ, no matter how many users are hitting it at once.
        </p>
      </div>

      {/* Section: Our Services */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="mb-4">
          QA Vision offers a wide range of performance and load-testing services designed to ensure your software meets the highest standards and complies with the global quality norms.
        </p>

        {/* Services List */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Performance Testing */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaBolt className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Performance Testing</h3>
            <p className="mb-4">
              We evaluate your software on a wide array of parameters such as responsiveness, stability, and speed under various conditions and environments. Utilizing advanced tools like JMeter, LoadRunner, and Neoload, we simulate different scenarios to measure response times, throughput, and resource utilization.
            </p>
            
          </div>

          {/* Load Testing */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaUserShield className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Load Testing</h3>
            <p className="mb-4">
              Our team simulates high traffic to assess how your application responds to stress, ensuring it remains stable and efficient during peak usage. We use tools like Apache JMeter, BlazeMeter, and Gatling to identify bottlenecks that may cause performance reduction.
            </p>
            
          </div>

          {/* Database Testing */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaDatabase className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Database Testing</h3>
            <p className="mb-4">
              We test the performance, scalability, and reliability of your database under load. Using tools like SQL Query Analyzer and Oracle Performance Analyzer, we ensure data integrity and performance under varying load conditions.
            </p>
            
          </div>

          {/* Accessibility Testing */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaUniversalAccess className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Accessibility Testing</h3>
            <p className="mb-4">
              We ensure your software is accessible to all users, including those with disabilities, by testing against accessibility standards using tools like Axe, JAWS, NVDA, and WAVE.
            </p>
            
          </div>
        </div>
      </div>
      <section className="py-16 bg-[#4daaf6] text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Let’s get it rolling!</h3>
          <p className="text-lg mb-6">
            Ready to enhance your software's reliability? Contact QA Vision for
            expert performanace testing solutions tailored to your needs!
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

export default PerformanceTestingSection;
