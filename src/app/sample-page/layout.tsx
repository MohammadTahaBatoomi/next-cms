// components/Layout.tsx or app/layout.tsx if using App Router

type LayoutProps = {
    children: React.ReactNode;
  };
  
  export default function Layout({ children }: LayoutProps) {
    return (
      <main>
        {children}
      </main>
    );
  }
  