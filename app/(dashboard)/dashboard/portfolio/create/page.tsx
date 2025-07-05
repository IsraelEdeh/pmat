"use client";
import React, { useState } from "react";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="mt-6">
      <div className="flex items-center justify-center mb-[18px]">
        <div className="flex items-center">
          <button
            onClick={() => setCurrentStep(1)}
            className={`${
              currentStep === 1
                ? "border border-primary text-[#041A57]"
                : "bg-white border border-[#E9EAEC]"
            } py-[10px] px-[12px] rounded-[8px] flex items-center space-x-2 w-fit`}
          >
            <span
              className={`${
                currentStep === 1 ? "border border-[#5A84E2] " : ""
              }  rounded-[4px] text-xs py-[1px] px-[7px]`}
            >
              1
            </span>
            <span className="text-sm">Basic Details</span>
          </button>
          <div
            className={`${
              currentStep === 2 ? "bg-primary" : "bg-[#E9EAEC]"
            } w-[80px] border `}
          ></div>
          <button
            onClick={() => setCurrentStep(2)}
            className={`${
              currentStep === 2
                ? "border border-primary text-[#041A57]"
                : "bg-white border border-[#E9EAEC] text-[#808891]"
            } py-[10px] px-[12px] rounded-[8px] flex items-center space-x-2 w-fit`}
          >
            <span
              className={`${
                currentStep === 2 ? "border border-[#5A84E2] " : "border border-[#A9AFB9]"
              }  rounded-[4px] text-xs py-[1px] px-[7px]`}
            >
              2
            </span>
            <span className="text-sm">Location & Personnel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
