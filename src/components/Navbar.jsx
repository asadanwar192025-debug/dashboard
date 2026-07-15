import { Search, Bell, Moon,Sun, UserCircle, ChevronDown, Menu, LogIn, LogOut,Settings2,} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const { dark, setDark } = useTheme();

const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="h-16 h-full flex justify-between items-center px-6 ">

      {/* Left */}
      <div className="flex items-center gap-3">
        <button
  className="lg:hidden "
  onClick={() => setIsSidebarOpen(true)}
>
  <Menu className="dark:text-gray-300"/>
</button>

        <div className=" md:flex hidden   items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-72 dark:text-white placeholder:text-gray-400"
          />
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5 ">

        <button className="hover:text-blue-600 dark:text-gray-300 transition" onClick={() => setDark(!dark)}>
   {dark ? <Sun className="w-4 h-4 md:w-6 md:h-6"  /> : <Moon className="w-4 h-4 md:w-6 md:h-6"  />}
        </button>

        <button className="relative hover:text-blue-600 transition dark:text-gray-300">
          <Bell className="w-4 h-4 md:w-6 md:h-6" />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

      <div className="relative ">
          <button className="flex items-center gap-2 hover:text-blue-600 transition dark:text-gray-300" onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>
          <UserCircle className="w-4 h-4 md:w-6 md:h-6"  />
          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold">Admin</p>
             
         
          </div>
      <ChevronDown
  size={18}
  className={`transition-transform duration-300 hidden md:flex ${
    isDropdownOpen ? "rotate-180" : ""
  }`}
/>
            

           
         
        </button>
        {isDropdownOpen && (
  <div className="absolute top-12 right-0 w-52 bg-white  dark:bg-slate-900  rounded-xl shadow-xl border border-gray-200 py-2 ">
       <Link
                    to="/profile"
                                  >
    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:text-blue-600 transition  ">
      <UserCircle size={18} />
   
                    Profile
               
    </button>
  </Link>
         <Link
                    to="/settings"
                                  >
    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:text-blue-600 transition  ">
      <UserCircle size={18} />
   
                    Setting
               
    </button>
  </Link>

    <hr className="my-2 border-gray-200" />

    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 dark:text-gray-300 hover:bg-red-50 transition">
      <LogOut size={18} />
      <span>Logout</span>
    </button>

  </div>
)}
      </div>

      </div>

    </div>
  );
};

export default Navbar;