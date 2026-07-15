import { ArrowUp } from "lucide-react";
import React from "react";
import { cardData } from "../data/Data";

const StatCard = () => {
  return (
<div className="grid grid-cols-1 min-[450px]:max-[650px]:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6 py-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md flex flex-col gap-6 hover:scale-105"
        >
          {/* Top */}
          <div className="flex items-center gap-4">
            <span
  className={`${card.iconBg} rounded-lg h-16 w-16 flex justify-center items-center`}
>
  {React.cloneElement(card.icon, {
    className: card.iconColor,
  })}
</span>
           

            <div>
              <h3 className="text-gray-500 dark:text-gray-300 text-sm">
                {card.title}
              </h3>

              <h1 className="text-3xl font-bold text-black dark:text-white">
                {card.data}
              </h1>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between gap-3 min-[450px]:max-[650px]:flex-col  min-[450px]:max-[650px]:justify-between">
            <div>
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                <ArrowUp size={14}/>
                <span className="text-xs  md:text-[12px] xl:text-xs  whitespace-nowrap min-[450px]:max-[650px]:text-1xl">{card.percentage  } {card.since}</span>
              </div>

              
            </div>

            {/* Sparkline */}
           <div className="w-26 h-12">
  <svg
    viewBox="0 0 120 50"
    className="w-full h-full"
    preserveAspectRatio="none"
  >
{/* Fill */}
<path
  d="M0 42
     L30 14
     L60 28
     L90 8
     L120 18
     L120 50
     L0 50 Z"
  fill={card.sparkFill}
/>

{/* Line */}
<path
  d="M0 42
     L30 14
     L60 28
     L90 8
     L120 18"
  fill="none"
   stroke={card.sparkStroke}
  strokeWidth="4"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
  </svg>
</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCard;