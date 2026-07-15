import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useState } from "react";

const DashboardLayout = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen overflow-x-hidden">
  <Sidebar
    isSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
  />

 <div className="flex-1 min-w-0 lg:ml-64 overflow-x-hidden">
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </header>

    <main className="p-4 sm:p-6 overflow-x-hidden">
      <Outlet />
    </main>
  </div>
</div>
   
  );
};

export default DashboardLayout;