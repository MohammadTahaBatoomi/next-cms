"use client"
import React, { useState } from 'react';
import Salesoverviewchart from "@/components/landing/sales-overview-chart";
import Yearlybreakup from "@/components/landing/yearly-breakup";
import Monthlyearnings from "@/components/landing/monthly-earnings";
import Recenttransactions from "@/components/landing/recent-transactions";
import Productperformance from "@/components/landing/product-performance";
import Blog from "@/components/landing/blog";
import SidebarShared from '@/components/shared/sidebar-shared';
import HeaderShared from '@/components/shared/header-shared';

export default function Home() {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-screen">
        <SidebarShared isMobileOpen={isMobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
        <div className="flex-1 flex flex-col">
          <HeaderShared onOpenSidebar={() => setMobileSidebarOpen(true)} />

            <div className='max-w-6xl mx-auto'>
            <article className="flex flex-col 2xl:flex-row justify-center items-start max-w-6xl mx-auto gap-4">
  {/* چارت سمت چپ */}
  <div className="w-full 2xl:w-2/3">
    <Salesoverviewchart />
  </div>

  {/* دو کارت سمت راست */}
  <div className="w-full flex flex-col sm:flex-col md:flex-row 2xl:flex-col gap-4 2xl:w-1/3">
    <div className="w-full md:w-1/2">
      <Yearlybreakup />
    </div>
    <div className="w-full md:w-1/2">
      <Monthlyearnings />
    </div>
  </div></article>

            <article className='flex flex-col md:flex-row justify-between items-start gap-6 mb-6'>
  <Recenttransactions />
  <Productperformance />
</article>
               <Blog />
            </div>

        </div>
      </div>
    </>
  );
}
