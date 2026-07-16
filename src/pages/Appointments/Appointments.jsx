import React from "react";
import { Link } from "react-router-dom";
import { getStatusClass } from "../../utils/StatusColor";
import { appointmentsData } from "../../data/Data";
const Appointments = () => {
     return (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md ">
                <div className="flex items-center justify-between mb-4 p-6">
                    <h2 className="text-xl font-semibold dark:text-white "> Appointments</h2>
    
                    
                </div>
    
                <div className=" overflow-x-auto  hide-scrollbar hide-scrollbar ">
    
            <table className="w-full sm:min-w-[850px] hide-scrollbar ">
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
        {appointmentsData.map((item,index) => (
          <tr
          key={item.id}
          className={`${
            index !== appointmentsData.length - 1
              ? "border-b border-slate-200 dark:border-slate-700 "
              : ""
          } hover:bg-slate-50 dark:hover:bg-slate-700 transition`}
        >
            <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap sticky left-0 z-20 bg-white dark:bg-slate-800 shadow-[2px_0_6px_rgba(0,0,0,0.08)]">{item.patient}</td>
         
            <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap  ">{item.doctor}</td>
             <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.department}</td>
              <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.date}</td>
               <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap ">{item.time}</td>
            <td className="px-4 py-4 text-center  dark:text-white">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full whitespace-nowrap text-xs font-medium ${getStatusClass(
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

export default Appointments;