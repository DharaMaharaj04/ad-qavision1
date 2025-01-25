import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="px-6 py-8">
      {/* Curved Top Divider */}

      <section className="relative max-w-4xl mx-auto text-center normal-case leading-tight">
        {/* Title Animation */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          About Us
        </motion.h1>

        {/* First Paragraph Animation */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          At <span className="font-semibold text-blue-800">QA Vision</span>,
          we’re more than just a software testing company; we’re your dedicated
          partner in pushing the limits of software quality. Our dynamic team,
          boasting over 5 years of combined experience, goes that extra mile to
          ensure your software not only meets but exceeds industry standards. We
          pride our pool of software testing experts who helped us establish
          ourselves as a leading software and application testing company in
          India.
        </motion.p>

        {/* Second Paragraph Animation */}
        <motion.p
          className="text-lg md:text-xl mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          As the best software and web app testing service provider in India, we
          thrive on innovation and are committed to delivering results that
          truly stand out. With a passion for excellence, our extensive
          portfolio speaks volumes about our capability. When you choose QA
          Vision, you're choosing a partner that’s dedicated to enhancing your
          software's performance and setting new benchmarks for success.
        </motion.p>
      </section>

    </div>
  );
};

export default AboutUs;
