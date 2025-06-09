import { useState, useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import { motion } from "framer-motion";
import doctorImage from "../assets/doctor.png"; // Make sure this path matches your actual file
import { Menu } from "lucide-react";
const BASE_URL = "https://appointment-backend-n3zk.onrender.com/api";

const Home = () => {
  const [showAppointments, setShowAppointments] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Fetch doctors from backend on mount
    fetch(`${BASE_URL}/doctors/`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }
        return res.json();
      })
      .then(data => {
        setDoctors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching doctors:", err);
        setError("Unable to load doctor data");
        setLoading(false);
      });
  }, []);

  if (showAppointments) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 bg-white shadow-md">
        <div className="text-xl font-bold text-blue-700">Logoipsum</div>

        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-6 h-6 text-blue-700" />
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 lg:space-x-6 font-medium text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Our Services</li>
          <li className="hover:text-blue-600 cursor-pointer">How It Works</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
        </ul>

        <div className="hidden md:flex space-x-2">
          <button className="border px-3 py-1 rounded-full text-sm">Dr</button>
          <button className="border px-3 py-1 rounded-full text-sm">Bh</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
            Let’s Talk
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 font-medium text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Our Services</li>
          <li className="hover:text-blue-600 cursor-pointer">How It Works</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
          <div className="flex space-x-2 pt-4">
            <button className="border px-3 py-1 rounded-full text-sm">Dr</button>
            <button className="border px-3 py-1 rounded-full text-sm">Bh</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
              Let’s Talk
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12 md:py-16 gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get Appointment <br /> Easy And Fast
          </h1>
          <p className="text-gray-600 mb-6">
            You can monitor and manage your business with the platform we will
            provide. You can monitor and manage your appointments.
          </p>
          <button
            onClick={() => setShowAppointments(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base md:text-lg rounded-lg"
          >
            Appointment
          </button>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 text-blue-600">
            <div className="text-center">
              <p className="text-2xl font-bold">50k+</p>
              <p className="text-sm">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">350+</p>
              <p className="text-sm">Specialist Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm">Success Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Right Doctor Image */}
        <div className="relative flex justify-center items-center w-full lg:w-[40%]">
          {/* Glowing Background */}
          <div
            className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full z-0 animate-pulse-slow"
            style={{
              background: "radial-gradient(circle, #bfdbfe 0%, #ffffff 100%)",
              filter: "blur(80px)",
              opacity: 0.6,
            }}
          />
          <img
            src={doctorImage}
            alt="Doctor"
            className="relative z-10 max-w-[80%] sm:max-w-[60%] md:max-w-xs lg:max-w-sm w-full object-contain"
          />
        </div>
      </div>
      {/* Optional: Doctor List */}
<div className="px-4 md:px-16 py-8">
  <h2 className="text-xl font-semibold mb-4 text-blue-700">Our Doctors</h2>
  {loading && <p>Loading doctors...</p>}
  {error && <p className="text-red-600">{error}</p>}
  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {doctors.map((doc) => (
      <li
        key={doc.id}
        className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <h3 className="font-bold text-lg">{doc.name}</h3>
        <p className="text-sm text-gray-600">{doc.specialization}</p>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default Home;
