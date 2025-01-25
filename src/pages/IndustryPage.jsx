import React from "react";
import ecommerce from '../assets/images/E-commerce.jpg';
import fintech from '../assets/images/FINANCE.jpg';
import socialmedia from '../assets/images/Social Media Image.jpg';
import ai from '../assets/images/AI.jpg';
import ml from '../assets/images/ML.jpg';
import health from '../assets/images/HEALTH_FITNESS.jpg';
import gaming from '../assets/images/GAMING.jpg';
import saas from '../assets/images/SAAS.jpg';
import crm from '../assets/images/CRM.jpg';
import erp from '../assets/images/erp.jpg';
import blockchain from '../assets/images/Blockchain.jpg';
import education from '../assets/images/EDUCATION.jpg';
import travel from '../assets/images/TRAVEL.jpg';
import realestate from '../assets/images/REAL_ESTATE.jpg';
import bfsi from '../assets/images/BFSI.jpg';
import cms from '../assets/images/CMS.jpg';
import pos from '../assets/images/POINT_OF_SALE.jpg';
import eventManagement from '../assets/images/Event Management.jpg';
import agritech from '../assets/images/Agri Tech.jpg';
import food from '../assets/images/FOODS_DRINKS.jpg';

const industries = [
  { name: "E-Commerce", img: ecommerce },
  { name: "FinTech", img: fintech },
  { name: "Social Media", img: socialmedia },
  { name: "AI (Artificial Intelligence)", img: ai },
  { name: "ML (Machine Learning)", img: ml },
  { name: "Health and Fitness", img: health },
  { name: "Gaming", img: gaming },
  { name: "SaaS (Software as a Service)", img: saas },
  { name: "CRM (Customer Relationship Management)", img: crm },
  { name: "ERP/SAP", img: erp },
  { name: "Blockchain", img: blockchain },
  { name: "Education and E-Learning", img: education },
  { name: "Mobility and Travel", img: travel },
  { name: "Real Estate", img: realestate },
  { name: "BFSI", img: bfsi },
  { name: "CMS", img: cms },
  { name: "Point of Sale", img: pos },
  { name: "Event Management", img: eventManagement },
  { name: "Agri Tech", img: agritech },
  { name: "Food and Drinks", img: food },
];

const IndustryPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
      className="relative w-full min-h-[400px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${education})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold sm:text-5xl text-center">
          Industries
          </h2>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={industry.img}
                alt={industry.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
