"use client";
import React, { useState } from "react";
import Salesoverviewchart from "@/components/landing/sales-overview-chart";
import Yearlybreakup from "@/components/landing/yearly-breakup";
import Monthlyearnings from "@/components/landing/monthly-earnings";
import Recenttransactions from "@/components/landing/recent-transactions";
import Productperformance from "@/components/landing/product-performance";
import Blog from "@/components/landing/blog";
import SidebarShared from "@/components/shared/sidebar-shared";
import HeaderShared from "@/components/shared/header-shared";

export default function Home() {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed Sidebar */}
      <SidebarShared
        isMobileOpen={isMobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Header + Main Wrapper */}
      <div className="lg:ml-64">
        {/* Fixed Header */}
        <HeaderShared onOpenSidebar={() => setMobileSidebarOpen(true)} />

        {/* Page Content */}
        <main className="pt-16 max-w-6xl mx-auto w-full">
          {/* Section 1 */}
          <article className="flex flex-col 2xl:flex-row justify-center items-start my-6 mx-6 xl:mx-2">
            <div className="w-full mr-6">
              <Salesoverviewchart />
            </div>
            <div className="w-full flex flex-col sm:flex-col md:flex-row 2xl:flex-col gap-6 2xl:w-1/3">
              <div className="w-full">
                <Yearlybreakup />
              </div>
              <div className="w-full">
                <Monthlyearnings />
              </div>
            </div>
          </article>

          {/* Section 2 */}
          {/* Section 2 */}
          <article className="flex flex-col xl:flex-row justify-between items-stretch gap-6 mb-6 mx-1.5">
            <div className="w-full xl:w-1/3 ">
              <Recenttransactions />
            </div>
            <div className="w-full xl:w-2/3">
              <Productperformance />
            </div>
          </article>

          {/* Section 3 */}
          <article className="mx-1 mb-6">
            <Blog />
          </article>
        </main>
      </div>
    </div>
  );
}
