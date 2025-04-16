import React from "react";
import Tab from "./Tab";

const TabsSwitcher = ({ activeTab, setActiveTab }) => {
  return (
        <div className="flex m-auto w-full sm:w-[352px] p-2 items-center justify-between rounded-lg bg-[#faf9ff] border border-solid border-[#D6D8E5] hover:text-[#6851FF]">
          <Tab
            label="Houses"
            active={activeTab === "House"}
            onClick={() => setActiveTab("House")}
          />
          <Tab
            label="Apartments"
            active={activeTab === "Apartments"}
            onClick={() => setActiveTab("Apartments")}
          />
        </div>    
  );
};

export default TabsSwitcher;
