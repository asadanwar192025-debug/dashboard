import { User, Users,
  UserCheck, Calendar, DollarSign, Building2,  Clock3,   ReceiptText,   CircleDollarSign,} from "lucide-react";



export const cardData = [
  {
    id: 1,
    icon: <Users size={34} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    sparkStroke: "#3B82F6",
    sparkFill: "#DBEAFE",
    title: "Total Doctors",
    data: 120,
    percentage: "5.2%",
    since:"from last month "
  },
  {
    id: 2,
    icon: <User size={34} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    sparkStroke: "#22C55E",
    sparkFill: "#DCFCE7",
    title: "Total Patients",
    data: 1450,
    percentage: "8.7%",
    since:"from last month"
  },
  {
    id: 3,
    icon: <Calendar size={34} />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    sparkStroke: "#F97316",
    sparkFill: "#FED7AA",
    title: "Appointments Today",
    data: 42,
    percentage: "3.1% ",
    since:"from yesterday",
  },
  {
    id: 4,
    icon: <DollarSign size={34} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    sparkStroke: "#A855F7",
    sparkFill: "#E9D5FF",
    title: "Total Revenue",
    data: "$12,450",
    percentage: "10.4% ",
    since:"from last month"
  },
];



export const patientOverview = {
  weekly: [
    { day: "Mon", patients: 18 },
    { day: "Tue", patients: 25 },
    { day: "Wed", patients: 30 },
    { day: "Thu", patients: 22 },
    { day: "Fri", patients: 35 },
    { day: "Sat", patients: 40 },
    { day: "Sun", patients: 28 },
  ],

  monthly: [
    { day: "5", patients: 42 },
    { day: "10", patients: 78 },
    { day: "15", patients: 64 },
    { day: "20", patients: 108 },
    { day: "25", patients: 92 },
    { day: "30", patients: 138 },
  ],

  yearly: [
    { day: "Jan", patients: 420 },
    { day: "Feb", patients: 510 },
    { day: "Mar", patients: 470 },
    { day: "Apr", patients: 620 },
    { day: "May", patients: 590 },
    { day: "Jun", patients: 710 },
    { day: "Jul", patients: 680 },
    { day: "Aug", patients: 760 },
    { day: "Sep", patients: 720 },
    { day: "Oct", patients: 810 },
    { day: "Nov", patients: 850 },
    { day: "Dec", patients: 900 },
  ],
};



export const revenueOverview = {
 weekly: [
  { day: "Mon", revenue: 35 },
  { day: "Tue", revenue: 42 },
  { day: "Wed", revenue: 38 },
  { day: "Thu", revenue: 46 },
  { day: "Fri", revenue: 53 },
  { day: "Sat", revenue: 61 },
  { day: "Sun", revenue: 58 },
],

  monthly: [
    { day: "1", revenue: 12 },
    { day: "5", revenue: 18.5 },
    { day: "10", revenue: 24 },
    { day: "15", revenue: 29.5 },
    { day: "20", revenue: 34.2 },
    { day: "25", revenue: 40.1 },
    { day: "30", revenue: 45.8 },
  ],

  yearly: [
    { day: "Jan", revenue: 145 },
    { day: "Feb", revenue: 158 },
    { day: "Mar", revenue: 171 },
    { day: "Apr", revenue: 186 },
    { day: "May", revenue: 194 },
    { day: "Jun", revenue: 208 },
    { day: "Jul", revenue: 221 },
    { day: "Aug", revenue: 235 },
    { day: "Sep", revenue: 248 },
    { day: "Oct", revenue: 262 },
    { day: "Nov", revenue: 278 },
    { day: "Dec", revenue: 295 },
  ],
};



