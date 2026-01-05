// src/pages/Unauthorized.jsx
import React from 'react';

const Unauthorized = () => {
  return (
    <div className="p-6 text-center text-red-600">
      <h1 className="text-2xl font-bold mb-4">Unauthorized</h1>
      <p>You do not have access to this page. Please login with the correct credentials.</p>
    </div>
  );
};

export default Unauthorized;
