"use client"
import React, { useState } from 'react';
import Salesoverviewchart from "@/components/landing/sales-overview-chart";
import Yearlybreakup from "@/components/landing/yearly-breakup";
import Monthlyearnings from "@/components/landing/monthly-earnings";
import Recenttransactions from "@/components/landing/recent-transactions";
import Productperformance from "@/components/landing/product-performance";
import Product from "@/components/landing/product";
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
               <Product />
            </div>

        </div>
      </div>
    </>
  );
}