export const appointmentsData = [
  { id: 1, patient: "Ali Khan", doctor: "Dr. Ahmed", department: "Cardiology", date: "09 Jul 2026", time: "09:00 AM", status: "Completed" },
  { id: 2, patient: "Sara Ahmed", doctor: "Dr. Fatima", department: "Dermatology", date: "09 Jul 2026", time: "09:30 AM", status: "Pending" },
  { id: 3, patient: "Usman Tariq", doctor: "Dr. Bilal", department: "Neurology", date: "09 Jul 2026", time: "10:00 AM", status: "Confirmed" },
  { id: 4, patient: "Ayesha Noor", doctor: "Dr. Hamza", department: "Orthopedics", date: "09 Jul 2026", time: "10:30 AM", status: "Cancelled" },
  { id: 5, patient: "Hassan Raza", doctor: "Dr. Sana", department: "Pediatrics", date: "09 Jul 2026", time: "11:00 AM", status: "Completed" },
  { id: 6, patient: "Fatima Khan", doctor: "Dr. Ahmed", department: "Cardiology", date: "10 Jul 2026", time: "09:00 AM", status: "Pending" },
  { id: 7, patient: "Hamza Ali", doctor: "Dr. Bilal", department: "Neurology", date: "10 Jul 2026", time: "09:30 AM", status: "Confirmed" },
  { id: 8, patient: "Zain Ahmed", doctor: "Dr. Hamza", department: "Orthopedics", date: "10 Jul 2026", time: "10:00 AM", status: "Completed" },
  { id: 9, patient: "Iqra Noor", doctor: "Dr. Sana", department: "Pediatrics", date: "10 Jul 2026", time: "10:30 AM", status: "Pending" },
  { id: 10, patient: "Bilal Khan", doctor: "Dr. Fatima", department: "Dermatology", date: "10 Jul 2026", time: "11:00 AM", status: "Completed" },
  { id: 11, patient: "Maryam Ali", doctor: "Dr. Ahmed", department: "Cardiology", date: "11 Jul 2026", time: "09:00 AM", status: "Completed" },
  { id: 12, patient: "Talha Riaz", doctor: "Dr. Bilal", department: "Neurology", date: "11 Jul 2026", time: "09:30 AM", status: "Pending" },
  { id: 13, patient: "Ahmed Raza", doctor: "Dr. Hamza", department: "Orthopedics", date: "11 Jul 2026", time: "10:00 AM", status: "Confirmed" },
  { id: 14, patient: "Areeba Khan", doctor: "Dr. Sana", department: "Pediatrics", date: "11 Jul 2026", time: "10:30 AM", status: "Completed" },
  { id: 15, patient: "Noor Fatima", doctor: "Dr. Fatima", department: "Dermatology", date: "11 Jul 2026", time: "11:00 AM", status: "Cancelled" },
  { id: 16, patient: "Shahzaib", doctor: "Dr. Ahmed", department: "Cardiology", date: "12 Jul 2026", time: "09:00 AM", status: "Completed" },
  { id: 17, patient: "Dua Ahmed", doctor: "Dr. Bilal", department: "Neurology", date: "12 Jul 2026", time: "09:30 AM", status: "Confirmed" },
  { id: 18, patient: "Hira Khan", doctor: "Dr. Hamza", department: "Orthopedics", date: "12 Jul 2026", time: "10:00 AM", status: "Pending" },
  { id: 19, patient: "Abdullah", doctor: "Dr. Sana", department: "Pediatrics", date: "12 Jul 2026", time: "10:30 AM", status: "Completed" },
  { id: 20, patient: "Laiba Noor", doctor: "Dr. Fatima", department: "Dermatology", date: "12 Jul 2026", time: "11:00 AM", status: "Completed" },
  { id: 21, patient: "Muneeb", doctor: "Dr. Ahmed", department: "Cardiology", date: "13 Jul 2026", time: "09:00 AM", status: "Pending" },
  { id: 22, patient: "Sana Tariq", doctor: "Dr. Bilal", department: "Neurology", date: "13 Jul 2026", time: "09:30 AM", status: "Completed" },
  { id: 23, patient: "Fahad Ali", doctor: "Dr. Hamza", department: "Orthopedics", date: "13 Jul 2026", time: "10:00 AM", status: "Confirmed" },
  { id: 24, patient: "Iqra Fatima", doctor: "Dr. Sana", department: "Pediatrics", date: "13 Jul 2026", time: "10:30 AM", status: "Completed" },
  { id: 25, patient: "Asad Khan", doctor: "Dr. Fatima", department: "Dermatology", date: "13 Jul 2026", time: "11:00 AM", status: "Pending" },
  { id: 26, patient: "Zoya Ahmed", doctor: "Dr. Ahmed", department: "Cardiology", date: "14 Jul 2026", time: "09:00 AM", status: "Completed" },
  { id: 27, patient: "Saad Malik", doctor: "Dr. Bilal", department: "Neurology", date: "14 Jul 2026", time: "09:30 AM", status: "Cancelled" },
  { id: 28, patient: "Aiman Noor", doctor: "Dr. Hamza", department: "Orthopedics", date: "14 Jul 2026", time: "10:00 AM", status: "Completed" },
  { id: 29, patient: "Huzaifa", doctor: "Dr. Sana", department: "Pediatrics", date: "14 Jul 2026", time: "10:30 AM", status: "Confirmed" },
  { id: 30, patient: "Anaya Khan", doctor: "Dr. Fatima", department: "Dermatology", date: "14 Jul 2026", time: "11:00 AM", status: "Pending" },
];



