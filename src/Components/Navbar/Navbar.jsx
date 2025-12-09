import React, { useState, useEffect } from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { navbarData } from "../../DataForPage/dummyData";
import qa from "../../assets/images/logo-QA.png";
import { Link } from "react-router-dom";
import Home from "../AllComponents/Home";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Recursive function to render nested submenus
  const renderSubMenu = (submenu) => {
    return submenu.map((item) => (
      <MenuItem key={item.id} className="text-black hover:bg-gray-100">
        {item.submenu ? (
          <Menu placement="right-start">
            <MenuHandler>
              <div className="cursor-pointer flex items-center">
                {item.name} <span className="ml-1">►</span>
              </div>
            </MenuHandler>
            <MenuList className="bg-white shadow-lg">
              {renderSubMenu(item.submenu)}
            </MenuList>
          </Menu>
        ) : (
          <Link to={item.link} className="block text-gray-700 py-1 hover:text-blue-500">
            {item.name}
          </Link>
        )}
      </MenuItem>
    ));
  };

  return (
    <div>
      <div
        className={`fixed w-full h-16 py-2 flex items-center transition duration-500 z-10 ${
          scroll ? "bg-white backdrop-blur-3xl bg-opacity-100 shadow-lg" : "bg-white"
        }`}
      >
        <div className="grid grid-cols-2">
          <div className="sm:w-full text-center justify-center pt-2 my-2">
          <Link to="/" className="inline-block">
          <img className="h-40" src={qa} alt="logo" />
        </Link>
          </div>
          <div className="flex items-center justify-start 4/5">
            {navbarData.map((item) => (
              <div key={item.id} className="relative group">
                {item.submenu ? (
                  <Menu>
                    <MenuHandler>
                      <div className="text-dark sm:text-md md:text-lg font-medium py-1 px-2 hover:text-blue-500 cursor-pointer">
                        {item.name} <span>▼</span>
                      </div>
                    </MenuHandler>
                    <MenuList className="bg-white shadow-lg p-4">
                      {renderSubMenu(item.submenu)}
                    </MenuList>
                  </Menu>
                ) : (
                  <Link
                    to={item.link}
                    className="text-dark text-lg font-medium py-1 px-2 hover:text-blue-500 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
