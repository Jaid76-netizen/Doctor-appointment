// src/App.jsx
import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './Routes';

const App = () => {
  return (
    <div className="bg-[var(--white-shade)] min-h-screen flex flex-col">
      <Navbar />

      <main className="w-[80%] mx-auto flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default App;





