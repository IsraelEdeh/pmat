"use client";

import React from "react";
import { motion } from "motion/react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  type?: any;
  props?: any;
  disabled?: boolean;
  classType?: string;
};

const index = ({
  classType,
  children,
  className,
  onClick,
  type,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${
        classType === "primary" && "border-none bg-primary text-white"
      } 
            ${
              classType === "secondary" &&
              "bg-transparent text-[#808891] border border-[#A9AFB9]"
            } 
            ${classType === "tertiary" && "bg-white text-primary"} 
             hover:bg-opacity-90 cursor-pointer 
            
            ${className}`}
      {...props}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default index;
