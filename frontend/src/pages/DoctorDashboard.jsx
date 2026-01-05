import React, { useEffect, useState } from 'react';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5000/api/doctor/appointments', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      if (res.ok) {
        setAppointments(data);
      } else {
        alert(data.error || 'Failed to fetch appointments');
      }
    } catch (err) {
      alert('Server error: ' + err.message);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">👨‍⚕️ Doctor Dashboard</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Patient</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a._id}>
                <td className="border p-2">{a.patientId?.username || 'Unknown'}</td>
                <td className="border p-2">{a.patientId?.email || '-'}</td>
                <td className="border p-2">{a.date}</td>
                <td className="border p-2">{a.time}</td>
                <td className="border p-2">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoctorDashboard;

