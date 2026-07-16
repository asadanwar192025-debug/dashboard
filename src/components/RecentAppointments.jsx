import React from "react";
import { Link } from "react-router-dom";
import { getStatusClass } from "../utils/StatusColor";
const RecentAppointments = ({ data }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md ">
            <div className="flex items-center justify-between mb-4 p-6">
                <h2 className="text-xl font-semibold dark:text-white ">Recent Appointments</h2>

                <Link
                    to="/appointments"
                    className="text-blue-600 hover:underline text-sm  bg-slate-100 dark:bg-white px-4 py-1  rounded-lg"
                >
                    View All
                </Link>
            </div>

            <div className=" overflow-x-auto hide-scrollbar hide-scrollbar ">

        <table className="w-full  min-w-[850px]    hide-scrollbar ">
  <thead>
    <tr>
      <th className="px-4 py-3 text-center dark:text-white sticky left-0 z-20 bg-white dark:bg-slate-800 shadow-[2px_0_6px_rgba(0,0,0,0.08)] ">Patient</th>
      <th className="px-4 py-3 text-center dark:text-white">Doctor</th>
        <th className="px-4 py-3 text-center dark:text-white">Department</th>
          <th className="px-4 py-3 text-center dark:text-white">Date</th>
            <th className="px-4 py-3 text-center dark:text-white">Time</th>
             <th className="px-4 py-3 text-center dark:text-white">Status</th>
      
    </tr>
  </thead>

  <tbody>
    {data.map((item,index) => (
      <tr
      key={item.id}
      className={`${
        index !== data.length - 1
          ? "border-b border-slate-200 dark:border-slate-700 "
          : ""
      } hover:bg-slate-50 dark:hover:bg-slate-700 transition`}
    >
        <td className="px-4 py-4 text-center whitespace-nowrap dark:text-white sticky left-0 z-20  dark:bg-slate-800 bg-white shadow-[2px_0_6px_rgba(0,0,0,0.08)]">{item.patient}</td>
    
      <td className="px-4 py-4 text-center whitespace-nowrap dark:text-white ">{item.doctor}</td>
         <td className="px-4 py-4 text-center dark:text-white ">{item.department}</td>
          <td className="px-4 py-4 whitespace-nowrap text-center dark:text-white ">{item.date}</td>
           <td className="px-4 py-4 whitespace-nowrap text-center dark:text-white ">{item.time}</td>
        <td className="px-4 py-6 whitespace-nowrap text-center  dark:text-white">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
              item.status
            )}`}
          >
            {item.status}
          </span>
        </td>
    
        
      </tr>
      
    ))}
  </tbody>
</table>
            </div>
        </div>
    );
};

export default RecentAppointments;