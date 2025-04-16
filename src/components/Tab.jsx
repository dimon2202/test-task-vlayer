import React from "react";

const Tab = ({ label, active, onClick }) => {
  return (
    <div
      className={`flex w-[151px] h-[48px] items-center justify-center rounded-md border border-solid] cursor-pointer ${
        active
          ? "bg-colors-base-0 border-[#EAECF4] shadow-[0px_3px_40px_#0E08540D] hover:bg-[#EDEAFF] hover:border-[#D6D8E5] active:border-[#8B8AFF] focus:bg-[rgba(14, 8, 84, 0.05)]"
          : "bg-transparent border-transparent"
      }`}
      onClick={onClick}
    >
      <div
        className={`text-lg text-center ${
          active 
            ? "text-lightPurple font-bold" 
            : "text-[#7B8191] font-medium"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default Tab;