export const patientsData = [
  { id:1, name:"Ali Khan", age:28, gender:"Male", disease:"Fever", doctor:"Dr. Ahmed", status:"Recovered" },
  { id:2, name:"Sara Ahmed", age:35, gender:"Female", disease:"Diabetes", doctor:"Dr. Fatima", status:"Under Treatment" },
  { id:3, name:"Usman Tariq", age:42, gender:"Male", disease:"Heart Disease", doctor:"Dr. Bilal", status:"Critical" },
  { id:4, name:"Ayesha Noor", age:24, gender:"Female", disease:"Migraine", doctor:"Dr. Sana", status:"Recovered" },
  { id:5, name:"Hassan Raza", age:31, gender:"Male", disease:"Fracture", doctor:"Dr. Hamza", status:"Under Treatment" },
  { id:6, name:"Fatima Khan", age:29, gender:"Female", disease:"Flu", doctor:"Dr. Ahmed", status:"Recovered" },
  { id:7, name:"Hamza Ali", age:38, gender:"Male", disease:"Asthma", doctor:"Dr. Bilal", status:"Under Treatment" },
  { id:8, name:"Zain Ahmed", age:45, gender:"Male", disease:"Back Pain", doctor:"Dr. Hamza", status:"Recovered" },
  { id:9, name:"Iqra Noor", age:26, gender:"Female", disease:"Skin Allergy", doctor:"Dr. Fatima", status:"Recovered" },
  { id:10, name:"Bilal Khan", age:33, gender:"Male", disease:"Hypertension", doctor:"Dr. Ahmed", status:"Critical" },
  { id:11, name:"Maryam Ali", age:30, gender:"Female", disease:"Fever", doctor:"Dr. Sana", status:"Recovered" },
  { id:12, name:"Talha Riaz", age:40, gender:"Male", disease:"Migraine", doctor:"Dr. Bilal", status:"Under Treatment" },
  { id:13, name:"Ahmed Raza", age:36, gender:"Male", disease:"Diabetes", doctor:"Dr. Fatima", status:"Recovered" },
  { id:14, name:"Areeba Khan", age:22, gender:"Female", disease:"Cold", doctor:"Dr. Ahmed", status:"Recovered" },
  { id:15, name:"Noor Fatima", age:27, gender:"Female", disease:"Fracture", doctor:"Dr. Hamza", status:"Under Treatment" },
  { id:16, name:"Shahzaib", age:39, gender:"Male", disease:"Heart Disease", doctor:"Dr. Bilal", status:"Critical" },
  { id:17, name:"Dua Ahmed", age:20, gender:"Female", disease:"Flu", doctor:"Dr. Sana", status:"Recovered" },
  { id:18, name:"Hira Khan", age:34, gender:"Female", disease:"Asthma", doctor:"Dr. Ahmed", status:"Under Treatment" },
  { id:19, name:"Abdullah", age:37, gender:"Male", disease:"Back Pain", doctor:"Dr. Hamza", status:"Recovered" },
  { id:20, name:"Laiba Noor", age:25, gender:"Female", disease:"Skin Allergy", doctor:"Dr. Fatima", status:"Recovered" },
  { id:21, name:"Muneeb", age:41, gender:"Male", disease:"Diabetes", doctor:"Dr. Bilal", status:"Critical" },
  { id:22, name:"Sana Tariq", age:29, gender:"Female", disease:"Cold", doctor:"Dr. Sana", status:"Recovered" },
  { id:23, name:"Fahad Ali", age:44, gender:"Male", disease:"Hypertension", doctor:"Dr.Ahmed", status:"Under Treatment" },
  { id:24, name:"Iqra Fatima", age:23, gender:"Female", disease:"Migraine", doctor:"Dr.Hamza", status:"Recovered" },
  { id:25, name:"Asad Khan", age:32, gender:"Male", disease:"Flu", doctor:"Dr.Fatima", status:"Recovered" },
  { id:26, name:"Zoya Ahmed", age:27, gender:"Female", disease:"Fever", doctor:"Dr.Ahmed", status:"Recovered" },
  { id:27, name:"Saad Malik", age:35, gender:"Male", disease:"Fracture", doctor:"Dr.Hamza", status:"Under Treatment" },
  { id:28, name:"Aiman Noor", age:21, gender:"Female", disease:"Asthma", doctor:"Dr.Bilal", status:"Recovered" },
  { id:29, name:"Huzaifa", age:43, gender:"Male", disease:"Heart Disease", doctor:"Dr.Ahmed", status:"Critical" },
  { id:30, name:"Anaya Khan", age:26, gender:"Female", disease:"Skin Allergy", doctor:"Dr.Fatima", status:"Recovered" },
];






