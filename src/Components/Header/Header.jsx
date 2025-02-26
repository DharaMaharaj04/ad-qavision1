import React, { useContext ,useEffect } from "react";
//import header1 from "../../assets/images/headerImage.png";
import { Switch } from "@material-tailwind/react";

import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";
import { ReactComponent as Twitterx } from "../../assets/images/twitter-x.svg";
import { ReactComponent as Email } from "../../assets/images/email.svg";
import Mobtest from "../../assets/images/Mobtest.jpg";
import CursorFollower  from "../../assets/CursorFollower";
import { motion } from "framer-motion";

const Header = ({ topRef }) => {



  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1, y: 1 ,
      transition: {
        duration: 2.5
      },
    },
  };



  return (
    <div ref={topRef} className="mx-auto sm:pt-4 md:pt-16">
    <CursorFollower />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pt-8 sm:pt-8 md:pt-1 sm:px-4 md:px-28 justify-items-center items-center">
        <div className="sm:w-full w-4/5 pl-2 md:pl-24">
        <div className="hidden">
          </div>
          <div className="absolute inset-0 hidden md:block" id="wrapper-canvas">
          </div>
            <div className="pt-1 sm:pt-32 md:pt-1 ">
              <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-4 sm:right-4 md:right-6">
                <li>
                  <a
                    href="https://www.linkedin.com/company/qavision-test-lab-llp"
                    
                  >
                    <
                      Linkedin fill="${color}"
                      className="w-7 hover:text-invert hover:text-blue-700"
                      />

                  </a>
                </li>
                <li>
                  <a href="https://x.com/QAVisionTestLab">
                    <
                      Twitterx fill="${currentcolor}"
                      className="w-7 hover:text-invert hover:text-black"
                      />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/qavisiontestlab/">
                    <
                      Instagram fill="${currentcolor}"
                      className="w-7 hover:text-invert hover:text-pink-300"
                      />
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@qavisiontestlab.com">
                    <
                      Email fill="${currentcolor}" 
                      className="w-7 hover:text-invert hover:text-blue-500"
                      />
                  </a>
                </li>
                <li>
                  <a href="tel:8780834040">
                    <
                      Phone fill="${color}"
                      className="w-7 hover:text-invert hover:text-blue-500"
                    />
                  </a>
                </li>
              </ul>
            </div>  
            <motion.h3
            className=
                 "sm:text-lg md:text-3xl text-blue-700 font-semibold"
            initial="hidden"
        animate="visible"
        variants={containerVariants}
          >
          Welcome to QA Vision{" "} 
          </motion.h3>
          <motion.h1
              className=
                  "text-3xl sm:text-3xl md:text-5xl py-4 text-dark  font-russonOne font-medium font-bold no-underline align-middle normal-case leading-tight"
              initial="hidden"
        animate="visible"
        variants={containerVariants}
            >
            Your Partner in Top-Notch Software Testing
            
            </motion.h1>  
          
          <div className="mt-4">
            <motion.p
              className=
                  "text-lg sm:text-lg md:text-2xl  w-5/5 sm:pr-8 py-2 font-inter font-small no-underline align-center normal-case text-dark"
              initial="hidden"
        animate="visible"
        variants={containerVariants}
            >
            Explore QA Vision's best software & application testing services in India. 
            We offer Software & Web App Testing, Automation Testing, 
            Game Testing & VR/AR Testing. 
            </motion.p>
          </div>
          <div className="pb-10 pt-5 ring-blue-500">
          <a href="mailto:sales@qavisiontestlab.com">
  <motion.button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 hover:text-white rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 group hover:bg-blue-600 ring-2 hover:ring-white-400 ring-blue-500"
  initial="hidden"
        animate="visible"
        variants={containerVariants}
  >
    <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0 transition-all ease-in duration-75">
    Let's work together
    </span>
  </motion.button>
  </a>
</div>
        </div>
        <div className="md:mt-4">
          <img
            className="h-[475px] sm:h-[475px] md:h-[565px] w-full sm:w-full w-2/5 bg-no-repeat bg-center relative z-0 header rounded-xl"
            src={Mobtest}
            alt="header-phone"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
