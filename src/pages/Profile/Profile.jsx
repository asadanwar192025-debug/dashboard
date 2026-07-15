import React, { useState } from "react";
import ProfileImg from "../../assets/profile.png";

import {
  ChevronRight,
  Edit,
  Mail,
  Phone,
  UserRound,
  CalendarDays,
  MapPin,
  Camera,
} from "lucide-react";


const Profile = () => {
  const [isEditing , setIsEditing] = useState(false)
const [profile, setProfile] = useState(() => {
  const savedProfile = localStorage.getItem("profile");

  return savedProfile
    ? JSON.parse(savedProfile)
    : {
        fullName: "Admin User",
        email: "admin@medicare.com",
        phone: "+92 300 1234567",
        role: "Super Admin",
        address: "123, Health Street, Lahore, Pakistan",
      };
});

const [formData, setFormData] = useState(profile);



const handleSubmit = (e) => {
  e.preventDefault();
setProfile(formData)
 localStorage.setItem("profile", JSON.stringify(formData))
  console.log(formData);

  setIsEditing(false);
};


  return (
    <div className="">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Profile
        </h1>

        <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
          <span>Dashboard</span>
          <ChevronRight size={16} className="mx-1" />
          <span className="font-medium text-slate-700 dark:text-slate-200">
            Profile
          </span>
        </div>
      </div>

    {/* Profile Left */}<div className="flex flex-col min-[1200px]:flex-row justify-center items-center gap-6 py-10">
      {/* Profile Left */}

<div className="bg-white dark:bg-slate-800 w-full max-w-[450px] h-full rounded-xl py-8 shadow-md dark:text-white">           {/* Image */}
          <div className="flex flex-col items-center ">
            <div className="relative w-36 h-36 mb-4">
              <img
                src={ProfileImg}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />

              <div className="absolute right-3 bottom-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white cursor-pointer">
                <Camera size={18} />
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <h1 className="text-xl font-semibold text-slate-800 dark:text-white">
                {profile.fullName}

                <span className="ml-3 text-sm px-2 py-1 rounded-lg bg-blue-100 text-blue-600">
                  {profile.role}
                </span>
              </h1>

              <p className="mt-2 text-slate-500">
                {profile.email}
              </p>
            </div>
          </div>

          <hr className="mx-6 mt-6 border-gray-300 dark:border-slate-700" />

          {/* Details */}
          <div className="px-6">
            {/* Email */}
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <Mail />
                <span>Email</span>
              </div>

              <span>{profile.email}</span>
            </div>

            <hr className="border-gray-300 dark:border-slate-700" />

            {/* Phone */}
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <Phone />
                <span>Phone</span>
              </div>

              <span>{profile.phone}</span>
            </div>

            <hr className="border-gray-300 dark:border-slate-700" />

            {/* Role */}
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <UserRound />
                <span>Role</span>
              </div>

              <span>{profile.role}</span>
            </div>

            <hr className="border-gray-300 dark:border-slate-700" />

            {/* Joined */}
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <CalendarDays />
                <span>Joined On</span>
              </div>

              <span>15 Jan 2024</span>
            </div>

            <hr className="border-gray-300 dark:border-slate-700" />

            {/* Address */}
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <MapPin />
                <span>Address</span>
              </div>

              <span className="text-right">
                {profile.address}
              </span>
            </div>

            <hr className="border-gray-300 dark:border-slate-700" />

            {/* Button */}
            <button 
             onClick={() => {
    setFormData(profile); // 
    setIsEditing(true);
  }}
            
            className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
              <Edit size={18} />
              <span>Edit Profile</span>
            </button>
          </div>
       
        </div>


       

      {/* Profile Right */}
   
<div className=" flex flex-col w-full rounded-xl gap-6  "> 
      

      <div className=" bg-white dark:bg-slate-800 px-6 rounded-xl shadow-md dark:text-white py-6">
        
      
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="text-xl font-semibold text-slate-800 dark:text-white whitespace-nowrap">
              Personal Information

               
              </h1>



</div>
{




/* Form  */}

 <div>
  <form 
   onSubmit={handleSubmit}
  
  className="grid grid-cols-1  sm:grid-cols-2 gap-5">

  <div className="">
    <label className="block mb-2 text-sm font-medium">Full Name</label>
    <input
    disabled={!isEditing}
      type="text"
      className="w-full border rounded-lg px-4 py-3"
      placeholder="Enter full name"
        value={formData.fullName}
         onChange={(e) =>
    setFormData({
      ...formData,
      fullName: e.target.value,
    })
  }
 
    />
  </div>


  <div className="">
    <label className="block mb-2 text-sm font-medium">Email</label>
    <input
  disabled={!isEditing}
  type="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  
  className="w-full border rounded-lg px-4 py-3"
  placeholder="Email"
/>
  </div>

  <div className="">
    <label className="block mb-2 text-sm font-medium">Phone</label>
    <input
    disabled={!isEditing}
      type="text"
      className="w-full border rounded-lg px-4 py-3"
      placeholder="Phone"

      
      value={formData.phone}

          onChange={(e) =>
  setFormData({
    ...formData,
    phone: e.target.value,
  })
}
    />
  </div>

  <div className="">
    <label className="block mb-2 text-sm font-medium">Role</label>
  <select
  disabled={!isEditing}
  value={formData.role}
  onChange={(e) =>
    setFormData({
      ...formData,
      role: e.target.value,
    })
  }
  className="w-full border rounded-lg px-4 py-3"
>
  <option>Super Admin</option>
  <option>Admin</option>
  <option>Doctor</option>
  <option>Receptionist</option>
</select>
  </div>

 
<div className="sm:col-span-2">
  <label className="block mb-2 text-sm font-medium">Address</label>

  <textarea
  disabled={!isEditing}
  rows={2}
  value={formData.address}
  onChange={(e) =>
    setFormData({
      ...formData,
      address: e.target.value,
    })
  }
  className="w-full border rounded-lg px-4 py-3"
  placeholder="Address"
/>
</div>

{isEditing && (
  <div className="sm:col-span-2 flex justify-center gap-4 mt-6">
  <button
    type="button"
   onClick={() => {
  setFormData(profile); // Purana data wapas
  setIsEditing(false);
}}
    className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 dark:border-slate-600 dark:text-white transition"
  >
    Cancel
  </button>

  <button
    type="submit"
    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"
  >
    Save Changes
  </button>
</div>
)}

</form>





</div> 


      </div>

  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">

  <div className="mb-6">
    <h2 className="text-xl font-semibold dark:text-white">
      Security
    </h2>

    
  </div>

  <form className="flex flex-wrap gap-5">

   
     
    <div className="w-full flex items-center justify-between border rounded-xl p-4 dark:border-slate-700">

      <div>
        <h3 className="font-semibold dark:text-white">
          Password
        </h3>

        

       
      </div>

 
      <button
        type="button"
        className="px-6 py-2 rounded-lg   bg-blue-600 hover:bg-blue-700 text-white dark:text-white"
      >
        Change Password
      </button>

    </div>

  

    {/* Two Factor */}

    <div className="w-full flex items-center justify-between border rounded-xl p-4 dark:border-slate-700">

      <div>
        <h3 className="font-semibold dark:text-white">
          Two-Factor Authentication
        </h3>

        <p className="text-sm text-slate-500">
          Add an extra layer of security to your account.
        </p>
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














      </div>

    



    </div>


    </div>
  );
};

export default Profile;