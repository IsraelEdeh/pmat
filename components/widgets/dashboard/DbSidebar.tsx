"use client";

import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CubeIcon, MapIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

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
    icon: <CubeIcon className="w-4 h-4" />,
    subLinkExists: true,
    subLinks: [
      {
        name: "Listings",
        href: "/dashboard/leasing/listing",
        icon: <CubeIcon className="w-4 h-4" />
      },
      {
        name: "Applications",
        href: "/dashboard/leasing/applications",
        icon: <CubeIcon className="w-4 h-4" />
      },
      {
        name: "Forms",
        href: "/dashboard/leasing/forms",
        icon: <CubeIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: "Contacts",
    href: "/dashboard/contacts",
    icon: <CubeIcon className="w-4 h-4" />,
    subLinkExists: true,
    subLinks: [
      {
        name: "Tenants",
        href: "/dashboard/contacts/tenants",
        icon: <CubeIcon className="w-4 h-4" />
      },
      {
        name: "Tehnicians",
        href: "/dashboard/contacts/technicians",
        icon: <CubeIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: "Accounting",
    href: "/dashboard/accounting",
    icon: <CubeIcon className="w-4 h-4" />,
    subLinkExists: true,
    subLinks: [
      {
        name: "Overview",
        href: "/dashboard/accounting/overview",
        icon: <CubeIcon className="w-4 h-4" />
      },
      {
        name: "Tenants Accounts",
        href: "/dashboard/accounting/tenants-accounts",
        icon: <CubeIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: "Maintenance",
    href: "/dashboard/accounting",
    icon: <CubeIcon className="w-4 h-4" />
  },
  {
    name: "Schedule",
    href: "/dashboard/schedule",
    icon: <CubeIcon className="w-4 h-4" />,
    subLinkExists: true,
    subLinks: [
      {
        name: "Calendar",
        href: "/dashboard/schedule/calendar",
        icon: <CubeIcon className="w-4 h-4" />
      },
      {
        name: "Applications",
        href: "/dashboard/schedule/applications",
        icon: <CubeIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: <CubeIcon className="w-4 h-4" />,
    subLinkExists: true,
    subLinks: [
      {
        name: "All files",
        href: "/dashboard/documents/all-files",
        icon: <CubeIcon className="w-4 h-4" />
      },
      {
        name: "Templates",
        href: "/dashboard/documents/templates",
        icon: <CubeIcon className="w-4 h-4" />
      }
    ]
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: <CubeIcon className="w-4 h-4" />
  }
];

const DbSidebar = () => {
  const pathname = usePathname();
  const [openLinks, setOpenLinks] = useState<{ [key: number]: boolean }>({});

  const toggleLink = (index: number) => {
    setOpenLinks((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
          {SidebarLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isOpen = openLinks[index];
            return (
              <li key={link.name}>
                <div className="flex items-center justify-between ">
                  <Link
                    href={link.href}
                    className={`p-2.5 font-medium transition-all ease-linear delay-75 text-base flex items-center space-x-2.5 rounded-[8px]
                    ${
                      isActive
                        ? "bg-[#F3F4F6] text-primary font-bold"
                        : "bg-transparent text-[#808891] hover:text-primary hover:font-bold hover:bg-[#F3F4F6]"
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                  {link.subLinkExists && (
                    <button onClick={() => toggleLink(index)}>
                      {isOpen ? (
                        <ChevronDownIcon className="border  w-5 h-5 text-[#808891] cursor-pointer hover:text-primary transition-all ease-linear delay-75" />
                      ) : (
                        <ChevronUpIcon className="border  w-5 h-5 text-[#808891] cursor-pointer hover:text-primary transition-all ease-linear delay-75" />
                      )}
                    </button>
                  )}
                </div>

                {isOpen && link.subLinkExists && (
                  <ul className="relative ml-5 pl-4 space-y-2 mt-2 border-l border-l-[#E9EAEC]">
                    {link.subLinks.map((subLink) => (
                      <li className="hover:border-l-2 pl-4  border-primary hover:z-10" key={subLink.name}>
                        <Link
                          href={subLink.href}
                          className="text-sm text-[#808891] hover:text-primary"
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
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
