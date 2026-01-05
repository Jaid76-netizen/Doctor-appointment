import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      navigate("/login");
    }
  }, []);

  const [doctor, setDoctor] = useState({
    name: '',
    specialization: '',
    fees: '',
    availability: '',
    timeSlot: ''
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/doctors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doctor),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("✅ Doctor added successfully!");
        setDoctor({
          name: '',
          specialization: '',
          fees: '',
          availability: '',
          timeSlot: ''
        });

        // Hide message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
        </div>

        {successMessage && (
          <div className="bg-green-100 text-green-800 px-4 py-2 mb-4 rounded">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Doctor Name" value={doctor.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="specialization" placeholder="Specialization" value={doctor.specialization} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="number" name="fees" placeholder="Fees (₹)" value={doctor.fees} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="availability" placeholder="Availability Days" value={doctor.availability} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="timeSlot" placeholder="Time Slot" value={doctor.timeSlot} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;


