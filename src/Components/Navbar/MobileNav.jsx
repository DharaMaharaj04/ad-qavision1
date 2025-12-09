import React, { useState, useContext } from "react";
import MobileNavContainer from "./MobileNavContainer";
import { navbarData } from "../../DataForPage/dummyData";
import qa from "../../assets/images/logo-QA.png";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
      <div className="pl-8">
          <Link to="/" className="inline-block">
          <img className="w-[30%]" src={qa} alt="logo" />
        </Link>
          </div>
        <div className="absolute top-2 right-4 sm:block z-40 border-2 border-blue-700">
          {open ? (
            <span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000" 
            className="w-6 h-6"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000" 
          className="w-6 h-6"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" 
          />
        </svg>
          )}
        </div>
      </div>
      {open &&
        navbarData.map((item) => {
          return (
            <MobileNavContainer
              setOpen={setOpen}
              key={item.id}
              name={item.name}
              link={item.link}
            ></MobileNavContainer>
          );
        })}
    </div>
  );
};

export default MobileNav;
