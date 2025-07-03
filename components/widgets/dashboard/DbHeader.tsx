import { BellIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import React from "react";

const DbHeader = () => {
  return (
    <nav className="border-b border-b-[#E9EAEC] py-[19px] px-6 flex items-center justify-between">
      <div>
        <h2 className="text-primary text-[20px] font-bold">Hello Victor</h2>
        <p className="text-sm font-medium">
          Overview of your portfolio's performance & tasks
        </p>
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
