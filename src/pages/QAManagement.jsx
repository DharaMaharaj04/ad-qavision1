import React from "react";
import { motion } from 'framer-motion';
import QAManagementHero from '../assets/images/qamanagement-hero.jpg';
import QAManagement from '../assets/images/QA_Management_Services_1.jpg';
import QAImplementation from '../assets/images/Define QA Process and Implementation_3.jpg';
import DesignDeliverables from '../assets/images/Design Test Ideas and Deliverables in India_2.jpg';
import QAService from '../assets/images/Why QA Vision for QA Management Services in India_7.jpg';
import QAScrum from '../assets/images/QA cum Scrum Master Staffing Services in India_4.jpg';
import QADeliverable from '../assets/images/QA Deliverables and Management_5.jpg';
import QAOutsourcing from '../assets/images/QA Outsourcing Services in India_6.jpg';
import QAMethology from '../assets/images/Methodology.jpg';

const QAServicePage = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-10 space-y-12">
      <div
      className="relative w-full min-h-[500px] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${QAManagementHero})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
            QA Management Services
          </h2>
        </div>
      </div>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2196f3] mb-4">
            Top-Grade QA Management Services in India
          </h2>
          <p className="text-lg leading-relaxed">
            Effective QA management is crucial for keeping your products on track. At QA Vision, we provide top-notch QA Management Services in India to help you avoid those dreaded quality slip-ups. With QA Vision, you’ll always keep quality in check and stay ahead of the game.
          </p>
        </section>

        {[
          {
            title: "Implement QA Process and Execution Services in India",
            content: "At QA Vision, we specialize in helping businesses establish and execute QA processes that are both efficient and effective. Our services include:",
            list: [
              { name: "Process Standardization", description: "We define and standardize QA procedures tailored to your specific project requirements." },
              { name: "Execution Management", description: "Our team ensures every phase of the QA process is carried out meticulously, from initial planning to final testing." },
              { name: "Real-Time Monitoring", description: "We provide ongoing monitoring and detailed reporting to keep you informed at every stage." }
            ],
            image: QAManagement,
            listStyle: "standard"
          },
          {
            title: "Design Test Ideas and Deliverables in India",
            content: "Creating effective test strategies and deliverables is crucial for any QA process. QA Vision's expertise in this area ensures your project is thoroughly tested with innovative approaches:",
            list: [
              { name: "Customized Test Plans", description: "We design test ideas that are unique to your project’s needs, ensuring comprehensive coverage." },
              { name: "Actionable Deliverables", description: "Our test results are clear, actionable, and focused on delivering high-quality outcomes." },
              { name: "Innovative Testing Methods", description: "We use cutting-edge techniques to cover all critical aspects of your product." }
            ],
            image: DesignDeliverables,
            listStyle: "standard"
          },
          {
            title: "Define QA Process and Implementation",
            content: "A well-defined QA process is the backbone of successful product development. As the best QA management company in India, QA Vision excels in defining and implementing QA processes that are both robust and adaptable:",
            list: [
              { name: "Process Definition", description: "We establish clear, efficient QA processes that integrate seamlessly with your project." },
              { name: "Implementation Support", description: "Our team guides you through the implementation, ensuring smooth integration into your existing workflows." },
              { name: "Continuous Optimization", description: "We continually refine the processes to enhance efficiency and effectiveness." }
            ],
            image: QAImplementation,
            listStyle: "standard"
          },
          {
            title: "QA cum Scrum Master Staffing Services in India",
            content: "Staffing the right professionals is key to effective QA management. QA Vision provides skilled QA cum Scrum masters to lead your QA efforts:",
            list: [
              { name: "Expert Staff: ", description: "We offer experienced professionals who can handle both QA and Scrum responsibilities, ensuring cohesive project management." },
              { name: "Seamless Integration:", description: "Our staff work closely with your team to ensure smooth collaboration and efficient project execution." },
              { name: "Tailored Staffing Solutions:", description: "Whether you need full-time, part-time, or project-based staffing, we provide flexible solutions to meet your needs." }
            ],
            image: QAScrum,
            listStyle: "grid"
          },
          {
            title: "QA Deliverables and Management in India",
            content: "Delivering quality results requires careful management and clear deliverables. QA Vision ensures that your QA process is well-managed and outcome-focused:",
            list: [
              { name: "Defined Deliverables:", description: "We set clear, measurable goals for every stage of the QA process." },
              { name: "Effective Oversight:", description: "Our management team oversees all aspects of QA to ensure that your project stays on track and meets all quality standards." },
              { name: "Detailed Reporting:", description: "We provide comprehensive reports that offer insights into the QA process and outcomes." }
            ],
            image: QADeliverable,
            listStyle: "standard"
          },
          {
            title: "QA Outsourcing Services in India",
            content: "Outsourcing your QA needs to QA Vision can save you time and resources while ensuring top-quality results:",
            list: [
              { name: "Cost-Efficient Solutions:", description: "We provide high-quality QA services at competitive rates, helping you manage costs without compromising on quality." },
              { name: "Access to Skilled Teams:", description: "Our outsourcing services give you access to experienced QA professionals without the hassle of hiring and training." },
              { name: "Complete QA Management:", description: "We handle everything from strategy to execution, allowing you to focus on other aspects of your business." }
            ],
            image: QAOutsourcing,
            listStyle: "standard"
          },
          {
            title: "Why QA Vision for QA Management Services in India",
            content: "Choosing QA Vision means partnering with a team of experienced professionals who are dedicated to delivering quality results. Here’s why we stand out:",
            list: [
              { name: "Experience:", description: "Our team brings decades of experience in managing complex QA processes across various industries." },
              { name: "Tailored Solutions:", description: "We customize our services to fit your specific project requirements, ensuring that you get the results you need." },
              { name: "Proven Track Record:", description: "We have a history of delivering successful projects, with satisfied clients in multiple sectors." },
              { name: "Client-Centric Approach:", description: "Our focus is on providing responsive, flexible services that meet your needs and exceed your expectations." },
              { name: "Cost-Effectiveness:", description: "By outsourcing, you reduce overhead costs associated with in-house teams and infrastructure, making your QA process more budget-friendly while maintaining high standards." }
            ],
            image: QAService,
            listStyle: "grid"
          },
          {
            title: "Our Methodology",
            content: "Our approach to QA management is methodical and thorough, ensuring that every aspect of your project is covered. We take a detailed, step-by-step approach, addressing each component of the QA process with precision.  From initial assessments and customized strategies to execution and continuous monitoring, we ensure that no detail is overlooked. By combining structured planning with real-time adjustments, we guarantee that your project receives the highest level of quality assurance throughout its lifecycle.",
            list: [
              { name: "Initial Assessment:", description: "We start by analyzing your project’s specific QA needs." },
              { name: "Customized QA Strategy:", description: "We develop a tailored QA management plan that aligns with your project goals." },
              { name: "Execution & Monitoring:", description: "Our team ensures that the QA process is executed smoothly, with regular monitoring to keep the project on track." },
              { name: "Reporting & Feedback:", description: "We provide detailed reports and gather feedback to continuously improve the QA process." }
            ],
            image: QAMethology,
            listStyle: "standard"
          }
        ].map((section, index) => (
          <section
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 bg-white rounded-lg shadow-lg p-6`}
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-[#2196f3] mb-4">
                {section.title}
              </h2>
              <p className="mb-4">{section.content}</p>
              {section.listStyle === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.list.map((item, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <div className="flex-none w-6 h-6 bg-blue-500 rounded-full text-white flex justify-center items-center">
                        <span className="text-sm">{i + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex-1 max-w-xs">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>
        ))}

        {/* Call to Action Section */}
      <section className="text-center py-8 bg-blue-100 text-white rounded-lg shadow-lg">
      <motion.h2
        className="text-3xl font-bold mb-4 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        It’s Time to Boost Your QA Efficiency
      </motion.h2>
      <p className="text-lg mb-6 text-blue-800">
        Elevate your QA process with QA Vision. Find out how our expert QA management experts can drive quality and efficiency.
      </p>
      <a href="/contact-us" className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900">
        Contact Us Today
      </a>
    </section>
      </div>
    </div>
  );
};

export default QAServicePage;
