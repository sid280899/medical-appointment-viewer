const AppointmentList = ({ appointments }) => {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {appointments.map((appt) => (
          <div key={appt.id} className="p-4 bg-white shadow rounded-lg border">
            <h2 className="text-xl font-semibold">{appt.patient_name}</h2>
            <p className="text-sm">Doctor: {appt.doctor_name || appt.doctor}</p>
            <p className="text-sm">Date: {appt.date}</p>
            <p className="text-sm">Time: {appt.time_slot}</p>
            <p className="text-sm font-medium text-green-600">Status: {appt.status}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default AppointmentList;
  