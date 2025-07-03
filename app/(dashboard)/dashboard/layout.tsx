import DbHeader from "@/components/widgets/dashboard/DbHeader";
import DbSidebar from "@/components/widgets/dashboard/DbSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neptune - Dashboard",
  description: "HR Payroll Streamline"
};

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative ">
      <div className="flex space-x-3 ">
        <DbSidebar />
        <div className="ml-[280px] bg-[#F7f7f7] w-full ">
          <DbHeader />
          <section className="px-6">{children}</section>
        </div>
      </div>
    </main>
  );
}
