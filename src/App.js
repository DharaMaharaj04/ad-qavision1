
import "./App.css";
import React, { useRef } from "react";
import Navbar from './Components/Navbar/Navbar';
import MobileNav from "./Components/Navbar/MobileNav";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/AllComponents/Home";
import About from "../src/pages/AboutPage";
import  VARAR from '../src/pages/VRARTesting';
import GameTesting from "../src/pages/GameTesting";
import ERPTesting from "../src/pages/ERPTesting";
import VRARTesting from "../src/pages/VRARTesting";
import Security from "../src/pages/SecurityTesting";
import QAManagement from "../src/pages/QAManagement";
import NextGenTesting from "../src/pages/NextGenTesting";
import EmergingService from "../src/pages/EmergingService";
import Internship from "./pages/Internship";
import JMeter from "./pages/JMeter";
import AppiumTesting from "../src/pages/AppiumTesting";
import WebAutomationTesting from "./pages/WebAutomationTesting";
import SeleniumTesting from "./pages/SeleniumTesting";
import RegressionAutomation from "./pages/RegressionAutomation";
import IOSAutomationPage from "./pages/IOSAutomationPage";
import FunctionalAutomationPage from "./pages/FunctionalAutomationPage";
import APIAutomationTesting from "./pages/APIAutomationTesting";
import AutomationFrameworkDesign from "./pages/AutomationFrameworkDesign";
import DatabaseAutomationTesting from "./pages/DatabaseAutomationTesting";
import RegressionTestingServices from "./pages/RegressionTestingServices";
import PerformanceTestingSection from "./pages/PerformanceTestingSection";
import CompatibilityTesting from "./pages/CompatibilityTesting";
import MobileAppTesting from "./pages/MobileAppTesting";
import DesktopAppTesting from "./pages/DesktopAppTesting";
import UsabilityTesting from "./pages/UsabilityTesting";
import WebAppTesting from "./pages/WebAppTesting";
import UATServices from "./pages/UATServices";
import AdvancedUIUXTesting from "./pages/AdvancedUIUXTesting";
import ManualTestingServices from "./pages/ManualTestingServices";
import ApiTestingBenefits from "./pages/ApiTestingBenefits";
import CareerForm from "./pages/CareerForm";
import ContactUs from "./pages/ContactUs";
import IndustryPage from "./pages/IndustryPage";
import NotFound from "./Components/NotFound";
import blogs from "./pages/Blog";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import ApplyPage from "./pages/ApplyPage";

function App() {
  //const sectionTop = useRef();

  return (
    <div className="relative">
      <Router>
      <HelmetProvider>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      {/* Desktop Navbar for larger screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/VARAR" element={<VRARTesting />} />
          <Route path="/game-testing" element={<GameTesting />} />
          <Route path="/erp-testing" element={<ERPTesting />} />
          <Route path="/security-testing" element={<Security />} />
          <Route path="/qa-management" element={<QAManagement />} />
          <Route path="/nextgenaration-testing" element={<NextGenTesting />} />
          <Route path="/emerging-testing-services" element={<EmergingService />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/jmeter" element={<JMeter />} />
          <Route path="/appium-testing" element={<AppiumTesting />} />
          <Route path="/webapp-testing" element={<WebAutomationTesting />} />
          <Route path="/selenium-testing" element={<SeleniumTesting />} />
          <Route path="/regression-automation" element={<RegressionAutomation />} />
          <Route path="/ios-testing" element={<IOSAutomationPage />} />
          <Route path="/functional-testing" element={<FunctionalAutomationPage />} />
          <Route path="/api-auto-testing" element={<APIAutomationTesting />} />
          <Route path="/automation-framework" element={<AutomationFrameworkDesign />} />
          <Route path="/database-testing" element={<DatabaseAutomationTesting />} />
          <Route path="/regression-testing" element={<RegressionTestingServices />} />
          <Route path="/performance-testing" element={<PerformanceTestingSection />} />
          <Route path="/compatibility-testing" element={<CompatibilityTesting />} />
          <Route path="/mobileapp-testing" element={<MobileAppTesting />} />
          <Route path="/desktopapp-testing" element={<DesktopAppTesting />} />
          <Route path="/application-testing" element={<WebAppTesting />} />
          <Route path="/user-acceptance-testing" element={<UATServices />} />
          <Route path="/usability-testing" element={<UsabilityTesting />} />
          <Route path="/ui-ux-testing" element={<AdvancedUIUXTesting />} />
          <Route path="/functional-manual-tesing" element={<ManualTestingServices />} />
          <Route path="/api-testing" element={<ApiTestingBenefits />} />
          <Route path="/careers" element={<CareerForm />} />
          <Route path="//apply/:jobId" element={<ApplyPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<SinglePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
        </HelmetProvider>
      </Router>
      
    </div>
  );
}

export default App;
