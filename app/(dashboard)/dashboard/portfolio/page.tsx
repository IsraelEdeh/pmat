"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  EyeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import CustomButton from "@/components/elements/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { PenLineIcon, Trash2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  const pathname = usePathname();
  const isPortfolioPage = pathname === "/dashboard/portfolio";
  // switch (pathname) {
  //   case pathname.includes("portfolio"):
  //     break;
  //   default:
  //     break;
  return (
    <div className="mt-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="border border-[#E9EAEC] py-4 px-[9.4px] rounded-[4px] text-[#808891] flex items-center space-x-1">
            <FunnelIcon className="w-[14px] h-[14px]" />
            <span className="text-xs font-medium">Filter</span>
          </button>

          <div className="w-[250px] relative">
            <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-[#808891]" />
            <input
              type="text"
              placeholder="Search by tenant name, property, or task"
              className="w-full bg-white border border-[#E9EAEC] rounded-[4px] py-3 pl-[34px] pr-4 text-sm text-[#A9AFB9] focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <CustomButton
          classType="primary"
          type="button"
          className="flex items-center space-x-1 py-4 px-[9.4px] rounded-[8px] "
        >
          <PlusIcon className="w-[14px] h-[14px]" />
          <span className="text-xs">New Property</span>
        </CustomButton>
      </div>

      <div className="space-y-5">
        <div
          style={{
            boxShadow: "0px 4px 8px 0px #C3C3C340"
          }}
          className="mt-6 rounded-[8px] bg-white p-6 border border-[#E9EAEC] "
        >
          <div className="flex items-center justify-between border-b border-b-[#E9EAEC] pb-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/house1.png"
                alt="home"
                width={100}
                height={100}
                className="rounded-[4px]"
              />

              <div className="h-full flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-[#38414C] text-base">
                    YA1 Block of Apartment
                  </h3>
                  <div className="mt-[6px] flex items-center space-x-1">
                    <MapPinIcon className="w-4 h-4 text-[#808891] inline-block" />
                    <span className="text-xs text-[#808891]">
                      {" "}
                      12, Ajaiwe Street, Aja, Lagos
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-[8px] mt-4 ">
                  <button className="py-[4px] px-[8px] bg-[#EFF6FF] rounded-[4px] border border-[#5A84E2] flex items-center space-x-1 text-[#808891] ">
                    <UserGroupIcon className="w-[14px] h-[14px] text-primary" />
                    <span className="text-xs text-primary">12 Units</span>
                  </button>

                  <p className="text-sm font-medium text-[#808891]">
                    10 Occupied
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <h3 className="text-base font-bold text-[#38414C]">
                  Tyrion Lannister
                </h3>
                <p className="text-xs font-medium text-[#808891] ">
                  Estate Surveyor
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-[8px]">
            <div className="flex items-center text-[#808891] text-sm space-x-[12px]">
              <p className="pr-[12px] border-r border-r-[#E9EAEC] font-medium ">
                <span className="font-normal">Owner:</span> Chief Alex Usifo
              </p>
              <p className="font-medium">Added 11 May, 2023</p>
            </div>

            <div className="flex items-center space-x-[23px]">
              <Link href="/dashboard/portfolio/1">
                <button className="hover:scale-110 hover:text-primary transition-all ease-linear cursor-pointer flex items-center space-x-1 text-sm text-[#808891] font-medium">
                  <EyeIcon className="h-[16px] w-[16px]" />
                  <span className="block">View</span>
                </button>
              </Link>

              <button className="hover:scale-110 hover:text-primary transition-all ease-linear cursor-pointer flex items-center space-x-1 text-sm text-[#808891] font-medium">
                <PenLineIcon className="h-[16px] w-[16px]" />
                <span className="block">Edit</span>
              </button>

              <button className="hover:scale-110 hover:text-red-400 transition-all ease-linear cursor-pointer flex items-center space-x-1 text-sm text-[#808891] font-medium">
                <Trash2 className="h-[16px] w-[16px]" />
                <span className="block">Delete</span>
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            boxShadow: "0px 4px 8px 0px #C3C3C340"
          }}
          className="mt-6 rounded-[8px] bg-white p-6 border border-[#E9EAEC] "
        >
          <div className="flex items-center justify-between border-b border-b-[#E9EAEC] pb-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/house1.png"
                alt="home"
                width={100}
                height={100}
                className="rounded-[4px]"
              />

              <div className="h-full flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-[#38414C] text-base">
                    YA1 Block of Apartment
                  </h3>
                  <div className="mt-[6px] flex items-center space-x-1">
                    <MapPinIcon className="w-4 h-4 text-[#808891] inline-block" />
                    <span className="text-xs text-[#808891]">
                      {" "}
                      12, Ajaiwe Street, Aja, Lagos
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-[8px] mt-4 ">
                  <button className="py-[4px] px-[8px] bg-[#EFF6FF] rounded-[4px] border border-[#5A84E2] flex items-center space-x-1 text-[#808891] ">
                    <UserGroupIcon className="w-[14px] h-[14px] text-primary" />
                    <span className="text-xs text-primary">12 Units</span>
                  </button>

                  <p className="text-sm font-medium text-[#808891]">
                    10 Occupied
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <h3 className="text-base font-bold text-[#38414C]">
                  Tyrion Lannister
                </h3>
                <p className="text-xs font-medium text-[#808891] ">
                  Estate Surveyor
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-[8px]">
            <div className="flex items-center text-[#808891] text-sm space-x-[12px]">
              <p className="pr-[12px] border-r border-r-[#E9EAEC] font-medium ">
                <span className="font-normal">Owner:</span> Chief Alex Usifo
              </p>
              <p className="font-medium">Added 11 May, 2023</p>
            </div>

            <div className="flex items-center space-x-[23px]">
              <Link href="/dashboard/portfolio/1">
                <button className="hover:scale-110 hover:text-primary transition-all ease-linear cursor-pointer flex items-center space-x-1 text-sm text-[#808891] font-medium">
                  <EyeIcon className="h-[16px] w-[16px]" />
                  <span className="block">View</span>
                </button>
              </Link>

              <button className="hover:scale-110 hover:text-primary transition-all ease-linear cursor-pointer flex items-center space-x-1 text-sm text-[#808891] font-medium">
                <PenLineIcon className="h-[16px] w-[16px]" />
                <span className="block">Edit</span>
              </button>

              <button className="hover:scale-110 hover:text-red-400 transition-all ease-linear cursor-pointer flex items-center space-x-1 text-sm text-[#808891] font-medium">
                <Trash2 className="h-[16px] w-[16px]" />
                <span className="block">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
