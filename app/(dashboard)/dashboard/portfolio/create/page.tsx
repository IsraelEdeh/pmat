"use client";
import React, { useState } from "react";
import CustomInput from "@/components/elements/Input";
import CustomButton from "@/components/elements/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ArrowRight, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PlusIcon } from "@heroicons/react/24/outline";

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

          <p className="col-span-2 border-b border-b-[#E9EAEC] font-medium pb-[24px] text-sm text-[#38414C] ">
            Create a Naming System?{" "}
            <span className="font-normal text-[#808891]"> (optional)</span>
          </p>

          <fieldset className="col-span-1 md:col-span-2">
            <label className="text-sm w-full font-medium text-[#041A57]">
              Property Amenities
            </label>

            <div className="mt-[8px] flex items-center gap-8 flex-wrap">
              <div className="w-fit flex items-center space-x-[24px] border border-[#E9EAEC] rounded-[8px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Parking Space
                </span>
                <Checkbox />
              </div>

              <div className="w-fit flex items-center space-x-[24px] border border-[#E9EAEC] rounded-[8px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Near Gym
                </span>
                <Checkbox />
              </div>

              <div className="w-fit flex items-center space-x-[24px] border border-[#E9EAEC] rounded-[8px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Swimming Pool
                </span>
                <Checkbox />
              </div>

              <div className="w-fit flex items-center space-x-[24px] border border-[#E9EAEC] rounded-[8px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Security
                </span>
                <Checkbox />
              </div>

              <div className="w-fit flex items-center space-x-[24px] border border-[#E9EAEC] rounded-[8px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Sports Park
                </span>
                <Checkbox />
              </div>

              <div className="w-fit flex items-center space-x-[24px] border border-[#E9EAEC] rounded-[8px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Near Cafe
                </span>
                <Checkbox />
              </div>

              <div className="w-fit flex items-center space-x-[24px] border border-[#E9EAEC] rounded-[8px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Playground
                </span>
                <Checkbox />
              </div>
            </div>
          </fieldset>

          <RadioGroup className="col-span-1 md:col-span-2">
            <label className="text-sm w-full font-medium text-[#041A57]">
              Add Tags
            </label>

            <div className="mt-[8px] flex items-center gap-8 flex-wrap">
              <div className="w-fit flex items-center space-x-[8px]                                                                                                                                                                                                                                                                              px] border border-[#E9EAEC] rounded-[20px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  High brow area
                </span>
                <RadioGroupItem value="high-browarea" />
              </div>

              <div className="w-fit flex items-center space-x-[8px]                                                                                                                                                                                                                                                                              px] border border-[#E9EAEC] rounded-[20px] p-3">
                <span className="font-medium text-sm text-[#808891]">
                  Popular
                </span>
                <RadioGroupItem value="high-popular" />
              </div>
            </div>
          </RadioGroup>

          <div className="col-span-1 md:col-span-2 flex items-center justify-end mt-[24px]">
            <CustomButton
              onClick={() => setCurrentStep(2)}
              classType="primary"
              type="button"
              className="flex items-center space-x-1 py-4 px-[9.4px] rounded-[8px] "
            >
              <span className="text-sm">Next</span>
              <ArrowRight className="w-[14px] h-[14px]" />
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
