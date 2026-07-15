import React from "react";
import { Link } from "react-router-dom";
import { getPatientStatusClass } from "../../utils/StatusColor";
import { patientsData } from "../../data/Data";
const RecentPatients = () => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md ">
            <div className="flex items-center justify-between mb-4 p-6">
                <h2 className="text-xl font-semibold dark:text-white " >Recent Patients</h2>

                <Link
                    to="/appointments"
                    className="text-blue-600 hover:underline text-sm  bg-slate-100 dark:bg-white px-4 py-1  rounded-lg"
                >
                    View All
                </Link>
            </div>

            <div className="w-full overflow-x-auto  hide-scrollbar">

   <table className="min-w-[850px] w-full">
  <thead>
    <tr>
      <th className="sticky left-0 z-20 bg-white dark:bg-slate-800  z-50 eft-0 px-4 py-3 text-center dark:text-white shadow-[4px_0_8px_rgba(0,0,0,0.01)]">Name</th>
      <th className="px-4 py-3 text-center dark:text-white">Age</th>
      <th className="px-4 py-3 text-center dark:text-white">  Gender</th>
       <th className="px-4 py-3 text-center dark:text-white">  Disease</th>
        <th className="px-4 py-3 text-center dark:text-white">  Doctor</th>
         <th className="px-4 py-3 text-center dark:text-white">Status</th>

    </tr>
  </thead>

  <tbody>
    {patientsData.map((item,index) => (
      <tr
      key={item.id}
      className={`${
        index !== patientsData.length - 1
          ? "border-b border-slate-200 dark:border-slate-700 "
          : ""
      } hover:bg-slate-50 dark:hover:bg-slate-700 transition`}
    >
      <td className="sticky left-0 z-20 bg-white dark:bg-slate-800 px-4 py-4 text-center dark:text-white shadow-[4px_0_8px_rgba(0,0,0,0.9)]">{item.name}</td>
<td className="px-4 py-4 text-center dark:text-white ">{item.age}</td>
<td className="px-4 py-4 text-center dark:text-white ">{item.gender}</td>
<td className="px-4 py-4 text-center dark:text-white ">{item.disease}</td>
<td className="px-4 py-4 text-center dark:text-white ">{item.doctor}</td>

<td className="px-4 py-4 text-center">
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPatientStatusClass(
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

export default RecentPatients;