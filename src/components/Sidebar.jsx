import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Stethoscope,
  Users,
  CalendarDays,
  Building2,
  CreditCard,
  ChartColumn,
  Settings,
  UserCircle,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-r-lg transition-all duration-300 ${
      isActive
        ? "bg-blue-700 border-l-4 border-blue-400 text-white hover:text-slate-800"
        : "text-gray-300 hover:bg-slate-800 hover:text-blue-800"
    }`;

  return (
    
     <aside
  className={`
    fixed 
    top-0 left-0
    w-64 h-screen
    bg-slate-800 text-white
    p-6 pt-24
    overflow-y-auto hide-scrollbar
    transform transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
    z-50
  `}
>
     
    <div className="flex flex-col h-full  ">
      
        <button className="lg:hidden  relative" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
          <X className="absolute -top-20 right-0 text-gray-400"/> 
        </button>



      
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">
        🏥 Hospital 
      </h1>

      {/* Dashboard */}
      <ul>
        <li>
          <NavLink to="/" className={menuClass}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
        </li>
      </ul>

      <hr className="border-slate-700 my-6" />

      {/* Management */}
      <div className="mt-6">
        <h3 className="text-sm uppercase text-gray-400 mb-4">
          Management
        </h3>

        <ul className="space-y-1">
          <li>
            <NavLink to="/doctors" className={menuClass}>
              <Stethoscope size={20} />
              <span>Doctors</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/patients" className={menuClass}>
              <Users size={20} />
              <span>Patients</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/appointments" className={menuClass}>
              <CalendarDays size={20} />
              <span>Appointments</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/departments" className={menuClass}>
              <Building2 size={20} />
              <span>Departments</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <hr className="border-slate-700 my-6" />

      {/* Finance */}
      <div className="mt-6">
        <h3 className="text-sm uppercase text-gray-400 mb-4">
          Finance
        </h3>

        <ul className="space-y-1">
          <li>
            <NavLink to="/billing" className={menuClass}>
              <CreditCard size={20} />
              <span>Billing</span>
            </NavLink>
          </li>

        </ul>
      </div>

      {/* System */}
     
    </div>
    
     </aside>
  );
};

export default Sidebar;