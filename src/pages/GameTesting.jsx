import React from "react";
import { motion } from "framer-motion";
import gameTesting from "../assets/images/video-game.jpg";
import MobileGame from "../assets/images/action-game.jpg";
import desktopGame from "../assets/images/online-games.jpg";

const GameTestingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={gameTesting}
          alt="Game Testing Desktop"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
          <h1 className="text-white text-5xl font-extrabold sm:text-6xl text-center drop-shadow-lg">
            Game Testing
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8">
            Best Game Testing Company in India for Flawless Outcomes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            At QA Vision, we're all about making sure your games are as fun and
            flawless as possible. As a leading<strong className="text-gray-900"> game testing company in India</strong>, we
            specialize in both mobile and desktop game testing, ensuring that
            your players get the best experience, whether on hand-held devices
            or desktops.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 bg-gray-100">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">
            Why Choose Our Mobile and Desktop Game Testing Services?
          </h2>
          <p className="text-lg leading-relaxed text-justify ">
            When it comes to gaming, even the smallest bug can ruin the fun. As
            a leading mobile and desktop game testing company in India, we set
            high-quality benchmarks and have continuously elevated our testing
            to ensure flawless outcomes.
          </p>
          <p className="text-lg mt-6 leading-relaxed text-justify ">
            Our team offers top-notch<strong className="font-bold"> mobile game testing services in India</strong>. 
            We test games across various devices and platforms to ensure smooth gameplay, 
            whether it's on a smartphone, tablet, or desktop. Our rigorous process ensures that 
            your game launches seamlessly for players.
          </p>
        </motion.div>
      </section>

      {/* Mobile and Desktop Testing Section */}
      <section className="py-20 px-8 lg:px-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            Mobile Game Testing Services
          </h3>
          <p className="text-lg text-center mt-2 text-justify">
          Mobile gaming is booming, and so is the need for thorough testing.
          We offer some of the <strong className="font-bold"> best mobile game testing services in India</strong>,
          ensuring that your game works flawlessly on all types of mobile
          devices. From performance testing to usability checks, we cover
          every aspect to make sure your game is a hit with players.
          </p>
        </div>
        <img
          src={MobileGame}
          alt="Mobile Game"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
        <img
          src={desktopGame}
          alt="Desktop Game"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            Desktop Game Testing Solutions
          </h3>
          <p className="text-lg text-center mt-2 text-justify">
          Desktop gaming requires a different level of precision, and we've got
          it covered. Our <strong className="font-bold">desktop game testing services in India</strong> focus on
          everything from graphic performance to multi-platform
          compatibility. Whether it's a high-intensity FPS or a complex strategy
          game, we make sure it delivers the best possible experience on any
          desktop setup.
          </p>
        </div>
      </div>
    </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#4daaf6] text-white text-center mb-2 md:mb-16">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Let’s Level Up Your Game
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Ready to take your game to the next level? Partner with QA Vision, the 
            <strong className="font-bold">best game testing company in India</strong>, and ensure a seamless 
            gaming experience for your players. Our <strong>top mobile and desktop game testing solutions</strong> 
            guarantee a flawless release.
          </p>
          <a
            href="/contact-us"
            className="bg-white text-blue-600 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition"
          >
            Reach Out to Us Today
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default GameTestingPage;
