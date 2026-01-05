import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const dashboardPath = role === 'admin'
    ? '/admin-dashboard'
    : role === 'doctor'
    ? '/doctor-dashboard'
    : role === 'patient'
    ? '/patient-dashboard'
    : '/unauthorized';

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">🩺 Doctor Appointment</Link>
      </div>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {token ? (
          <>
            <Link to={dashboardPath}>Dashboard</Link>
            <button
              onClick={handleLogout}
              className="ml-2 bg-white text-blue-600 px-2 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



