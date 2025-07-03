import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  CurrencyDollarIcon,
  SquaresPlusIcon,
  WalletIcon
} from "@heroicons/react/24/outline";
import React from "react";
import DbTaskList from "./DbTaskList";

const ResultsBox = () => {
  return (
    <div>
      <div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div className="bg-white py-4 px-5 border border-[#F2F2F2] rounded-[12px] ">
            <div className=" text-[#808891] flex items-center space-x-2">
              <WalletIcon className="w-6 h-6" />
              <p className="text-sm font-medium">Total Income</p>
            </div>

            <h3 className="mt-[20px] mb-[8px] text-primary">N 104,025,000</h3>

            <div className="flex items-center space-x-1.5">
              {/* <ArrowTrendingDownIcon /> */}
              <ArrowTrendingUpIcon className="w-4 h-4 text-secondary" />
              <p className="text-xs text-secondary">23% vs last month</p>
            </div>
          </div>

          <div className="bg-white py-4 px-5 border border-[#F2F2F2] rounded-[12px] ">
            <div className=" text-[#808891] flex items-center space-x-2">
              <CurrencyDollarIcon className="w-6 h-6" />
              <p className="text-sm font-medium">Total Expenses</p>
            </div>

            <h3 className="mt-[20px] mb-[8px] text-primary">N 1,207,700</h3>

            <div className="flex items-center space-x-1.5">
              <ArrowTrendingDownIcon className="w-4 h-4 text-[#FF5249]" />
              {/* <ArrowTrendingUpIcon className="w-4 h-4 text-secondary" /> */}
              <p className="text-xs text-[#FF5249]">23% vs last month</p>
            </div>
          </div>

          <div className="bg-white py-4 px-5 border border-[#F2F2F2] rounded-[12px] ">
            <div className=" text-[#808891] flex items-center space-x-2">
              <ClockIcon className="w-6 h-6" />
              <p className="text-sm font-medium">Overdue Fees</p>
            </div>

            <h3 className="mt-[20px] mb-[8px] text-primary">N 827,700</h3>

            <div className="flex items-center space-x-1.5">
              <ArrowTrendingDownIcon className="w-4 h-4 text-secondary" />
              {/* <ArrowTrendingUpIcon className="w-4 h-4 text-secondary" /> */}
              <p className="text-xs text-secondary">23% vs last month</p>
            </div>
          </div>

          <div>
            <div className="h-full bg-primary flex items-center justify-center rounded-[12px]">
              <div>
                <div className="flex  justify-center">
                  <div className="bg-[#FFFFFF] w-fit rounded-[8px]">
                    <SquaresPlusIcon className="w-8 h-8 p-1" />
                  </div>
                </div>
                <p className="text-white text-sm mt-3">Add New Property</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div className="col-span-3"></div>

          <div className="col-span-1">
            <DbTaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsBox;
