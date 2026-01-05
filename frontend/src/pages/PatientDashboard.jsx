import React, { useState } from 'react';

const PatientDashboard = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5000/api/patient/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Appointment booked successfully!');
        setFormData({ doctorId: '', date: '', time: '' }); // Clear form
      } else {
        alert(data.error || '❌ Booking failed');
      }
    } catch (err) {
      alert('❌ Server error: ' + err.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📅 Book an Appointment</h2>
      <form onSubmit={handleBooking} className="space-y-4">
        <input
          type="text"
          name="doctorId"
          placeholder="Doctor ID"
          value={formData.doctorId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default PatientDashboard;

