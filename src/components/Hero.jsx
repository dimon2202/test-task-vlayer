import React from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row h-full mx-auto">
      <div className="container flex flex-col items-center w-full px-6 pt-16 pb-8 mx-auto space-y-10 text-center md:px-14 xl:items-start bg-lightGray xl:pt-24 xl:text-left xl:w-1/2 xl:p-24 xl:pl-16 2xl:pl-25">
        <motion.h2
          className="text-4xl font-bold sm:text-5xl xl:text-7xl text-darkBlue"
          initial={{ opacity: 0, x: -50, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Buy, rent, or sell your property easily
        </motion.h2>

        <p className="px-1 text-lg font-semibold sm:text-xl text-darkBlue sm:px-9 xl:pl-0 xl:pr-12">
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </p>
        <div className="flex flex-col-reverse xl:space-y-4">
          <div className="flex justify-between pt-4 mx-2 sm:mx-12 space-x-4 md:space-x-14 xl:mx-0 xl:justify-start">
            <div className="w-28 sm:w-32 pl-6 text-left border-l-4 border-lighterPurple">
              <h4 className="text-4xl font-bold text-lightPurple">50k+</h4>
              <p className="text-gray-600">renters</p>
            </div>
            <div className="relative w-32 pl-6 text-left border-l-4 border-lighterPurple">
              <h4 className="text-4xl font-bold text-lightPurple">10k+</h4>
              <p className="text-gray-600">properties</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3 mt-5 md:mt-0 md:mx-0 w-11/12 md:w-1/2 backgroundImage">
        <div className="relative w-full aspect-[16/9]">
          <img
            src="/Line.svg"
            alt="logo"
            className="absolute left-[58%] top-[35%] w-[35%]" // ширину теж краще в %
          />
          <img
            src="/Location 1.svg"
            alt="logo"
            className="absolute left-[62%] top-[110%] w-[7%]"
          />
          <img
            src="/Location 2.svg"
            alt="logo"
            className="absolute left-[56%] top-[25%] w-[7%]"
          />
        </div>
        <div className="relative m-auto flex md:-ml-10 mb-15 md:mb-30 scale-70 sm:scale-85 lg:scale-100">
          <PropertyCard property={properties[5]} className={"hidden"} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