export const doctorsCardData = [

   {
    id: 1,
    icon: <Users size={34} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
   
    title: "Total Doctors",
    data: 48,
    s_title:"All Registered"

  
  
  },

  

   {
    id: 2,
    icon: <UserCheck  size={34} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    title: "Total Patients",
    data: 1450,
    s_title:"Working"
   
  },
  


  {
    id: 3,
    icon: <Calendar size={34} />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    
    title: "On Leave",
    data: 5,
    s_title:"Not Available"

  },

   
   {
    id: 4,
    icon: <Building2 size={34} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
   
    title: "Department",
    data: "10",
    s_title:"Total Department"
  },
 
];




export const doctorsData = [
  {
    id: 1,
    name: "Dr. Ahmed Khan",
    specialty: "Cardiologist",
    department: "Cardiology",
    experience: "12 Years",
    patients: 245,
    status: "Available",
  },
  {
    id: 2,
    name: "Dr. Fatima Ali",
    specialty: "Neurologist",
    department: "Neurology",
    experience: "9 Years",
    patients: 198,
    status: "On Leave",
  },
  {
    id: 3,
    name: "Dr. Bilal Hassan",
    specialty: "Orthopedic",
    department: "Orthopedics",
    experience: "15 Years",
    patients: 321,
    status: "Available",
  },
  {
    id: 4,
    name: "Dr. Sara Noor",
    specialty: "Dermatologist",
    department: "Dermatology",
    experience: "7 Years",
    patients: 180,
    status: "Busy",
  },
  {
    id: 5,
    name: "Dr. Usman Tariq",
    specialty: "Pediatrician",
    department: "Pediatrics",
    experience: "10 Years",
    patients: 276,
    status: "Available",
  },
  {
    id: 6,
    name: "Dr. Hina Malik",
    specialty: "Gynecologist",
    department: "Gynecology",
    experience: "8 Years",
    patients: 210,
    status: "Available",
  },
  {
    id: 7,
    name: "Dr. Zain Raza",
    specialty: "ENT Specialist",
    department: "ENT",
    experience: "6 Years",
    patients: 165,
    status: "Busy",
  },
  {
    id: 8,
    name: "Dr. Ayesha Siddiqui",
    specialty: "Psychiatrist",
    department: "Psychiatry",
    experience: "11 Years",
    patients: 142,
    status: "Available",
  },
  {
    id: 9,
    name: "Dr. Hamza Iqbal",
    specialty: "Urologist",
    department: "Urology",
    experience: "13 Years",
    patients: 224,
    status: "Available",
  },
  {
    id: 10,
    name: "Dr. Maryam Aslam",
    specialty: "Oncologist",
    department: "Oncology",
    experience: "14 Years",
    patients: 119,
    status: "Busy",
  },
  {
    id: 11,
    name: "Dr. Omar Farooq",
    specialty: "Cardiologist",
    department: "Cardiology",
    experience: "8 Years",
    patients: 167,
    status: "Available",
  },
  {
    id: 12,
    name: "Dr. Nadia Khan",
    specialty: "Neurologist",
    department: "Neurology",
    experience: "11 Years",
    patients: 203,
    status: "Busy",
  },
  {
    id: 13,
    name: "Dr. Imran Malik",
    specialty: "Orthopedic",
    department: "Orthopedics",
    experience: "9 Years",
    patients: 254,
    status: "Available",
  },
  {
    id: 14,
    name: "Dr. Sana Rehman",
    specialty: "Dermatologist",
    department: "Dermatology",
    experience: "6 Years",
    patients: 132,
    status: "On Leave",
  },
  {
    id: 15,
    name: "Dr. Faisal Abbas",
    specialty: "Pediatrician",
    department: "Pediatrics",
    experience: "12 Years",
    patients: 289,
    status: "Available",
  },
  {
    id: 16,
    name: "Dr. Rabia Younus",
    specialty: "Gynecologist",
    department: "Gynecology",
    experience: "10 Years",
    patients: 198,
    status: "Busy",
  },
  {
    id: 17,
    name: "Dr. Hassan Raza",
    specialty: "ENT Specialist",
    department: "ENT",
    experience: "7 Years",
    patients: 145,
    status: "Available",
  },
  {
    id: 18,
    name: "Dr. Mehwish Ali",
    specialty: "Psychiatrist",
    department: "Psychiatry",
    experience: "8 Years",
    patients: 156,
    status: "Available",
  },
  {
    id: 19,
    name: "Dr. Talha Javed",
    specialty: "Urologist",
    department: "Urology",
    experience: "14 Years",
    patients: 231,
    status: "Busy",
  },
  {
    id: 20,
    name: "Dr. Bushra Ahmed",
    specialty: "Oncologist",
    department: "Oncology",
    experience: "13 Years",
    patients: 108,
    status: "Available",
  },
  {
    id: 21,
    name: "Dr. Khalid Mehmood",
    specialty: "Cardiologist",
    department: "Cardiology",
    experience: "16 Years",
    patients: 312,
    status: "Available",
  },
  {
    id: 22,
    name: "Dr. Saima Tariq",
    specialty: "Neurologist",
    department: "Neurology",
    experience: "5 Years",
    patients: 124,
    status: "On Leave",
  },
  {
    id: 23,
    name: "Dr. Waqas Ahmed",
    specialty: "Orthopedic",
    department: "Orthopedics",
    experience: "10 Years",
    patients: 267,
    status: "Busy",
  },
  {
    id: 24,
    name: "Dr. Javeria Khan",
    specialty: "Dermatologist",
    department: "Dermatology",
    experience: "9 Years",
    patients: 178,
    status: "Available",
  },
  {
    id: 25,
    name: "Dr. Arslan Butt",
    specialty: "Pediatrician",
    department: "Pediatrics",
    experience: "11 Years",
    patients: 245,
    status: "Available",
  },
  {
    id: 26,
    name: "Dr. Mahnoor Shah",
    specialty: "Gynecologist",
    department: "Gynecology",
    experience: "7 Years",
    patients: 189,
    status: "Busy",
  },
  {
    id: 27,
    name: "Dr. Danish Raza",
    specialty: "ENT Specialist",
    department: "ENT",
    experience: "12 Years",
    patients: 156,
    status: "Available",
  },
  {
    id: 28,
    name: "Dr. Anum Zaidi",
    specialty: "Psychiatrist",
    department: "Psychiatry",
    experience: "8 Years",
    patients: 134,
    status: "Available",
  },
  {
    id: 29,
    name: "Dr. Fahad Ali",
    specialty: "Urologist",
    department: "Urology",
    experience: "15 Years",
    patients: 198,
    status: "On Leave",
  },
  {
    id: 30,
    name: "Dr. Iqra Hassan",
    specialty: "Oncologist",
    department: "Oncology",
    experience: "9 Years",
    patients: 112,
    status: "Busy",
  },
  {
    id: 31,
    name: "Dr. Salman Khan",
    specialty: "Cardiologist",
    department: "Cardiology",
    experience: "13 Years",
    patients: 278,
    status: "Available",
  },
  {
    id: 32,
    name: "Dr. Zoya Malik",
    specialty: "Neurologist",
    department: "Neurology",
    experience: "6 Years",
    patients: 143,
    status: "Available",
  },
  {
    id: 33,
    name: "Dr. Rayyan Ahmed",
    specialty: "Orthopedic",
    department: "Orthopedics",
    experience: "14 Years",
    patients: 301,
    status: "Busy",
  },
  {
    id: 34,
    name: "Dr. Laiba Noor",
    specialty: "Dermatologist",
    department: "Dermatology",
    experience: "8 Years",
    patients: 165,
    status: "Available",
  },
  {
    id: 35,
    name: "Dr. Abdullah Shah",
    specialty: "Pediatrician",
    department: "Pediatrics",
    experience: "10 Years",
    patients: 234,
    status: "Available",
  },
  {
    id: 36,
    name: "Dr. Aliza Raza",
    specialty: "Gynecologist",
    department: "Gynecology",
    experience: "11 Years",
    patients: 197,
    status: "On Leave",
  },
  {
    id: 37,
    name: "Dr. Mustafa Khan",
    specialty: "ENT Specialist",
    department: "ENT",
    experience: "9 Years",
    patients: 172,
    status: "Busy",
  },
  {
    id: 38,
    name: "Dr. Esha Fatima",
    specialty: "Psychiatrist",
    department: "Psychiatry",
    experience: "7 Years",
    patients: 128,
    status: "Available",
  },
  {
    id: 39,
    name: "Dr. Yahya Ali",
    specialty: "Urologist",
    department: "Urology",
    experience: "12 Years",
    patients: 219,
    status: "Available",
  },
  {
    id: 40,
    name: "Dr. Hania Zubair",
    specialty: "Oncologist",
    department: "Oncology",
    experience: "10 Years",
    patients: 105,
    status: "Busy",
  },
  {
    id: 41,
    name: "Dr. Ibrahim Hassan",
    specialty: "Cardiologist",
    department: "Cardiology",
    experience: "15 Years",
    patients: 289,
    status: "Available",
  },
  {
    id: 42,
    name: "Dr. Kinza Malik",
    specialty: "Neurologist",
    department: "Neurology",
    experience: "8 Years",
    patients: 156,
    status: "Available",
  },
  {
    id: 43,
    name: "Dr. Saif Ur Rehman",
    specialty: "Orthopedic",
    department: "Orthopedics",
    experience: "13 Years",
    patients: 312,
    status: "Busy",
  },
  {
    id: 44,
    name: "Dr. Maira Khan",
    specialty: "Dermatologist",
    department: "Dermatology",
    experience: "6 Years",
    patients: 149,
    status: "Available",
  },
  {
    id: 45,
    name: "Dr. Hashim Ahmed",
    specialty: "Pediatrician",
    department: "Pediatrics",
    experience: "11 Years",
    patients: 267,
    status: "On Leave",
  },
  {
    id: 46,
    name: "Dr. Areeba Siddiqui",
    specialty: "Gynecologist",
    department: "Gynecology",
    experience: "9 Years",
    patients: 203,
    status: "Available",
  },
  {
    id: 47,
    name: "Dr. Danish Farooq",
    specialty: "ENT Specialist",
    department: "ENT",
    experience: "10 Years",
    patients: 178,
    status: "Busy",
  },
  {
    id: 48,
    name: "Dr. Laraib Hassan",
    specialty: "Oncologist",
    department: "Oncology",
    experience: "12 Years",
    patients: 98,
    status: "Available",
  }
];


