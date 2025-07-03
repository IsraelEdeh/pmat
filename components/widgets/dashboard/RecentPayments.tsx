import { ArrowRightIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { color } from "motion";
import React from "react";

const FeeType = [
  { id: 1, name: "Rent", color: "#FBBF24" },
  { id: 2, name: "Service Charge" },
  { id: 3, name: "Utility Bill" },
  { id: 4, name: "Maintenance Fee" }
];

const RecentPayments = () => {
  return (
    <div className="bg-white p-4 rounded-[12px] border border-[#F2F2F2]">
      <div className="pb-3 border-b border-b-[#E9EAEC] flex items-center justify-between">
        <div className="flex items-center text-[#808891] space-x-0.5">
          <BanknotesIcon className=" w-[18px] h-[18px]" />
          <h3 className="text-sm font-medium">Recent Payments</h3>
        </div>

        <div className="flex items-center space-x-1 cursor-pointer">
          <p className="text-primary text-xs font-semibold">View All</p>

          <ArrowRightIcon className="text-primary w-[14px] h-[14px]" />
        </div>
      </div>

      <table className="w-full">
        <thead className="">
          <tr className=" w-full">
            <th className="text-left p-4 uppercase text-xs font-semibold ">
              S/N
            </th>

            <th className="text-left p-4 uppercase text-xs font-semibold ">
              Tenant
            </th>

            <th className="text-left p-4 uppercase text-xs font-semibold ">
              Fee Type
            </th>

            <th className="text-left p-4 uppercase text-xs font-semibold ">
              Amount
            </th>

            <th className="text-left p-4 uppercase text-xs font-semibold ">
              Paid On
            </th>
          </tr>
        </thead>

        <tbody className="text-[#1A1A1A]">
          <tr className="border-t border-t-[#E5E7EB] w-full border-b border-b-[#D9D9D9]">
            <td className="text-left p-4 text-sm font-normal ">1</td>

            <td className="text-left p-4 text-sm font-normal ">
              Josephine Adaora
            </td>

            <td className="text-left p-4 text-sm font-normal ">
              <span className="bg-[#EFF6FF] rounded-[20px] text-[#5A84E2] border border-[#5A84E2] py-[4px] px-[12px] ">
                Rent
              </span>
            </td>

            <td className="text-left p-4 text-xs font-normal text-[#7C7C7C] ">N1,200,000</td>

            <td className="text-left p-4 text-xs font-normal text-[#7C7C7C]">12/05/2024</td>
          </tr>

          <tr className="border-t border-t-[#E5E7EB] w-full border-b border-b-[#D9D9D9]">
            <td className="text-left p-4 text-sm font-normal ">2</td>

            <td className="text-left p-4 text-sm font-normal ">
              Josephine Adaora
            </td>

            <td className="text-left p-4 text-sm font-normal ">
              <span className="bg-[#EFF6FF] rounded-[20px] text-[#5A84E2] border border-[#5A84E2] py-[4px] px-[12px] ">
                Rent
              </span>
            </td>

            <td className="text-left p-4 text-xs font-normal text-[#7C7C7C] ">N1,200,000</td>

            <td className="text-left p-4 text-xs font-normal text-[#7C7C7C]">12/05/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentPayments;
