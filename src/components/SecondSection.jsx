import React, { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";
import TabsSwitcher from "./TabsSwitcher";

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState("House");

  const filteredProperties = properties.filter(
    (property) => property.type === activeTab
  );

  return (
    <div className="flex m-auto mt-16 flex-col sm:w-11/12 xl:max-w-[1140px] items-center gap-12">
      <div className="flex w-11/12 sm:w-[544px] items-center gap-8">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
          <TabsSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

          <p className="relative self-stretch font-heading-h2 text-[30px] lg:text-[40px] font-bold text-center">
            We make it easy for houses and apartments.
          </p>

          <p className="relative self-stretch font-medium text-colors-base-600 text-center opacity-50">
            Whether it's selling your current home, getting financing, or buying
            a new home, we make it easy&nbsp;&nbsp;and efficient. The best part?
            you'll save a bunch of money and time with our services.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8 overflow-x-auto flex-nowrap px-4 w-full">
        {filteredProperties.map((property) => (
          <div key={property.id} className="min-w-[300px] flex-shrink-0">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
