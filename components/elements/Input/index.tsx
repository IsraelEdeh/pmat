"use client";
import { Input } from "@/components/ui/input";
import { EyeIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface CustomInput {
  label?: string;
  isPhoneInput?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
  requiredIcon?: boolean;
}

const index = ({
  label,
  isPhoneInput,
  type,
  placeholder,
  className,
  requiredIcon,
  ...rest
}: CustomInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleViewPassword = () => {
    setShowPassword((e) => !e);
  };

  return (
    <div>
      <div className="flex flex-col space-y-1">
        <label className="text-sm w-full font-medium text-[#38414C]">
          {label}
        </label>
        <div className="relative flex w-full flex-col">
          <>
            <Input
              type={showPassword ? "text" : type}
              className={`relative py-[7px] px-4 rounded-[4px] border border-[#E9EAEC]  placeholder:text-[#A9AFB9] ${className}`}
              placeholder={placeholder}
              {...rest}
            />

            {type === "password" && (
              <EyeIcon
                onClick={handleViewPassword}
                className="text-[#999DA3] cursor-pointer w-6 h-6 absolute right-3 top-3"
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default index;
