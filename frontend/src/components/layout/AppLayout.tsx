import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <main className="ml-64 min-h-screen p-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;