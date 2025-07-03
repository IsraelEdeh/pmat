import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CubeIcon, MapIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "My Portfolio",
    href: "/dashboard/portfolio",
    icon: <MapIcon className="w-4 h-4" />
  },
  {
    name: "Leasing",
    href: "/dashboard/leasing",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "Contacts",
    href: "/dashboard/contacts",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "Accounting",
    href: "/logout",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "Maintenance",
    href: "/dashboard/accounting",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "Schedule",
    href: "/dashboard/schedule",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: <CubeIcon className="w-4 h-4" />
  }
];

const DbSidebar = () => {
  return (
    <aside
      id="dbSidbar"
      className="w-[280px] py-[23px] px-[24px] flex justify-between flex-col fixed h-screen overflow-y-auto bg-white p-4"
    >
      <div>
        <div className="border-b border-b-[#A9AFB9] border-dashed pb-[26px] block">
          <Image
            src="/DbLogo.svg"
            alt="Logo"
            width={120}
            height={38}
            className=" "
          />
        </div>

        <ul className="space-y-3 mt-[23px]">
          {SidebarLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="p-2.5 hover:font-bold font-medium transition-all ease-linear delay-75 text-base flex items-center space-x-2.5 bg-transparent hover:bg-[#F3F4F6] rounded-[8px] text-[#808891] hover:text-primary"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 p-[14px]: flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div>
            <h3 className="text-base font-bold text-[#38414C]">Julia Nze</h3>
            <p className="text-xs font-medium text-[#808891] ">Lagos Branch</p>
          </div>
        </div>

        <ChevronUpDownIcon className="w-5 h-5 text-[#808891] cursor-pointer hover:text-primary transition-all ease-linear delay-75" />
      </div>
    </aside>
  );
};

export default DbSidebar;
