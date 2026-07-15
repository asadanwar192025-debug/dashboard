import React from "react";
import { Link } from "react-router-dom";
import { getPatientStatusClass } from "../utils/StatusColor";
const RecentPatients = ({ data }) => {
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

   <table className=" w-full ">
  <thead>
    <tr>
      <th className="sticky left-0 z-20 bg-white dark:bg-slate-800 whitespace-nowrap   z-50 eft-0 px-4 py-3 text-center dark:text-white shadow-[4px_0_8px_rgba(0,0,0,0.01)]">Name</th>
      <th className="px-4 py-3 whitespace-nowrap  text-center dark:text-white">Age</th>
      <th className="px-4 py-3 whitespace-nowrap  text-center dark:text-white">  Gender</th>
       <th className="px-4 py-3 whitespace-nowrap  text-center dark:text-white">  Disease</th>
        <th className="px-4 py-3 whitespace-nowrap text-center dark:text-white">  Doctor</th>
         <th className="px-4 py-3  whitespace-nowrap  text-center dark:text-white">Status</th>

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
      <td className="sticky left-0 z-20  dark:bg-slate-800 px-4 py-4 whitespace-nowrap  text-center dark:text-white shadow-[2px_0_6px_rgba(0,0,0,0.08)] ">{item.name}</td>
<td className="px-4 py-4 whitespace-nowrap  text-center dark:text-white ">{item.age}</td>
<td className="px-4 py-4 whitespace-nowrap  text-center dark:text-white ">{item.gender}</td>
<td className="px-4 py-4 whitespace-nowrap text-center dark:text-white ">{item.disease}</td>
<td className="px-4 py-4 whitespace-nowrap text-center dark:text-white ">{item.doctor}</td>

<td className="px-4 py-6 text-center">
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