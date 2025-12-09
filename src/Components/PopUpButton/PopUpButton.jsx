import React, { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";

const PopUpButton = ({ handleScroll }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      {open && <Modal open={open} setOpen={setOpen}></Modal>}

      <div>
        
        <Tooltip content="Back to the top">
          <div className="sm:block sm:left-4 sm:bottom-20 absolute left-14 hidden rounded-full text-white flex-col bottom-6 z-10 bg-dark px-6 py-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={handleScroll}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default PopUpButton;
