import { useState, useEffect } from "react";
import AppointmentList from "../components/AppointmentList";
import AppointmentFilters from "../components/AppointmentFilters";
import { Link } from "react-router-dom";
import  api  from "../api/axios";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/");
      setAppointments(res.data);
      setFilteredAppointments(res.data);
    } catch (err) {
      console.error("Error fetching appointments", err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleFilterChange = ({ doctor, date }) => {
    let filtered = [...appointments];

    if (doctor) {
      filtered = filtered.filter((appt) =>{
        const doctorName = appt.doctor_name || appt.doctor?.name || "";
    return doctorName.toLowerCase().includes(doctor.toLowerCase());
    });
    }

    if (date) {
      filtered = filtered.filter((appt) => appt.date === date);
    }

    setFilteredAppointments(filtered);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + New Appointment
        </Link>
      </div>
      <AppointmentFilters onFilterChange={handleFilterChange} />
      <AppointmentList appointments={filteredAppointments} />
    </div>
  );
};

export default Dashboard;
