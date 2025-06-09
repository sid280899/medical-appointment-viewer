// src/pages/CreateAppointment.jsx
import AppointmentForm from "../components/AppointmentForm";
import { Link } from "react-router-dom";

const CreateAppointment = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Create Appointment</h1>
        <Link to="/" className="bg-gray-300 text-black px-4 py-2 rounded-lg">
          ← Back to Dashboard
        </Link>
      </div>
      <AppointmentForm />
    </div>
  );
};

export default CreateAppointment;
