import React from 'react';
import {
  Bell,
  Palette,
  Languages,
  Clock3,
  Monitor,
  Mail,
  Shield,
  MessageSquare,
  CalendarDays,
  BadgeDollarSign,
  RefreshCw,
  Megaphone,
  CircleHelp,
  Save,
  ChevronRight
} from "lucide-react";

const Settings = () => {

  const settingsMenu = [
    { icon: Bell, label: "Notifications" },
    { icon: Palette, label: "Theme" },
    { icon: Languages, label: "Language" },
    { icon: Clock3, label: "Timezone" },
    { icon: Monitor, label: "Appearance" },
    { icon: Mail, label: "Email Preferences" },
    { icon: Shield, label: "Privacy" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Settings</h1>
        <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
          <span>Dashboard</span>
          <ChevronRight size={16} className="mx-1" />
          <span className="font-medium text-slate-700 dark:text-slate-200">Settings</span>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left Sidebar Menu */}
        <aside className="w-full xl:w-80 bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 flex-shrink-0 xl:sticky xl:top-4 h-fit">
          <ul className="space-y-2">
            {settingsMenu.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all
                    ${index === 0
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </li>
              );
            })}
          </ul>

          {/* Help Card */}
          <div className="mt-10">
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <CircleHelp size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">Need Help?</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Contact support if you need any assistance.
                  </p>
                </div>
              </div>

              <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Notifications Channels */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold dark:text-white">Notifications Channels</h2>
              <p className="dark:text-gray-400 text-sm mt-1">
                Choose how you want to receive notifications
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Notifications */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700">
                <div className="flex gap-4 items-start">
                  <Mail className="mt-1 dark:text-white" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-white">Email Notifications</h3>
                    <p className="text-sm text-slate-500">Receives important email and alerts via emails</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="h-7 w-14 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>
                  <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-7"></div>
                </label>
              </div>

              {/* SMS Notifications */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700">
                <div className="flex gap-4 items-start">
                  <MessageSquare className="mt-1 dark:text-white" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-white">SMS Notifications</h3>
                    <p className="text-sm text-slate-500">Receives urgent alerts and notifications via SMS</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="h-7 w-14 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>
                  <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-7"></div>
                </label>
              </div>

              {/* Push Notifications */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700">
                <div className="flex gap-4 items-start">
                  <Bell className="mt-1 dark:text-white" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-white">Push Notifications</h3>
                    <p className="text-sm text-slate-500">Receive push notifications in your browser</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="h-7 w-14 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>
                  <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-7"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Notifications Preferences */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold dark:text-white">Notifications Preferences</h2>
              <p className="dark:text-gray-400 text-sm mt-1">
                Set preferences for different types of notifications
              </p>
            </div>

            <div className="space-y-4">
              {/* Appointment Reminders */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700">
                <div className="flex gap-4 items-start">
                  <CalendarDays className="mt-1 dark:text-white" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-white">Appointment Reminders</h3>
                    <p className="text-sm text-slate-500">Receives reminders for upcoming appointments</p>
                  </div>
                </div>
                <select className="w-full lg:w-52 border rounded-lg px-4 py-3 dark:bg-slate-900 dark:border-slate-600">
                  <option>24 hours before</option>
                  <option>48 hours before</option>
                  <option>1 hour before</option>
                </select>
              </div>

              {/* Billing Alerts */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700">
                <div className="flex gap-4 items-start">
                  <BadgeDollarSign className="mt-1 dark:text-white" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-white">Billing Alerts</h3>
                    <p className="text-sm text-slate-500">Receive alerts for invoices and payments</p>
                  </div>
                </div>
                <select className="w-full lg:w-52 border rounded-lg px-4 py-3 dark:bg-slate-900 dark:border-slate-600">
                  <option>Immediately</option>
                  <option>Daily Summary</option>
                </select>
              </div>

              {/* System Updates */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700">
                <div className="flex gap-4 items-start">
                  <RefreshCw className="mt-1 dark:text-white" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-white">System Updates</h3>
                    <p className="text-sm text-slate-500">Receive notifications about system updates</p>
                  </div>
                </div>
                <select className="w-full lg:w-52 border rounded-lg px-4 py-3 dark:bg-slate-900 dark:border-slate-600">
                  <option>Daily Summary</option>
                  <option>Weekly</option>
                </select>
              </div>

              {/* Marketing and News */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700">
                <div className="flex gap-4 items-start">
                  <Megaphone className="mt-1 dark:text-white" size={24} />
                  <div>
                    <h3 className="font-semibold dark:text-white">Marketing and News</h3>
                    <p className="text-sm text-slate-500">Receive news about new features and services</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="h-7 w-14 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>
                  <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-7"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Quiet Hours */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-xl p-4 dark:border-slate-700 mb-6">
              <div className="flex gap-4 items-start">
                <Megaphone className="mt-1 dark:text-white" size={24} />
                <div>
                  <h3 className="font-semibold dark:text-white">Quiet Hours</h3>
                  <p className="text-sm text-slate-500">Set quiet hours to pause non-urgent notifications</p>
                </div>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="h-7 w-14 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>
                <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-7"></div>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">From</label>
                <div className="relative">
                  <input
                    type="time"
                    defaultValue="22:00"
                    className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 dark:text-white"
                  />
                  <Clock3 size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">To</label>
                <div className="relative">
                  <input
                    type="time"
                    defaultValue="07:00"
                    className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 dark:text-white"
                  />
                  <Clock3 size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">Time Zone</label>
                <select className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 dark:text-white">
                  <option>(GMT+05:00) Pakistan Standard Time</option>
                  <option>(GMT+04:00) UAE Standard Time</option>
                  <option>(GMT+00:00) UTC</option>
                </select>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-8">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;