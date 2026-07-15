import React from "react";
import Welcome from "../../components/Welcome";
import StatCard from "../../components/StatCard";
import PatientOverView from "../../components/PatientOverView";
import Revenu from "../../components/Revenue";
import { appointmentsData } from "../../data/Data";
import { patientsData } from "../../data/Data";
import RecentAppointments  from "../../components/RecentAppointments"
import RecentPatients from "../../components/RecentPatient"


const Dashboard = () => {

  const recentAppointments = appointmentsData.slice(0, 5);
   const recentPatients = patientsData.slice(0, 5);
  return (
    <div className="min-h-full bg-slate-100 dark:bg-slate-950">
      <Welcome />
      <StatCard />

   <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
  <PatientOverView />
  <Revenu />
</div>

<div className=" grid grid-cols-1 xl:grid-cols-2  gap-4 mt-4">
  <RecentAppointments data={recentAppointments} />
  <RecentPatients data={recentPatients} />
</div>

     </div>
  
  );
};

export default Dashboard;