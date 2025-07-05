"use client";

import { BellIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { usePathname } from "next/navigation";

const getHeaderTitle = (pathname: string) => {
  switch (true) {
    case pathname === "/dashboard":
      return "Hello Victor";
    case pathname === "/dashboard/portfolio":
      return "My Portfolio";
      case pathname === "/dashboard/portfolio/":
      return "My Portfolio";
    case pathname === "/dashboard/portfolio/create":
      return "Create Property";
    case pathname.includes("contacts"):
      return "Contacts";
    default:
      return "Hello Victor";
  }
};

const getHeaderSubtitle = (pathname: string) => {
  switch (true) {
    case pathname === "/dashboard":
      return "Overview of your portfolio's performance & tasks";
    case pathname === "/dashboard/portfolio":
      return "List of all your properties";
    case pathname === "/dashboard/portfolio/create":
      return "Overview of your portfolio’s performance & tasks";
    case pathname.includes("contacts"):
      return "Manage your tenants and technicians";
    default:
      return "Overview of your portfolio's performance & tasks";
  }
};

const DbHeader = () => {
  const pathname = usePathname();
  const title = getHeaderTitle(pathname);
  const subtitle = getHeaderSubtitle(pathname);

  return (
    <nav className="border-b border-b-[#E9EAEC] py-[19px] px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {pathname !== "/dashboard" && (
          <ChevronLeftIcon className="w-6 h-6 text-[#808891] cursor-pointer hover:text-primary/90 transition-colors" />
        )}

        <div>
          <h2 className="text-primary text-[20px] font-bold">{title}</h2>
          <p className="text-sm font-medium text-[#808891]">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="cursor-pointer text-[#808891] hover:text-primary/90 transition-colors">
          <BellAlertIcon className="w-5 h-5" />
        </button>

        <div className="border h-[32px]"></div>

        <button className="cursor-pointer text-[#808891] hover:text-primary/90 transition-colors">
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default DbHeader;
