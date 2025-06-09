import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  api  from "../api/axios";
import DoctorSelectModal from "./DoctorSelectModal"; // Import modal

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patient_name: "",
    date: "",
    time_slot: "",
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDoctor) {
      alert("Please select a doctor");
      return;
    }

    try {
      await api.post("/appointments/", {
        ...formData,
        doctor: selectedDoctor.id,
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to create appointment:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        {/* Patient Name */}
        <input
          type="text"
          name="patient_name"
          placeholder="Patient Name"
          value={formData.patient_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Doctor Selection Button */}
        <div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full bg-blue-100 text-blue-800 py-2 px-4 rounded"
          >
            {selectedDoctor
              ? `${selectedDoctor.name} (${selectedDoctor.specialization})`
              : "Select Doctor"}
          </button>
        </div>

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Time Slot */}
        <input
          type="time"
          name="time_slot"
          value={formData.time_slot}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Submit */}
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {/* Doctor Modal */}
      <DoctorSelectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={(doctor) => setSelectedDoctor(doctor)}
      />
    </div>
  );
};

export default AppointmentForm;
