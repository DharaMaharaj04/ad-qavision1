import React, { useRef } from "react";
import Header from "../Header/Header";
import AboutUs from "../MidSection/AboutUs";
import MidFilterSection from "../MidSection/MidFilterSection";
import WhatsAppChatWidget from 'react-whatsapp-chat-widget';

import PopUpButton from "../PopUpButton/PopUpButton";
import HowWeDoIt from "../MidSection/HowWeDoIt";
import Philosophy from "../MidSection/Philosophy";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const sectionTop = useRef();

  const handleScroll = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
    <Helmet>
                    <title>QAVisiontestlab</title>
                    <title>QAVision | Top Software & Web Application Testing Services in India </title>
                    <meta name="description" content="Explore QA Vision's best software & application testing services in India. We offer software & web app testing, automation testing, game testing & VR/AR testing. - qavisiontestlab.com" />
                    <meta name="keywords" content="React, SEO, Helmet, Web Development, QA, Automation, AI, Testing" />
                    <meta property="og:title" content="QAVision | Top Software & Web Application Testing Services in India " />
                    <meta property="og:url" content="https://www.qavisiontestlab.com" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Explore QA Vision's best software & application testing services in India. We offer software & web app testing, automation testing, game testing & VR/AR testing. - qavisiontestlab.com" />
                    <meta property="og:image" content="https://www.qavisiontestlab.com/static/media/Mobtest.38e6ea47b93005f6d11e.jpg" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="qavisiontestlab.com" />
                    <meta property="twitter:url" content="https://www.qavisiontestlab.com" />
                    <meta name="twitter:title" content="QAVision | Top Software & Web Application Testing Services in India " />
                    <meta name="twitter:description" content="Explore QA Vision's best software & application testing services in India. We offer software & web app testing, automation testing, game testing & VR/AR testing. - qavisiontestlab.com" />
                    <meta name="twitter:image" content="https://www.qavisiontestlab.com/static/media/Mobtest.38e6ea47b93005f6d11e.jpg" />
                    <body id="page-home" /> 
                </Helmet> 

      
      <div>
        <PopUpButton handleScroll={handleScroll} />
      </div>
      <div>
      
        <Header topRef={sectionTop} />
      </div>
      <div className="bg-white-100 w-full">
        <AboutUs />
        <MidFilterSection />
        <Philosophy />
        <HowWeDoIt />
      </div>
      
      
      </div>
   
  );
};

export default Home;
