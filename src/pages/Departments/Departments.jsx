import React, { useState } from 'react';
import {
  Users,
  UserCheck,
  CalendarDays,
  Building2,
  Search,
  Bell,
  ChevronRight,
  Plus,
  Pencil,
  Trash2,
  ChevronDown,
  Calendar,
  DollarSign,
  Filter,
  ChevronLeft,
  X
} from "lucide-react";

import {  getDepartmentStatusClass} from '../../utils/StatusColor';
import {doctorsCardData ,  doctorsData , departmentCardData , departmentsData} from "../../data/Data"
 
// departments array (missing tha)
const departments = [
  "All Departments",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "Gynecology",
  "ENT",
  "Psychiatry",
  "Urology",
  "Oncology"
];

const Department = () => {
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [department, setDepartment] = useState("All Departments");
    const [filterOpen, setFilterOpen] = useState(false);

  const doctorTable=doctorsData.slice(0,5)




  return (
    <div className=' '>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8 ">

        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            Departments
          </h1>

          <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={16} className="mx-1" />
            <span className="font-medium text-slate-700 dark:text-slate-200">
              Departments
            </span>
          </div>
        </div>

        {/* Right */}
          <button
  className="
    w-full min-[450px]:w-auto
    flex items-center justify-center gap-2
    bg-blue-600 hover:bg-blue-700
    text-white px-5 py-2.5 rounded-xl
    shadow-md hover:shadow-lg
  "
>
          <Plus size={18} />
          <span className="font-medium">Add Department</span>
        </button>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 min-[468px]:grid-cols-2  min-[768px]:grid-cols-3 min-[1280px]:grid-cols-4 gap-6 pb-8 ">
        {departmentCardData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md flex flex-col gap-6 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <span
                className={`${card.iconBg} rounded-full h-14 w-14 flex justify-center items-center`}
              >
                {React.cloneElement(card.icon, {
                  className: card.iconColor,
                })}
              </span>

              <div>
                <h3 className="text-gray-500 dark:text-gray-300 text-sm">
                  {card.title}
                </h3>

                <h1 className="text-2xl font-bold text-black dark:text-white">
                  {card.data}
                </h1>

                <span className="text-black dark:text-white">{card.s_title} </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md py-6 px-4 ">

 
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 py-2">

  {/* Search */}
  <div className="flex items-center gap-2 border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 w-full">
    <Search size={18} className="text-gray-500 dark:text-gray-300" />

    <input
      type="text"
      placeholder="Search doctor..."
      className="bg-transparent outline-none text-sm w-full dark:text-white placeholder:text-gray-400"
    />
  </div>

  {/* Controls - Department, Status, Filter */}
  <div className="flex flex-col sm:flex-row gap-4 w-full">

    {/* Desktop: Department + Status */}
    <div className="hidden sm:flex items-end gap-4 w-full">
      {/* Department */}
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">Department</p>
        <button
          onClick={() => setDepartmentOpen(!departmentOpen)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-slate-800 dark:text-white"
        >
          <span>{department}</span>
          <ChevronDown
            size={18}
            className={`transition ${departmentOpen ? "rotate-180" : ""}`}
          />
        </button>

        {departmentOpen && (
          <div className="absolute mt-2 w-full sm:w-52 bg-white dark:bg-slate-900 rounded-lg shadow-xl border dark:border-slate-700 z-50  dark:text-white"  >
            {departments.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setDepartment(item);
                  setDepartmentOpen(false);
                }}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status */}
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">Status</p>
        <div className="relative w-full">
          <select className="appearance-none w-full px-4 py-2 pr-10 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-slate-800 dark:text-white">
            <option>All Status</option>
            <option>Available</option>
            <option>Busy</option>
            <option>On Leave</option>
          </select>
          <ChevronDown
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>
    </div>

    {/* Mobile Filter Button */}
    <button
      onClick={() => setFilterOpen(true)}
      className="sm:hidden flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-400 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 w-full"
    >
      <Filter size={18} />
      <span className="font-medium">Filter</span>
    </button>

  </div>

  {/* Mobile Filter Modal */}
  {filterOpen && (
    <div className="fixed inset-0 bg-black/40 z-[100] flex items-end">
      <div className="w-full bg-white dark:bg-slate-900 rounded-t-3xl p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold dark:text-white">Filters</h2>
          <button onClick={() => setFilterOpen(false)}>
            <X className=" dark:text-white" size={24} />
          </button>
        </div>

        {/* Department */}
        <div className="mb-4">
          <label className="text-sm text-gray-500">Department</label>
          <select className="w-full mt-2 border rounded-lg p-3 dark:bg-slate-800 dark:text-white">
            <option>All Departments</option>
            {departments.slice(1).map((dept) => (
              <option key={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div className="mb-6">
          <label className="text-sm text-gray-500">Status</label>
          <select className="w-full mt-2 border rounded-lg p-3 dark:bg-slate-800 dark:text-white">
            <option>All Status</option>
            <option>Available</option>
            <option>Busy</option>
            <option>On Leave</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={() => setFilterOpen(false)}
            className="flex-1 border rounded-lg py-3 dark:bg-white"
          >
            Reset
          </button>
          <button 
            onClick={() => setFilterOpen(false)}
            className="flex-1 bg-blue-600 text-white rounded-lg py-3"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )}

</div>

        
        
        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full sm:min-w-[850px]">
            <thead>
              <tr>
                <th className="px-4 py-3 text-center dark:text-white sticky left-0 z-20 rounded-xl bg-white dark:bg-slate-800">Name</th>
                <th className="px-4 py-3 text-center dark:text-white">Head</th>
                <th className="px-4 py-3 text-center dark:text-white">Doctors</th>
    
                <th className="px-4 py-3 text-center dark:text-white">Patients</th>
                <th className="px-4 py-3 text-center dark:text-white">Status</th>
                <th className="px-4 py-3 text-center dark:text-white">Actions</th>
              </tr>
            </thead>

            <tbody>
              {departmentsData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index !== doctorsData.length - 1 ? "border-b border-slate-200 dark:border-slate-700 " : ""} hover:bg-slate-50 dark:hover:bg-slate-700 transition`}
                >
                  <td className="whitespace-nowrap rounded-xl px-4 py-4 text-center dark:text-white sticky left-0 z-20 bg-white dark:bg-slate-800">{item.name}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.head}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.doctors}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.patients}</td>
                 
                  <td className="px-4 py-4 text-center dark:text-white">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${ getDepartmentStatusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                        <Pencil size={18} />
                      </button>
                      <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


  

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-4 border-t border-slate-200 dark:border-slate-700">

  {/* Left */}
  <p className="text-sm text-slate-500 dark:text-slate-400">
    Showing <span className="font-semibold text-slate-800 dark:text-white">1</span> to{" "}
    <span className="font-semibold text-slate-800 dark:text-white">
      {departmentsData.length}
    </span>{" "}
    of results
  </p>

  {/* Pagination */}
  <div className="flex items-center gap-2">

    <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
      <ChevronLeft size={18} />
    </button>

    <button className="w-9 h-9 rounded-lg bg-blue-600 text-white font-medium">
      1
    </button>

  

    <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
      <ChevronRight size={18} />
    </button>

  </div>
</div>
      </div>
    </div>
  );
};

export default Department;












// import React, { useState } from 'react';
// import {
//   Users,
//   Building2,
//   Calendar,
//   DollarSign,
//   Search,
//   ChevronRight,
//   Plus,
//   Pencil,
//   Trash2,
//   ChevronDown,
// } from "lucide-react";

// import {doctorsData} from "../../data/Data"

// const departments = [
//   "All Departments",
//   "Cardiology",
//   "Neurology",
//   "Pediatrics",
//   "Orthopedics",
//   "Oncology",
//   "General Medicine",
// ];

// const doctorsCardData = [
//   {
//     id: 1,
//     icon: Users,
//     iconBg: "bg-blue-100 dark:bg-blue-900/50",
//     iconColor: "text-blue-500",
//     title: "Total Doctors",
//     data: 48,
//     s_title: "All Registered",
//   },
//   {
//     id: 2,
//     icon: Building2,
//     iconBg: "bg-green-100 dark:bg-green-900/50",
//     iconColor: "text-green-500",
//     title: "Total Patients",
//     data: 1450,
//     s_title: "Under Care",
//   },
//   {
//     id: 3,
//     icon: Calendar,
//     iconBg: "bg-orange-100 dark:bg-orange-900/50",
//     iconColor: "text-orange-500",
//     title: "On Leave",
//     data: 5,
//     s_title: "Not Available",
//   },
//   {
//     id: 4,
//     icon: DollarSign,
//     iconBg: "bg-purple-100 dark:bg-purple-900/50",
//     iconColor: "text-purple-500",
//     title: "Departments",
//     data: "10",
//     s_title: "Total Departments",
//   },
// ];

// const doctorsData = [
//   {
//     id: 1,
//     name: "Dr. Sarah Chen",
//     specialty: "Cardiologist",
//     department: "Cardiology",
//     experience: "12 years",
//     patients: "245",
//     status: "available",
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Rodriguez",
//     specialty: "Neurologist",
//     department: "Neurology",
//     experience: "8 years",
//     patients: "189",
//     status: "busy",
//   },
//   // Add more doctors here
// ];

// const getDoctorStatusClass = (status) => {
//   switch (status?.toLowerCase()) {
//     case 'available': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400';
//     case 'busy': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400';
//     case 'onleave': return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400';
//     default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
//   }
// };

// const Doctors = () => {
//   const [departmentOpen, setDepartmentOpen] = useState(false);
//   const [department, setDepartment] = useState("All Departments");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const filteredDoctors = doctorsData.filter((doctor) => {
//     const matchesSearch = 
//       doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       doctor.department.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesDepartment = 
//       department === "All Departments" || doctor.department === department;
    
//     const matchesStatus = 
//       statusFilter === "All" || doctor.status === statusFilter;

//     return matchesSearch && matchesDepartment && matchesStatus;
//   });

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Doctors</h1>
//           <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
//             <span>Dashboard</span>
//             <ChevronRight size={16} className="mx-1" />
//             <span className="font-medium text-slate-700 dark:text-slate-200">Doctors</span>
//           </div>
//         </div>

//         <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all">
//           <Plus size={18} />
//           <span className="font-medium">Add Doctor</span>
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         {doctorsCardData.map((card) => {
//           const IconComponent = card.icon;
//           return (
//             <div
//               key={card.id}
//               className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all"
//             >
//               <div className="flex items-start gap-4">
//                 <div className={`${card.iconBg} rounded-2xl h-14 w-14 flex items-center justify-center flex-shrink-0`}>
//                   <IconComponent size={34} className={card.iconColor} />
//                 </div>

//                 <div>
//                   <p className="text-sm text-slate-500 dark:text-slate-400">{card.title}</p>
//                   <p className="text-3xl font-semibold text-slate-900 dark:text-white mt-1">
//                     {card.data}
//                   </p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{card.s_title}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Table Section */}
//       <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
//         <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
//           {/* Search */}
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search doctor by name or department..."
//               className="w-full pl-11 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl py-3 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <div className="flex gap-4">
//             {/* Department Dropdown */}
//             <div className="relative w-56">
//               <p className="text-xs text-slate-500 mb-1.5 font-medium">DEPARTMENT</p>
//               <button
//                 onClick={() => setDepartmentOpen(!departmentOpen)}
//                 className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl hover:border-slate-400"
//               >
//                 <span>{department}</span>
//                 <ChevronDown size={18} className={`transition ${departmentOpen ? 'rotate-180' : ''}`} />
//               </button>

//               {departmentOpen && (
//                 <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-900 rounded-xl shadow-xl border dark:border-slate-700 z-50 py-1 max-h-72 overflow-auto">
//                   {departments.map((item) => (
//                     <div
//                       key={item}
//                       onClick={() => {
//                         setDepartment(item);
//                         setDepartmentOpen(false);
//                       }}
//                       className={`px-4 py-2.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 ${
//                         department === item ? 'bg-blue-50 text-blue-600 dark:bg-blue-950' : ''
//                       }`}
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Status Filter */}
//             <div className="w-48">
//               <p className="text-xs text-slate-500 mb-1.5 font-medium">STATUS</p>
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 cursor-pointer"
//               >
//                 <option value="All">All Status</option>
//                 <option value="available">Available</option>
//                 <option value="busy">Busy</option>
//                 <option value="onleave">On Leave</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[850px]">
//             <thead>
//               <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500">DOCTOR</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500">SPECIALTY</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500">DEPARTMENT</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500">EXPERIENCE</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500">PATIENTS</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500">STATUS</th>
//                 <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500">ACTIONS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDoctors.map((item) => (
//                 <tr key={item.id} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">
//                   <td className="px-6 py-5 font-medium">{item.name}</td>
//                   <td className="px-6 py-5 text-slate-600 dark:text-slate-300">{item.specialty}</td>
//                   <td className="px-6 py-5 text-slate-600 dark:text-slate-300">{item.department}</td>
//                   <td className="px-6 py-5 text-slate-600 dark:text-slate-300">{item.experience}</td>
//                   <td className="px-6 py-5 text-slate-600 dark:text-slate-300">{item.patients}</td>
//                   <td className="px-6 py-5">
//                     <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getDoctorStatusClass(item.status)}`}>
//                       {item.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-5">
//                     <div className="flex justify-center gap-3">
//                       <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition">
//                         <Pencil size={18} />
//                       </button>
//                       <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition">
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;







