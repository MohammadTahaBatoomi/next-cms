"use client";

import SidebarShared from "@/components/shared/sidebar-shared";
import HeaderShared from "@/components/shared/header-shared";
import React, { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setMobileSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Sidebar */}
      <SidebarShared
        isMobileOpen={isMobileSidebarOpen}
        onClose={handleCloseSidebar}
      />

      {/* Layout wrapper for header and main */}
      <div className="xl:ml-64">
        {/* Fixed Header */}
        <HeaderShared onOpenSidebar={handleOpenSidebar} />

        {/* Content with padding top to prevent overlap */}
        <main className="pt-16 px-4 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
