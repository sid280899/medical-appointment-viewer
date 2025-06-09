// src/components/DoctorSelectModal.jsx
import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { X } from "lucide-react"; 

const DoctorSelectModal = ({ isOpen, onClose, onSelect }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const fetchDoctors = async () => {
        try {
          const res = await api.get("/doctors/");
          setDoctors(res.data);
        } catch (error) {
          console.error("Failed to fetch doctors:", error);
        }
      };
      fetchDoctors();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-4xl shadow-lg relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Select a Doctor</h2>

        {/* Grid of Doctor Cards */}
        {doctors.length === 0 ? (
          <p className="text-center text-gray-600">No doctors available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                onClick={() => {
                  onSelect(doctor);
                  onClose();
                }}
                className="cursor-pointer hover:shadow-lg transition-shadow bg-white border rounded-xl p-4 text-center"
              >
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${doctor.name}`}
                  alt={doctor.name}
                  className="w-24 h-24 mx-auto rounded-full border mb-4"
                />
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                <p className="text-xs text-gray-500 mt-1">ID: {doctor.id}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorSelectModal;
