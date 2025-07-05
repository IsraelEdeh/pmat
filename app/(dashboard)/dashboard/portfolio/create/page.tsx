"use client";
import React, { useState } from "react";
import CustomInput from "@/components/elements/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="mt-6">
      <div className="flex items-center justify-center mb-[18px]">
        <div className="flex items-center">
          <button
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
            className={`${
              currentStep === 2
                ? "border border-primary text-[#041A57]"
                : "bg-white border border-[#E9EAEC] text-[#808891]"
            } py-[10px] px-[12px] rounded-[8px] flex items-center space-x-2 w-fit`}
          >
            <span
              className={`${
                currentStep === 2
                  ? "border border-[#5A84E2] "
                  : "border border-[#A9AFB9]"
              }  rounded-[4px] text-xs py-[1px] px-[7px]`}
            >
              2
            </span>
            <span className="text-sm">Location & Personnel</span>
          </button>
          <div
            className={`${
              currentStep === 3 ? "bg-primary" : "bg-[#E9EAEC]"
            } w-[80px] border `}
          ></div>
          <button
            className={`${
              currentStep === 3
                ? "border border-primary text-[#041A57]"
                : "bg-white border border-[#E9EAEC] text-[#808891]"
            } py-[10px] px-[12px] rounded-[8px] flex items-center space-x-2 w-fit`}
          >
            <span
              className={`${
                currentStep === 3
                  ? "border border-[#5A84E2] "
                  : "border border-[#A9AFB9]"
              }  rounded-[4px] text-xs py-[1px] px-[7px]`}
            >
              3
            </span>
            <span className="text-sm">Units</span>
          </button>
          <div
            className={`${
              currentStep === 4 ? "bg-primary" : "bg-[#E9EAEC]"
            } w-[80px] border `}
          ></div>
          <button
            className={`${
              currentStep === 4
                ? "border border-primary text-[#041A57]"
                : "bg-white border border-[#E9EAEC] text-[#808891]"
            } py-[10px] px-[12px] rounded-[8px] flex items-center space-x-2 w-fit`}
          >
            <span
              className={`${
                currentStep === 4
                  ? "border border-[#5A84E2] "
                  : "border border-[#A9AFB9]"
              }  rounded-[4px] text-xs py-[1px] px-[7px]`}
            >
              4
            </span>
            <span className="text-sm">Review</span>
          </button>
        </div>
      </div>

      <div className="bg-white py-[43px] px-[58px]">
        <p className="text-xs text-black ">Step 01</p>
        <p className="border-b border-b-[#E9EAEC] pb-[24px] font-bold text-[20px] text-[#041A57] mt-[4px]">
          Basic Details
        </p>

        <form className="gap-6 mt-[24px] grid grid-cols-1 md:grid-cols-2">
          <CustomInput
            type="text"
            label="Property Title"
            placeholder="Enter title of property"
          />

          <div>
            <label className="text-sm w-full font-medium text-[#38414C]">
              Lease Type
            </label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm w-full font-medium text-[#38414C]">
              Property Manager
            </label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Manager" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">John Doe</SelectItem>
                <SelectItem value="buy">Jane Doe</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm w-full font-medium text-[#38414C]">
              Property Manager
            </label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Manager" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">John Doe</SelectItem>
                <SelectItem value="buy">Jane Doe</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm w-full font-medium text-[#38414C]">
              Region
            </label>

            <textarea
              cols={4}
              rows={4}
              className="mt-1 w-full py-[7px] px-4 rounded-[4px] border border-[#E9EAEC]  placeholder:text-[#A9AFB9]"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
