"use client";

import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "1",
    income: 4000,
    expenses: 2400
  },
  {
    name: "2",
    income: 3000,
    expenses: 1398
  },
  {
    name: "3",
    income: 2000,
    expenses: 9800
  },
  {
    name: "4",
    income: 2780,
    expenses: 3908
  },
  {
    name: "5",
    income: 1890,
    expenses: 4800
  },
  {
    name: "6",
    income: 2390,
    expenses: 3800
  },
  {
    name: "7",
    income: 3490,
    expenses: 4300
  },
  {
    name: "8",
    income: 3490,
    expenses: 4300
  },
  {
    name: "9",
    income: 3490,
    expenses: 4300
  },
  {
    name: "10",
    income: 3490,
    expenses: 4300
  }
];

const DbGraphOverview = () => {
  return (
    <div className="bg-white py-[19px] px-[23px] rounded-[12px] border border-[#F2F2F2]">
      <div>
        <div className="flex items-center text-[#808891] space-x-0.5">
          <ChartBarSquareIcon className=" w-[17px] h-[17px]" />
          <h3 className="text-sm font-medium">Income vs Expenses</h3>
        </div>

        <div className="w-full h-full pt-[32px]">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              width={20}
              height={300}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              {/* <Legend /> */}
              <Bar dataKey="income" width={10} fill="#5A84E2" radius={[10, 10, 0, 0]} />
              <Bar dataKey="expenses" width={10} fill="#FF8882" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DbGraphOverview;