export const departmentCardData = [


     {
    id: 1,
    icon: <Building2 size={34} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
   
    title: "Department",
    data: "10",
    s_title:"All  Department"
  },

   {
    id: 2,
    icon: <Users size={34} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
   
    title: "Total Doctors",
    data: 48,
    s_title:"Across Department"

  
  
  },

  

   {
    id: 3,
    icon: <UserCheck  size={34} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    title: "Total Patients",
    data: 1450,
    s_title:"This Month"
   
  },
  


  {
    id: 4,
    icon: <Calendar size={34} />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    
    title: "Total Appointments",
    data: 5,
    s_title:"This month"

  },

   

 
];




export const departmentsData = [
  {
    id: 1,
    name: "Cardiology",
    head: "Dr. Ahmed Khan",
    doctors: 8,
    patients: 245,
    rooms: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Neurology",
    head: "Dr. Fatima Ali",
    doctors: 6,
    patients: 198,
    rooms: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "Orthopedics",
    head: "Dr. Bilal Hassan",
    doctors: 7,
    patients: 176,
    rooms: 10,
    status: "Active",
  },
  {
    id: 4,
    name: "Dermatology",
    head: "Dr. Sara Noor",
    doctors: 5,
    patients: 142,
    rooms: 6,
    status: "Active",
  },
  {
    id: 5,
    name: "Pediatrics",
    head: "Dr. Usman Tariq",
    doctors: 9,
    patients: 320,
    rooms: 15,
    status: "Active",
  },
  {
    id: 6,
    name: "Gynecology",
    head: "Dr. Hina Malik",
    doctors: 6,
    patients: 218,
    rooms: 10,
    status: "Active",
  },
  {
    id: 7,
    name: "ENT",
    head: "Dr. Zain Raza",
    doctors: 4,
    patients: 136,
    rooms: 5,
    status: "Active",
  },
  {
    id: 8,
    name: "Psychiatry",
    head: "Dr. Ayesha Siddiqui",
    doctors: 5,
    patients: 118,
    rooms: 7,
    status: "Active",
  },
  {
    id: 9,
    name: "Urology",
    head: "Dr. Hamza Iqbal",
    doctors: 4,
    patients: 151,
    rooms: 6,
    status: "Maintenance",
  },
  {
    id: 10,
    name: "Oncology",
    head: "Dr. Maryam Aslam",
    doctors: 7,
    patients: 184,
    rooms: 9,
    status: "Active",
  },
];





