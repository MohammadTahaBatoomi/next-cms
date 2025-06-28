"use client";

// components/Layout.tsx or app/layout.tsx if using App Router

import SidebarShared from '@/components/shared/sidebar-shared';
import HeaderShared from '@/components/shared/header-shared';
import React, { useState } from 'react';

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
      <div className="flex min-h-screen">
        <SidebarShared isMobileOpen={isMobileSidebarOpen} onClose={handleCloseSidebar} />
        <div className="flex-1 flex flex-col">
          <HeaderShared onOpenSidebar={handleOpenSidebar} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    );
}
  