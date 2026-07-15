import React from 'react'
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
  Sheet,
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

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-r-lg transition-all duration-300 ${
      isActive
        ? "bg-blue-700 border-l-4 border-blue-400 text-white hover:text-slate-800"
        : "text-gray-300 hover:bg-slate-800 hover:text-blue-800"
    }`;
  return (
    
<div>

   <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
           Settings
          </h1>
          <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Dashboard</span>
            <ChevronRight size={16} className="mx-1" />
            <span className="font-medium text-slate-700 dark:text-slate-200">  Setting</span>
          </div>
        </div>

  
<div className="flex flex-col xl:flex-row gap-6 py-6">
  <aside
  className="w-120 bg-white dark:bg-slate-800 rounded-xl shadow-md
  p-4 flex flex-col xl:sticky xl:top-4 h-fit "
>

  {/* Menu */}
  <ul className="space-y-2">
    {settingsMenu.map((item, index) => {
      const Icon = item.icon;

      return (
        <li
          key={index}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
          ${
            index === 0
              ? "bg-blue-600 text-white"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
        >
          <Icon size={20} />
          <span>{item.label}</span>
        </li>
      );
    })}
  </ul>

  {/* Push card to bottom */}
  <div className="mt-auto pt-10">

    <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <CircleHelp size={18} className="text-white" />
        </div>

        <div>
          <h3 className="font-semibold dark:text-white">
            Need Help?
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Contact support if you need any assistance.
          </p>
        </div>

      </div>

      <button
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700
        text-white py-3 rounded-lg transition font-medium"
      >
        Contact Support
      </button>

    </div>

  </div>

</aside>









   <div className='flex flex-col gap-4 '>
     <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md  p-4 ">

  <div className="mb-3">
    <h2 className="text-xl font-semibold dark:text-white">
      Notifications Channels
    </h2>
    <p className='dark:text-gray-400'>Choose how you wants to receive notifications</p>

    
  </div>

  <form className="flex flex-wrap gap-3">

   
     
   

  

    {/* Two Factor */}

  

     <div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex gap-4 items-center justify-center '>

        <Mail className=' dark:text-white'/>


        <div>
           <h3 className="font-semibold dark:text-white">
          Email Notifications
        </h3>

        <p className="text-sm text-slate-500">
          Receives important email and alerts via emails
        </p>
        </div>
        <div>
          
        </div> 
       
      </div>

      <label className="relative inline-flex cursor-pointer items-center">

        <input
          type="checkbox"
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>

        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></div>

      </label>

    </div>


     <div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex items-center gap-4'>
        <MessageSquare className='dark:text-white'/>

      <div>
          <h3 className="font-semibold dark:text-white">
          SMS Notifications
        </h3>

        <p className="text-sm text-slate-500">
      Receives urgent alerts amd notifications via SMS
        </p>
      </div>
      </div>

      <label className="relative inline-flex cursor-pointer items-center">

        <input
          type="checkbox"
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>

        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></div>

      </label>

    </div>

      <div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex items-center gap-4'>
        <Bell className='dark:text-white'/>

           <div>
        <h3 className="font-semibold dark:text-white">
          Push Notifications
        </h3>

        <p className="text-sm text-slate-500">
          Receive push notifications in your browser
        </p>
      </div>

      </div>
   

      <label className="relative inline-flex cursor-pointer items-center">

        <input
          type="checkbox"
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>

        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></div>

      </label>

    </div>



  

  </form>

</div>
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4">

  <div className="mb-4">
    <h2 className="text-xl font-semibold dark:text-white">
      Notifications Preferences
    </h2>
    <p className='dark:text-gray-400'>Set preferences for different styles of notifications</p>

    
  </div>

  <form className="flex flex-wrap gap-3">

  

     <div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex gap-4 items-center justify-center '>

        <CalendarDays className=' dark:text-white'/>


        <div>
           <h3 className="font-semibold dark:text-white">
          Appointment Reminders
        </h3>

        <p className="text-sm text-slate-500">
          Receives appointment for upcoming appointments
        </p>
        </div>
        <div>
          
        </div> 
       
      </div>

      
  <div className="">
    <label className="block mb-2 text-sm font-medium dark:text-white" ></label>
  <select
 
 
  className="w-full border  dark:border-gray-500 rounded-lg px-4 py-3 dark:text-white"
>
  <option>24 hours before</option>
 
</select>
  </div>

     

    </div>


     <div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex items-center gap-4'>
        <BadgeDollarSign className='dark:text-white'/>

      <div>
          <h3 className="font-semibold dark:text-white">
          Billing Alerts
        </h3>

        <p className="text-sm text-slate-500">
    Receive alerts for invoices and payments
        </p>
      </div>
      </div>

       <div className="">
    <label className="block mb-2 text-sm font-medium dark:text-white" ></label>
  <select
 
 
  className="w-full border  dark:border-gray-500 rounded-lg px-4 py-3 dark:text-white"
>
  <option>Immediately</option>
 
</select>
  </div>

     

    </div>

      <div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex items-center gap-4'>
        <RefreshCw className='dark:text-white'/>

           <div>
        <h3 className="font-semibold dark:text-white">
          System Updates
        </h3>

        <p className="text-sm text-slate-500">
          Receive notifications about system updates
        </p>
      </div>

      </div>


       <div className="">
    <label className="block mb-2 text-sm font-medium dark:text-white" ></label>
  <select
 
 
  className="w-full border  dark:border-gray-500 rounded-lg px-4 py-3 dark:text-white"
>
  <option>Daily Summary</option>
 
</select>
  </div>
   

     

    </div>


<div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex items-center gap-4'>
        <Megaphone className='dark:text-white'/>

           <div>
        <h3 className="font-semibold dark:text-white">
          Marketing and  News
        </h3>

        <p className="text-sm text-slate-500">
          Receive news about new features and services
        </p>
      </div>

      </div>


      <label className="relative inline-flex cursor-pointer items-center">

        <input
          type="checkbox"
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>

        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></div>

      </label>
   

    

    </div>




  

  </form>

</div>


   <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-3">

  
 <div className="w-full flex items-center justify-between border rounded-xl p-3 dark:border-slate-700">

      <div className='flex items-center gap-4'>
        <Megaphone className='dark:text-white'/>

           <div>
        <h3 className="font-semibold dark:text-white">
          Quite Hours
        </h3>

        <p className="text-sm text-slate-500">
          Set quite hours to pause non-urgent notifications
        </p>
      </div>

      </div>


      <label className="relative inline-flex cursor-pointer items-center">

        <input
          type="checkbox"
          className="peer sr-only"
        />

        <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-blue-600 transition"></div>

        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></div>

      </label>

</div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

    {/* From */}
    <div>
      <label className="block mb-2 text-sm font-medium dark:text-white">
        From
      </label>

      <div className="relative">
        <input
          type="time"
          defaultValue="22:00"
          className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 pr-10 bg-white dark:bg-slate-900 dark:text-white outline-none"
        />

        <Clock3
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
    </div>

    {/* To */}
    <div>
      <label className="block mb-2 text-sm font-medium dark:text-white">
        To
      </label>

      <div className="relative">
        <input
          type="time"
          defaultValue="07:00"
          className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 pr-10 bg-white dark:bg-slate-900 dark:text-white outline-none"
        />

        <Clock3
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
    </div>

    {/* Timezone */}
    <div>
      <label className="block mb-2 text-sm font-medium dark:text-white">
        Time Zone
      </label>

      <select className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 dark:text-white outline-none">
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
  )
}

export default Settings














