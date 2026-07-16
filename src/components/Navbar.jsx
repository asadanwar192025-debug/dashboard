import { Search, Bell, Moon, Sun, UserCircle, ChevronDown, Menu, LogOut ,Settings2} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { dark, setDark } = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-16 flex justify-between items-center px-6 border-b dark:border-slate-700 bg-white dark:bg-slate-900">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="dark:text-gray-300" size={24} />
        </button>

        <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-72 dark:text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {/* Theme Toggle */}
        <button
          className="hover:text-blue-600 dark:text-gray-300 transition"
          onClick={() => setDark(!dark)}
        >
          {dark ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Notification */}
        <button className="relative hover:text-blue-600 transition dark:text-gray-300">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 hover:text-blue-600 transition dark:text-gray-300"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <UserCircle className="w-6 h-6 md:w-7 md:h-7" />
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold">Admin</p>
            </div>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 hidden md:block ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-12 right-0 w-52 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 py-2 z-50">
              <Link to="/profile">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-blue-600 transition">
                  <UserCircle size={18} />
                  Profile
                </button>
              </Link>

              <Link to="/settings">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-blue-600 transition">
                  <Settings2 size={18} />
                  Settings
                </button>
              </Link>

              <hr className="my-2 border-gray-200 dark:border-slate-700" />

              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-slate-800 transition">
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