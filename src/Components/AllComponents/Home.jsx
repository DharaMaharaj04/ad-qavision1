import React, { useRef } from "react";
import Header from "../Header/Header";
import AboutUs from "../MidSection/AboutUs";
import MidFilterSection from "../MidSection/MidFilterSection";
import WhatsAppChatWidget from 'react-whatsapp-chat-widget';

import PopUpButton from "../PopUpButton/PopUpButton";
import HowWeDoIt from "../MidSection/HowWeDoIt";
import Philosophy from "../MidSection/Philosophy";

const Home = () => {
  const sectionTop = useRef();

  const handleScroll = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      
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
