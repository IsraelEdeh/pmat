"use client";

import {
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PencilSquareIcon
} from "@heroicons/react/24/outline";
import {
  ExternalLink,
  House,
  LayoutDashboard,
  List,
  PlusIcon,
  Ticket,
  Users
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "@/components/elements/Button";
import AllUnitTable from "@/components/widgets/dashboard/AllUnitTable";
import OverDueTable from "@/components/widgets/dashboard/OverDueTable";
import Link from "next/link";

const page = () => {
  const [unitType, setUnitType] = useState("all");
  return (
    <div className="mt-8">
      <div className="grid grid-cols-12 gap-x-[30px]">
        <div className="col-span-3">
          <Image
            src="/portfolio1.png"
            alt="Portfolio Image"
            width={276}
            height={283}
            className="rounded-[4px] w-full h-auto"
          />
        </div>

        <div className="col-span-9 flex items-start justify-between">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="mt-[6px] border-b border-b-[#A9AFB9] pb-[2px] font-bold text-base flex items-center space-x-1">
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="w-3 h-3  text-[#38414C] inline-block" />
                  <span className="text-[#38414C]">
                    {" "}
                    1 Ocean Drive Close, Eko Atlantic, Victoria Island, Lagos
                  </span>
                </div>
              </div>

              <table className="mt-[18px] min-w-full border border-[#E9EAEC] ">
                <tbody className="text-[#808891]">
                  <tr>
                    <td className="text-sm border border-[#E9EAEC] px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <LayoutDashboard className="w-3 h-3" />
                        <span>12 Units</span>
                      </div>
                    </td>
                    <td className="text-sm border border-[#E9EAEC] px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <List className="w-3 h-3" />
                        <span>10 Listed</span>
                      </div>
                    </td>
                    <td className="text-sm border border-[#E9EAEC] px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>9 Occupied</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm border border-[#E9EAEC] px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <Ticket className="w-3 h-3" />
                        <span>18 Tickets</span>
                      </div>
                    </td>
                    <td className="text-sm border border-[#E9EAEC] px-4 py-2">
                      <div></div>
                    </td>
                    <td className="border border-[#E9EAEC] px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center space-x-2">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
              <div>
                <h3 className="text-sm font-bold text-primary">
                  Tyrion Lannister
                </h3>
                <p className="text-xs font-medium text-[#808891] ">
                  Estate Surveyor
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <CustomButton
              classType="secondary"
              type="button"
              className="font-medium flex items-center space-x-1 py-4 px-[9.4px] rounded-[8px] "
            >
              <PencilSquareIcon className="w-[14px] h-[14px]" />
              <span className="text-xs">Edit Property</span>
            </CustomButton>

            <Link href="/dashboard/portfolio/create">
              <CustomButton
                classType="primary"
                type="button"
                className="flex items-center space-x-1 py-4 px-[9.4px] rounded-[8px] "
              >
                <PlusIcon className="w-[14px] h-[14px]" />
                <span className="text-xs">New Property</span>
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[24px] bg-white rounded-[8px] py-5 px-6">
        <div className="flex items-center justify-between">
          <div className="bg-[#F3F4F6] rounded-[8px] p-[8px] flex items-center space-x-4 w-fit">
            <div
              onClick={() => setUnitType("all")}
              className={`${
                unitType === "all"
                  ? "bg-[#FFFFFF] text-[#38414C]"
                  : "text-[#A9AFB9] bg-transparent"
              } transition-all ease-in delay-75 py-[4px] px-[10px]  rounded-[4px] text-sm flex items-center space-x-1`}
            >
              <House className="w-3 h-3" />
              <span>All Units</span>
            </div>

            <div
              onClick={() => setUnitType("overdue")}
              className={`${
                unitType === "overdue"
                  ? "bg-[#FFFFFF] text-[#38414C]"
                  : "text-[#A9AFB9] bg-transparent"
              } transition-all ease-in delay-75 py-[4px] px-[10px] rounded-[4px] text-sm flex items-center space-x-1`}
            >
              <ClockIcon className="w-3 h-3" />
              <span>Overdue</span>
            </div>
          </div>

          <div className="w-[250px] relative">
            <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-[#808891]" />
            <input
              type="text"
              placeholder="Search by tenant name, property, or task"
              className="w-full bg-white border border-[#E9EAEC] rounded-[4px] py-3 pl-[34px] pr-4 text-sm text-[#A9AFB9] focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="mt-[24px] ">
          {unitType === "all" ? <AllUnitTable /> : <OverDueTable />}
        </div>
      </div>
    </div>
  );
};

export default page;
