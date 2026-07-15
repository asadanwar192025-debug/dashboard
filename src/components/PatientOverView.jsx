import React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
 import { useState } from "react";
import { patientOverview } from "../data/Data";

const PatientOverView = () => {

const [filter, setFilter] = useState("monthly");

const chartData = patientOverview[filter];
  return (
  <div className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Patient Overview
        </h2>

        <div className="relative">
            <select

             value={filter}
  onChange={(e) => setFilter(e.target.value)}
            
            
            className="appearance-none w-40 px-4 py-2 pr-10 rounded-lg border border-gray-200
             dark:border-slate-700 bg-white dark:bg-slate-900
              text-gray-700 dark:text-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer" >
                <option value="weekly">This Week</option>
<option value="monthly">This Month</option>
<option value="yearly">This Year</option>
            </select>

            <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            />
        </div>

    </div>

    {/* Chart */}

    <div className="h-[320px]">
        {/* Recharts AreaChart */}
        <ResponsiveContainer width="100%" height="100%">
  <AreaChart
    data={chartData}
    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
  >
    {/* Gradient */}
    <defs>
      <linearGradient id="patientGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.35} />
        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
      </linearGradient>
    </defs>

    {/* Grid */}
    <CartesianGrid
      strokeDasharray="3 3"
      vertical={false}
      stroke="#E5E7EB"
    />

    {/* X Axis */}
    <XAxis
      dataKey="day"
      tickLine={false}
      axisLine={false}
    />

    {/* Y Axis */}
    <YAxis
      domain={[0, 150]}
      ticks={[0, 30, 60, 90, 120, 150]}
      tickLine={false}
      axisLine={false}
    />

    {/* Tooltip */}
    <Tooltip />

    {/* Area */}
    <Area
      type="monotone"
      dataKey="patients"
      stroke="#2563EB"
      strokeWidth={3}
      fill="url(#patientGradient)"
      activeDot={{ r: 6 }}
    />
  </AreaChart>
</ResponsiveContainer>
    </div>

</div>
  )
}

export default PatientOverView
