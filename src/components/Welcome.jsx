import { Calendar } from "lucide-react";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Welcome = () => {
  const { dark } = useTheme();

  const date = new Date().toLocaleDateString("en-PK", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-blue-100 dark:bg-gray-800 rounded-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="text-4xl md:text-6xl">👋</span>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white">
              Welcome back, Admin{" "}
              <span className="hidden sm:inline">👋</span>
            </h1>

            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              Here's what's happening here.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:self-start">
          <Calendar className="text-blue-800 dark:text-gray-300 w-5 h-5" />
          <p className="text-sm sm:text-base lg:text-lg text-black dark:text-white">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;