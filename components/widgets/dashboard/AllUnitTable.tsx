import { ClockIcon } from "@heroicons/react/24/outline";
import { House, Store } from "lucide-react";
import Image from "next/image";
import React from "react";

const AllUnitTable = () => {
  const getCategory = (category: string) => {
    switch (category) {
      case "residential":
        return (
          <div className="w-fit text-xs flex items-center space-x-1 text-[#E17415] bg-[#FFF7ED] border border-[#E17415] px-[8px] py-[4px] rounded-[4px]">
            <House className="w-3 h-3" />
            <span>Residential</span>
          </div>
        );
      case "commercial":
        return (
          <div className="w-fit text-xs flex items-center space-x-1 text-[#38848A] bg-[#EFFEFF] border border-[#38848A] px-[8px] py-[4px] rounded-[4px]">
            <Store className="w-3 h-3" />
            <span>Commercial</span>
          </div>
        );
      default:
        return "Hello Victor";
    }
  };

  return (
    <div>
      <div className="bg-white rounded-[12px] border border-[#F2F2F2]">
        <table className="w-full">
          <thead className="">
            <tr className=" w-full">
              <th className="text-left p-4 uppercase text-xs font-semibold ">
                Unit No.
              </th>

              <th className="text-left p-4 uppercase text-xs font-semibold ">
                Occupant
              </th>

              <th className="text-left p-4 uppercase text-xs font-semibold ">
                Category
              </th>

              <th className="text-left p-4 uppercase text-xs font-semibold ">
                Amount Due
              </th>

              <th className="text-left p-4 uppercase text-xs font-semibold ">
                Last Payment
              </th>

              <th className="text-left p-4 uppercase text-xs font-semibold ">
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className="text-[#1A1A1A]">
            <tr className="border-t border-t-[#E5E7EB] w-full border-b border-b-[#D9D9D9]">
              <td className="text-left p-4 text-sm font-normal ">1A</td>

              <td className="text-left p-4 text-sm font-normal ">
                <div className="w-fit flex items-center space-x-2">
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#38414C]">
                      Jennifer Smart
                    </h3>
                    <p className="text-xs font-medium text-[#808891] ">
                      08031234567
                    </p>
                  </div>
                </div>
              </td>

              <td className="text-left p-4 text-sm font-normal ">
                {getCategory("residential")}
              </td>

              <td className="text-left p-4 text-xs font-normal text-[#7C7C7C] ">
                N1,200,000
              </td>

              <td className="text-left p-4 text-xs font-normal text-[#7C7C7C]">
                12/05/2024
              </td>

              <td className="text-left p-4 text-sm font-normal ">
                <div className="text-xs flex items-center w-fit space-x-1 text-[#FF5249] bg-[#FFF8F7] border border-[#FF5249] px-[8px] py-[4px] rounded-[4px]">
                  <ClockIcon className="w-3 h-3" />
                  <span>3 months past due</span>
                </div>
              </td>
            </tr>

            <tr className="border-t border-t-[#E5E7EB] w-full border-b border-b-[#D9D9D9]">
              <td className="text-left p-4 text-sm font-normal ">1A</td>

              <td className="text-left p-4 text-sm font-normal ">
                <div className="w-fit flex items-center space-x-2">
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#38414C]">
                      Jennifer Smart
                    </h3>
                    <p className="text-xs font-medium text-[#808891] ">
                      08031234567
                    </p>
                  </div>
                </div>
              </td>

              <td className="text-left p-4 text-sm font-normal ">
                {getCategory("commercial")}
              </td>

              <td className="text-left p-4 text-xs font-normal text-[#7C7C7C] ">
                N1,200,000
              </td>

              <td className="text-left p-4 text-xs font-normal text-[#7C7C7C]">
                12/05/2024
              </td>

              <td className="text-left p-4 text-sm font-normal ">
                <div className="text-xs flex items-center w-fit space-x-1 text-[#FF5249] bg-[#FFF8F7] border border-[#FF5249] px-[8px] py-[4px] rounded-[4px]">
                  <ClockIcon className="w-3 h-3" />
                  <span>3 months past due</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUnitTable;