export const billingCardData = [


     {
    id: 1,
    icon: < CircleDollarSign size={34} />,
    iconBg: "bg-blue-500",
    iconColor: "text-white",

   
    title: " Total Revenue",
    data: "124500",
    s_title:"12.5% from last month"
  },

   {
    id: 2,
    icon: <  ReceiptText size={34} />,
    iconBg: "bg-green-500",
    iconColor: "text-white",
   
    title: "Total Invoices",
    data: 1245,
    s_title:"8.3% from last monnth"

  
  
  },

  

   {
    id: 3,
    icon: <Clock3  size={34} />,
    iconBg: "bg-orange-500",
    iconColor: "text-white",
    title: "Payment Pending",
    data: 32,
    s_title:"3.2% from last month"
   
  },
  


  {
    id: 4,
    icon: <CircleDollarSign size={34} />,
    iconBg: "bg-purple-500",
    iconColor: "text-white",
    
    title: "Paid This Month",
    data: 5,
    s_title:"15.8% from last month"

  },

   

 
];








export const invoicesData = [
  {
    id: "INV-1001",
    patient: "Ali Raza",
    doctor: "Dr. Ahmed Khan",
    department: "Cardiology",
    amount: "$320",
    date: "15 Jul 2026",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "INV-1002",
    patient: "Fatima Zahra",
    doctor: "Dr. Bilal Ahmed",
    department: "Orthopedics",
    amount: "$180",
    date: "14 Jul 2026",
    method: "Credit Card",
    status: "Pending",
  },
  {
    id: "INV-1003",
    patient: "Usman Tariq",
    doctor: "Dr. Ayesha Malik",
    department: "Dermatology",
    amount: "$250",
    date: "14 Jul 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "INV-1004",
    patient: "Sara Khan",
    doctor: "Dr. Hamza Ali",
    department: "Neurology",
    amount: "$540",
    date: "13 Jul 2026",
    method: "Cash",
    status: "Overdue",
  },
  {
    id: "INV-1005",
    patient: "Hassan Ahmed",
    doctor: "Dr. Fatima Zahra",
    department: "Pediatrics",
    amount: "$125",
    date: "13 Jul 2026",
    method: "Debit Card",
    status: "Paid",
  },
  {
    id: "INV-1006",
    patient: "Areeba Noor",
    doctor: "Dr. Faisal",
    department: "Radiology",
    amount: "$410",
    date: "12 Jul 2026",
    method: "Credit Card",
    status: "Pending",
  },
  {
    id: "INV-1007",
    patient: "Muneeb Khan",
    doctor: "Dr. Sara Anwar",
    department: "ENT",
    amount: "$290",
    date: "12 Jul 2026",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "INV-1008",
    patient: "Hina Malik",
    doctor: "Dr. Ahmed Khan",
    department: "Cardiology",
    amount: "$375",
    date: "11 Jul 2026",
    method: "Bank Transfer",
    status: "Pending",
  },
  {
    id: "INV-1009",
    patient: "Danish Ali",
    doctor: "Dr. Bilal Ahmed",
    department: "Orthopedics",
    amount: "$460",
    date: "11 Jul 2026",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "INV-1010",
    patient: "Iqra Sheikh",
    doctor: "Dr. Ayesha Malik",
    department: "Dermatology",
    amount: "$210",
    date: "10 Jul 2026",
    method: "Debit Card",
    status: "Overdue",
  },

  {
    id: "INV-1011",
    patient: "Ahmed Rauf",
    doctor: "Dr. Hamza Ali",
    department: "Neurology",
    amount: "$315",
    date: "09 Jul 2026",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "INV-1012",
    patient: "Zain Ali",
    doctor: "Dr. Faisal",
    department: "Radiology",
    amount: "$190",
    date: "09 Jul 2026",
    method: "Credit Card",
    status: "Pending",
  },
  {
    id: "INV-1013",
    patient: "Mahnoor",
    doctor: "Dr. Sara Anwar",
    department: "ENT",
    amount: "$230",
    date: "08 Jul 2026",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "INV-1014",
    patient: "Ahsan Khan",
    doctor: "Dr. Ahmed Khan",
    department: "Cardiology",
    amount: "$550",
    date: "08 Jul 2026",
    method: "Bank Transfer",
    status: "Overdue",
  },
  {
    id: "INV-1015",
    patient: "Laiba Noor",
    doctor: "Dr. Fatima Zahra",
    department: "Pediatrics",
    amount: "$145",
    date: "07 Jul 2026",
    method: "Debit Card",
    status: "Paid",
  },
  {
    id: "INV-1016",
    patient: "Hamza Javed",
    doctor: "Dr. Bilal Ahmed",
    department: "Orthopedics",
    amount: "$390",
    date: "07 Jul 2026",
    method: "Cash",
    status: "Pending",
  },
  {
    id: "INV-1017",
    patient: "Sana Tariq",
    doctor: "Dr. Ayesha Malik",
    department: "Dermatology",
    amount: "$275",
    date: "06 Jul 2026",
    method: "Credit Card",
    status: "Paid",
  },
  {
    id: "INV-1018",
    patient: "Jawad Ali",
    doctor: "Dr. Hamza Ali",
    department: "Neurology",
    amount: "$610",
    date: "06 Jul 2026",
    method: "Cash",
    status: "Pending",
  },
  {
    id: "INV-1019",
    patient: "Aiman",
    doctor: "Dr. Faisal",
    department: "Radiology",
    amount: "$280",
    date: "05 Jul 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "INV-1020",
    patient: "Shahzaib",
    doctor: "Dr. Sara Anwar",
    department: "ENT",
    amount: "$170",
    date: "05 Jul 2026",
    method: "Debit Card",
    status: "Overdue",
  },

  {
    id: "INV-1021",
    patient: "Rida Khan",
    doctor: "Dr. Ahmed Khan",
    department: "Cardiology",
    amount: "$430",
    date: "04 Jul 2026",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "INV-1022",
    patient: "Abdullah",
    doctor: "Dr. Bilal Ahmed",
    department: "Orthopedics",
    amount: "$210",
    date: "04 Jul 2026",
    method: "Credit Card",
    status: "Pending",
  },
  {
    id: "INV-1023",
    patient: "Noor Fatima",
    doctor: "Dr. Ayesha Malik",
    department: "Dermatology",
    amount: "$260",
    date: "03 Jul 2026",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "INV-1024",
    patient: "Talha",
    doctor: "Dr. Hamza Ali",
    department: "Neurology",
    amount: "$590",
    date: "03 Jul 2026",
    method: "Bank Transfer",
    status: "Pending",
  },
  {
    id: "INV-1025",
    patient: "Ayesha",
    doctor: "Dr. Fatima Zahra",
    department: "Pediatrics",
    amount: "$130",
    date: "02 Jul 2026",
    method: "Debit Card",
    status: "Paid",
  },
  {
    id: "INV-1026",
    patient: "Kashif",
    doctor: "Dr. Faisal",
    department: "Radiology",
    amount: "$470",
    date: "02 Jul 2026",
    method: "Cash",
    status: "Overdue",
  },
  {
    id: "INV-1027",
    patient: "Hoorain",
    doctor: "Dr. Sara Anwar",
    department: "ENT",
    amount: "$185",
    date: "01 Jul 2026",
    method: "Credit Card",
    status: "Paid",
  },
  {
    id: "INV-1028",
    patient: "Usama",
    doctor: "Dr. Ahmed Khan",
    department: "Cardiology",
    amount: "$350",
    date: "01 Jul 2026",
    method: "Cash",
    status: "Pending",
  },
  {
    id: "INV-1029",
    patient: "Nimra",
    doctor: "Dr. Bilal Ahmed",
    department: "Orthopedics",
    amount: "$290",
    date: "30 Jun 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "INV-1030",
    patient: "Saad Ahmed",
    doctor: "Dr. Hamza Ali",
    department: "Neurology",
    amount: "$680",
    date: "30 Jun 2026",
    method: "Cash",
    status: "Overdue",
  },
];