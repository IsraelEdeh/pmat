import ApplicationOverview from "@/components/widgets/dashboard/DbApplicationOverview";
import RecentPayments from "@/components/widgets/dashboard/RecentPayments";
import ResultsBox from "@/components/widgets/dashboard/ResultsBox";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <ResultsBox />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
        <div className="col-span-1">
          <ApplicationOverview />
        </div>

        <div className="col-span-3">
          <RecentPayments />
        </div>
      </div>
    </div>
  );
};

export default page;
