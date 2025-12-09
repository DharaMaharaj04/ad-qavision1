import React, { useContext } from "react";

const WrapperContainer = ({ navHead, children }) => {
  return (
    <div
      className={
        !navHead
          ? `container mx-auto px-4 ${
              theme === "light" ? " bg-wrapperBg" : "bg-wrapperDark"
            } h-full w-full bg-cover bg-no-repeat bg-center rounded-xl -translate-y-36 drop-shadow-2xl`
          : "container mx-auto px-4"
      }
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
