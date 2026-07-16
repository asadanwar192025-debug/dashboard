import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Doctors from "../pages/Doctors/Doctors";
import Patients from "../pages/Patients/Patients";
import Appointments from "../pages/Appointments/Appointments";
import Billing from "../pages/Billing/Billing";
import Settings from "../pages/Settings/Settings";
import DashboardLayout from "../layouts/DashboardLayout"
import Departments from "../pages/Departments/Departments"
import Profile from "../pages/Profile/Profile";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctors" element={<Doctors />} />
           <Route path="/departments" element={<Departments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/billing" element={<Billing />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile/>}/>
      </Route>

    </Routes>
  );
}

export default AppRoutes;