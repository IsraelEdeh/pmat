import { PlusIcon } from "@heroicons/react/16/solid";
import {
  ArrowRightIcon,
  EllipsisVerticalIcon
} from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  MapPinIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const DbApplicationOverview = () => {
  return (
    <aside className="bg-white border border-[#F2F2F2] rounded-[12px] py-[19px] px-[23px]">
      <div className="pb-3 border-b border-b-[#E9EAEC] flex items-center justify-between">
        <div className="flex items-center text-[#808891] space-x-0.5">
          <UserGroupIcon className=" w-[18px] h-[18px]" />
          <h3 className="text-sm font-medium">Applications</h3>
        </div>

        <div className="flex items-center space-x-1 cursor-pointer">
          <p className="text-primary text-xs font-semibold">View All</p>

          <ArrowRightIcon className="text-primary w-[14px] h-[14px]" />
        </div>
      </div>

      <ul className="mt-[11px] space-y-[14px]">
        <li className="flex items-start space-x-1 pb-2 border-b border-b-[#E9EAEC] w-full">
          <Image src="/avatar.png" alt="ellipse" width={40} height={40} />

          <div>
            <p className="text-primary font-medium text-xs">Aaron Phillips</p>
            <div className="text-[10px] text-[#808891] mt-1 flex items-center space-x-0.5">
              <MapPinIcon className="inline w-[12px] h-[12px]" />
              <span>1 Carlton Cole Lane, Ikoyi</span>
            </div>
          </div>
        </li>

        <li className="flex items-start space-x-1 pb-2 border-b border-b-[#E9EAEC] w-full">
          <Image src="/avatar.png" alt="ellipse" width={40} height={40} />

          <div>
            <p className="text-primary font-medium text-xs">Aaron Phillips</p>
            <div className="text-[10px] text-[#808891] mt-1 flex items-center space-x-0.5">
              <MapPinIcon className="inline w-[12px] h-[12px]" />
              <span>1 Carlton Cole Lane, Ikoyi</span>
            </div>
          </div>
        </li>

        <li className="flex items-start space-x-1 pb-2 border-b border-b-[#E9EAEC] w-full">
          <Image src="/avatar.png" alt="ellipse" width={40} height={40} />

          <div>
            <p className="text-primary font-medium text-xs">Aaron Phillips</p>
            <div className="text-[10px] text-[#808891] mt-1 flex items-center space-x-0.5">
              <MapPinIcon className="inline w-[12px] h-[12px]" />
              <span>1 Carlton Cole Lane, Ikoyi</span>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default DbApplicationOverview;
