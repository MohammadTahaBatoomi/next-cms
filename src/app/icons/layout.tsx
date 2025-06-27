// components/Layout.tsx or app/layout.tsx if using App Router

import SidebarShared from '@/components/shared/sidebar-shared';
import HeaderShared from '@/components/shared/header-shared';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
      <div className="flex min-h-screen">
        <SidebarShared />
        <div className="flex-1 flex flex-col">
          <HeaderShared />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    );
}
  