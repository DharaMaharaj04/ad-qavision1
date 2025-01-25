import React from 'react';
import { FaCheckCircle, FaCogs, FaTools, FaChartLine, FaUserShield } from 'react-icons/fa';
import banner from "../assets/images/autoWebExtra.jpg";

const AutomationFrameworkDesign = () => {
  return (
    <div className='mx-auto'>

    <div
  className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
  style={{ backgroundImage: `url(${banner})` }}
>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
        Automation Framework Design
        </h2>
      </div>
      </div>

    <section className=''>
    <div className="max-w-6xl mx-auto px-6 py-8 md:pt-32">
      <h2 className="text-3xl font-bold mb-4">
        Innovative Automation Framework Design Services in India
      </h2>
      <p className="text-lg font-light text-justify mb-6">
        Welcome to QA Vision, your premier automation framework design company in India. Are you struggling with inefficient testing processes or outdated frameworks? Look no further. We specialize in crafting advanced automation frameworks that streamline your testing strategy, boost efficiency, and enhance software quality.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Why Invest in Automation Framework Design?
      </h2>
      <p className="text-lg font-light text-justify mb-6">
        In today’s fast-paced software development world, a well-structured automation framework is crucial. It ensures consistent results, minimizes manual testing efforts, and improves test coverage. Our automation framework design services in India are designed to create frameworks that are not only effective but also flexible enough to adapt to your evolving needs.
      </p>

      <h2 className="text-2xl text-center font-bold text-blue-600 mt-8 mb-4">
        Our Modus Operandi at a Glance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          { icon: <FaCheckCircle className="text-blue-600" />, text: "Understand Your Needs: We start by analyzing your current testing processes and requirements to design a framework that addresses your unique challenges." },
          { icon: <FaCogs className="text-blue-600" />, text: "Design and Plan: Our team creates a detailed framework design, ensuring it adheres to best practices and is tailored to your specific needs." },
          { icon: <FaTools className="text-blue-600" />, text: "Develop the Framework: We build and customize the automation framework using the latest tools and technologies, ensuring it fits seamlessly with your software environment." },
          { icon: <FaChartLine className="text-blue-600" />, text: "Integration and Testing: We integrate the framework into your CI/CD pipeline and conduct comprehensive testing to verify functionality and performance." },
          { icon: <FaUserShield className="text-blue-600" />, text: "Optimize and Support: Post-implementation, we continuously monitor and optimize the framework, providing ongoing support to address any issues and make necessary adjustments." },
          { icon: <FaCheckCircle className="text-blue-600" />, text: "Feedback and Iteration: We gather your feedback and refine the framework through iterative improvements, ensuring it evolves with your business and technological advancements." },
        ].map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">{item.icon}</div>
              <h3 className="font-bold">{item.text.split(':')[0]}</h3>
            </div>
            <p className="text-sm">{item.text.split(':')[1]}</p>
          </div>
        ))}
      </div>
      </div>
      </section>
    <section className='py-16 px-4 sm:px-8 md:px-12 lg:px-24 bg-blue-100'>
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h2 className="text-2xl font-bold mt-8 mb-4">
        Our Automation Framework Design Services in India
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          { icon: <FaTools className="text-blue-600" />, text: "Custom Framework Development: We design and build automation frameworks from scratch, tailored to your specific requirements and software environment." },
          { icon: <FaChartLine className="text-blue-600" />, text: "Framework Optimization: We enhance existing frameworks to boost their performance, scalability, and maintainability, ensuring they meet your current and future needs." },
          { icon: <FaCogs className="text-blue-600" />, text: "Integration with CI/CD Pipelines: We integrate your automation framework with continuous integration and deployment processes to ensure seamless operations." },
          { icon: <FaCheckCircle className="text-blue-600" />, text: "Tool Selection and Implementation: We assist in selecting and implementing the right tools and technologies for your framework to maximize efficiency and effectiveness." },
        ].map((item, index) => (
          <div key={index} className="border bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">{item.icon}</div>
              <h3 className="font-bold">{item.text.split(':')[0]}</h3>
            </div>
            <p className="text-sm">{item.text.split(':')[1]}</p>
          </div>
        ))}
      </div>
      </div>
      </section>

      <section className='py-16 px-4 sm:px-8 md:px-12 lg:px-24'>
      <div className='max-w-6xl mx-auto px-4 py-8'>
      <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4 text-center">
        Why Pick QA Vision for Automation Framework Design Solutions in India?
      </h2>
      <p className="text-lg font-light mb-6 text-center">
        Choosing QA Vision brings you a plethora of benefits. Here are a few:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          { icon: <FaUserShield className="text-blue-600" />, text: "Expertise You Can Trust: As automation framework design experts in India, Team QA Vision boasts seasoned professionals with extensive experience in designing and implementing automation frameworks." },
          { icon: <FaCheckCircle className="text-blue-600" />, text: "Tailored Solutions: We deliver customized solutions that perfectly align with your specific business needs and technical requirements." },
          { icon: <FaCogs className="text-blue-600" />, text: "Seamless Integration: Our frameworks integrate effortlessly with your existing CI/CD pipelines, making your testing processes smoother and more efficient." },
          { icon: <FaChartLine className="text-blue-600" />, text: "Scalable and Flexible Frameworks: QA Vision ensures your frameworks are scalable and adaptable, ready to accommodate future growth and changes." },
          { icon: <FaTools className="text-blue-600" />, text: "Enhanced Performance: Our advanced optimization techniques boost the performance and reliability of your automation processes." },
        ].map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">{item.icon}</div>
              <h3 className="font-bold">{item.text.split(':')[0]}</h3>
            </div>
            <p className="text-sm">{item.text.split(':')[1]}</p>
          </div>
        ))}
      </div>
      <div className='text-center p-6 rounded bg-[#4daaf6] text-white'>
      <a href='/contact-us'>
      <button className="bg-white text-blue-800 font-bold py-2 px-4 rounded mt-4 hover:bg-blue-600 hover:text-white">
        Kick-off your project now
      </button>
      </a>
      </div>
      </div>
      </section>
    </div>
    
  );
};

export default AutomationFrameworkDesign;
