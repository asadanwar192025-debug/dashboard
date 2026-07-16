import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, ChevronRight, Search, ChevronDown,
  Filter, Pencil, Trash2, Plus, X , ChevronLeft
} from 'lucide-react';

import { billingCardData } from '../../data/Data';
import { invoicesData } from '../../data/Data';
import { getInvoiceStatusClass } from '../../utils/StatusColor';

const Billing = () => {
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [department, setDepartment] = useState("All Departments");
  const [filterOpen, setFilterOpen] = useState(false);
  const [addInvoiceOpen, setAddInvoiceOpen] = useState(false);

  const filterInvoicesData = invoicesData.slice(0, 5);

  // Close modal when resizing to large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && filterOpen) {
        setFilterOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [filterOpen]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Billings</h1>
        <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
          <span>Dashboard</span>
          <ChevronRight size={16} className="mx-1" />
          <span className="font-medium text-slate-700 dark:text-slate-200">Billings</span>
        </div>
      </div>

      {/* Billing Cards */}
      <div className="grid grid-cols-1 min-[468px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1280px]:grid-cols-4 gap-6">
        {billingCardData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md flex flex-col gap-6 hover:scale-105 transition"
          >
            <div className="flex items-center gap-4">
              <span className={`${card.iconBg} rounded-full h-14 w-14 flex justify-center items-center`}>
                {React.cloneElement(card.icon, { className: card.iconColor })}
              </span>
              <div>
                <h3 className="text-gray-500 dark:text-gray-300 text-sm">{card.title}</h3>
                <h1 className="text-xl font-bold text-black dark:text-white">${card.data}</h1>
                <span className="flex items-center gap-1 text-black dark:text-white text-xs">
                  <ArrowUp className="text-green-400" size={14} /> {card.s_title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md py-6 px-4">
        {/* Search + Filters + Add Button */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-4 pb-6 px-2 border-b dark:border-slate-700">
          
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-3 flex-1 lg:max-w-md">
            <Search size={18} className="text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search invoice..."
              className="bg-transparent outline-none text-sm w-full dark:text-white placeholder:text-gray-400"
            />
          </div>

          {/* Desktop Filters - Payment Method & Status */}
          <div className="hidden lg:flex items-end gap-4">
            <div className="min-w-[190px]">
              <p className="text-sm text-gray-500 mb-1">Payment Method</p>
              <div className="relative">
                <select className="appearance-none w-full px-4 py-3 pr-10 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-slate-800 dark:text-white">
                  <option>All Methods</option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option>JazzCash</option>
                  <option>EasyPaisa</option>
                  <option>Bank Transfer</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="min-w-[190px]">
              <p className="text-sm text-gray-500 mb-1">Payment Status</p>
              <div className="relative">
                <select className="appearance-none w-full px-4 py-3 pr-10 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-slate-800 dark:text-white">
                  <option>All Status</option>
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Unpaid</option>
                  <option>Overdue</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 px-5 py-3 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 w-full sm:w-auto"
          >
            <Filter size={18} />
            <span>Filter</span>
            <ChevronDown size={18} className={`transition ${filterOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Add Invoice Button */}
          <button
            onClick={() => setAddInvoiceOpen(true)}
            className="hidden lg:flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md whitespace-nowrap ml-auto"
          >
            <Plus size={18} />
            Add Invoice
          </button>
        </div>

        {/* Mobile Filter Modal */}
        {filterOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/60 dark:bg-black/80 z-[100] flex items-end">
            <div className="w-full bg-white dark:bg-slate-900 rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white">Filters</h2>
                <button onClick={() => setFilterOpen(false)} className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700">
                  <X size={26} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Payment Method */}
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Payment Method</label>
                  <select className="w-full border border-gray-300 dark:border-slate-600 rounded-xl p-3.5 bg-white dark:bg-slate-800 dark:text-white">
                    <option>All Methods</option>
                    <option>Cash</option>
                    <option>Card</option>
                    <option>JazzCash</option>
                    <option>EasyPaisa</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>

                {/* Payment Status */}
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Payment Status</label>
                  <select className="w-full border border-gray-300 dark:border-slate-600 rounded-xl p-3.5 bg-white dark:bg-slate-800 dark:text-white">
                    <option>All Status</option>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Unpaid</option>
                    <option>Overdue</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setFilterOpen(false)}
                  className="flex-1 border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white py-3.5 rounded-xl font-medium"
                >
                  Reset
                </button>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-medium"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto hide-scrollbar mt-4">
          <table className="w-full sm:min-w-[850px]">
            <thead>
              <tr>
                <th className="px-4 py-3 text-center dark:text-white sticky left-0 z-20 rounded-xl bg-white dark:bg-slate-800">Invoice ID</th>
                <th className="px-4 py-3 text-center dark:text-white">Patient</th>
                <th className="px-4 py-3 text-center dark:text-white">Doctor</th>
                <th className="px-4 py-3 text-center dark:text-white">Department</th>
                <th className="px-4 py-3 text-center dark:text-white">Amount</th>
                <th className="px-4 py-3 text-center dark:text-white">Date</th>
                <th className="px-4 py-3 text-center dark:text-white">Method</th>
                <th className="px-4 py-3 text-center dark:text-white">Status</th>
                <th className="px-4 py-3 text-center dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterInvoicesData.map((item, index) => (
                <tr key={item.id} className={`${index !== filterInvoicesData.length - 1 ? "border-b border-slate-200 dark:border-slate-700" : ""} hover:bg-slate-50 dark:hover:bg-slate-700 transition`}>
                  <td className="whitespace-nowrap rounded-xl px-4 py-4 text-center dark:text-white sticky left-0 z-20 bg-white dark:bg-slate-800">{item.id}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.patient}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.doctor}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.department}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.amount}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.date}</td>
                  <td className="px-4 py-4 text-center dark:text-white whitespace-nowrap">{item.method}</td>
                  <td className="px-4 py-4 text-center dark:text-white">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getInvoiceStatusClass(item.status)}`}>
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

        {/* Add Invoice Modal */}
        {addInvoiceOpen && (
          <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
              <div className="flex justify-between items-center border-b dark:border-slate-700 p-6">
                <div>
                  <h2 className="text-2xl font-bold dark:text-white">Add Invoice</h2>
                  <p className="text-sm text-slate-500">Create a new patient invoice</p>
                </div>
                <button onClick={() => setAddInvoiceOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800">
                  <X size={24} />
                </button>
              </div>

              <form className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">Patient Name</label>
                  <input type="text" placeholder="Enter patient name" className="w-full border rounded-lg px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">Invoice ID</label>
                  <input type="text" placeholder="INV-1001" className="w-full border rounded-lg px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">Department</label>
                  <select className="w-full border rounded-lg px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Dermatology</option>
                    <option>Pediatrics</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">Payment Method</label>
                  <select className="w-full border rounded-lg px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                    <option>Cash</option>
                    <option>Card</option>
                    <option>JazzCash</option>
                    <option>EasyPaisa</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">Amount</label>
                  <input type="number" placeholder="$500" className="w-full border rounded-lg px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">Status</label>
                  <select className="w-full border rounded-lg px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Unpaid</option>
                    <option>Overdue</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium dark:text-white">Notes</label>
                  <textarea rows={3} placeholder="Additional notes..." className="w-full border rounded-lg px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                </div>
              </form>

              <div className="flex justify-end gap-3 border-t dark:border-slate-700 p-6">
                <button onClick={() => setAddInvoiceOpen(false)} className="px-6 py-3 border rounded-lg dark:text-white">Cancel</button>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Save Invoice</button>
              </div>
            </div>
          </div>
        )}


         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Showing <span className="font-semibold text-slate-800 dark:text-white">1</span> to{" "}
                    <span className="font-semibold text-slate-800 dark:text-white">5</span> of{" "}
                    <span className="font-semibold text-slate-800 dark:text-white">{invoicesData.length}</span> results
                  </p>
        
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                      <ChevronLeft className="dark:text-white" size={18} />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-blue-600 text-white font-medium">1</button>
                    <button className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-white transition">2</button>
                    <button className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-white transition">3</button>
                 
                    <span className="px-2 text-slate-500 dark:text-slate-400">...</span>
                    <button className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-white transition">6</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                      <ChevronRight className="dark:text-white" size={18} />
                    </button>
                  </div>
                </div>
      </div>
    </div>
  );
};

export default Billing;