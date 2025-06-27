"use client"
import React, { useState } from 'react';
import Salesoverviewchart from "@/components/sales-overview-chart";
import Yearlybreakup from "@/components/yearly-breakup";
import Monthlyearnings from "@/components/monthly-earnings";
import Recenttransactions from "@/components/recent-transactions";
import Productperformance from "@/components/product-performance";
import Product from "@/components/product";
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
      <article>
        <Salesoverviewchart />
        <Yearlybreakup />
        <Monthlyearnings />
      </article>
      <article>
        <Recenttransactions />
        <Productperformance />
      </article>
      <Product />
        </div>
      </div>
    </>
  );
}
