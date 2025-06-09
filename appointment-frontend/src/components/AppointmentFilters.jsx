import { useState } from "react";

const AppointmentFilters = ({ onFilterChange }) => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const applyFilters = () => {
    onFilterChange({ doctor, date });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Filter by doctor"
        className="p-2 border rounded w-full md:w-1/3"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
      />
      <input
        type="date"
        className="p-2 border rounded w-full md:w-1/3"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded"
        onClick={applyFilters}
      >
        Apply
      </button>
    </div>
  );
};

export default AppointmentFilters;
