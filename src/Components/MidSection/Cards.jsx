import React, { useContext } from "react";
import { cardData } from "../../DataForPage/dummyData";
import star from "../../assets/images/blue-star.svg";
import starWhite from "../../assets/images/starWhite.svg";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";


const Cards = () => {
  
  const starList = [1, 2, 3, 4, 5];
  return (
    <div id="demo">
    <div className="mx-auto mb-[10px] py-8 max-w-[510px] text-center">
    <h2 className="mb-1 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
    Customer Testimonials 
    </h2>
  </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 items-center gap-8 content-between w-full pt-10 mb-8">
        {cardData.map((item) => {
          return (
            <motion.div
              className="pl-1 sm:pl-0 md:pl-20 mx-auto "
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Card
                className={
                   item.id === "0" || item.id === "2" || item.id === "4"
                   ? "w-80 bg-blue-300 border border-dark"  
                   : "w-80  border border-dark"
                }
              >
                <CardBody className="text-center">
                  <Typography
                    variant="h5"
                    className={
                      item.id === "0" || item.id === "2"|| item.id === "4"
                        ? "mb-2 fonm-inter leading-normal no-underline align-middle tracking-wide normal-case text-white"
                        : "mb-2 fonm-inter leading-normal no-underline align-middle tracking-wide normal-case text-blue-700"
                       
                    }
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className={
                       item.id === "0" || item.id === "2"|| item.id === "4"
                       ? "mb-2 fonm-inter font-light leading-normal no-underline align-middle tracking-wide normal-case h-32 text-white"
                       : "mb-2 fonm-inter font-light leading-normal no-underline align-middle tracking-wide normal-case h-32 text-black"
                       
                    }
                  >
                    {item.text}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex flex-col items-center content-center justify-center py-3"
                >
                  <div className="flex flex-row justify-center">
                    {starList.map((index) => {
                      return (
                        <div key={index}>
                          {item.id === "0" || item.id === "2"|| item.id === "4" ? (
                            <img className="" src={starWhite} alt="star"></img>
                          ) : (
                            <img className="w-3/5" src={star} alt="star"></img>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
