import { PlusIcon } from "@heroicons/react/16/solid";
import {
  ArrowRightIcon,
  EllipsisVerticalIcon
} from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const DbTaskList = () => {
  return (
    <aside className="bg-white border border-[#F2F2F2] rounded-[12px] py-[19px] px-[23px]">
      <div className="pb-3 border-b border-b-[#E9EAEC] flex items-center justify-between">
        <div className="flex items-center text-[#808891] space-x-0.5">
          <CheckCircleIcon className=" w-[18px] h-[18px]" />
          <h3 className="text-sm font-medium">Task List</h3>
        </div>

        <div className="flex items-center space-x-1 cursor-pointer">
          <p className="text-primary text-xs font-semibold">All Tasks</p>

          <ArrowRightIcon className="text-primary w-[14px] h-[14px]" />
        </div>
      </div>

      <ul className="mt-[11px] space-y-2">
        <li className="flex items-start space-x-1 pb-2 border-b border-b-[#E9EAEC] w-full">
          <Image src="/ellipse.svg" alt="ellipse" width={16} height={16} />

          <div>
            <p className="text-primary font-medium text-xs">
              Send copy of agreement to new ten...
            </p>
            <p className="text-[10px] text-[#808891] mt-1">Today 12:05</p>
          </div>
        </li>

        <li className="flex items-start space-x-1 pb-2 border-b border-b-[#E9EAEC] w-full">
          <Image src="/ellipse.svg" alt="ellipse" width={16} height={16} />

          <div>
            <p className="text-primary font-medium text-xs">
              Send copy of agreement to new ten...
            </p>
            <p className="text-[10px] text-[#808891] mt-1">Today 12:05</p>
          </div>
        </li>

        <li className="flex items-start space-x-1 pb-2 border-b border-b-[#E9EAEC] w-full">
          <Image src="/ellipse.svg" alt="ellipse" width={16} height={16} />

          <div>
            <p className="text-primary font-medium text-xs">
              Send copy of agreement to new ten...
            </p>
            <p className="text-[10px] text-[#808891] mt-1">Today 12:05</p>
          </div>
        </li>
      </ul>

      <div className="mt-[9px] flex justify-center">
        <p className="cursor-pointer w-fit flex items-center text-center space-x-1 text-primary">
          <PlusIcon className="w-[12px] h-[12px]" />
          <span className="text-xs">New Task</span>
        </p>
      </div>
    </aside>
  );
};

export default DbTaskList;
