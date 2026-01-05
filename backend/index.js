const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/Auth');
const adminRoutes = require('./routes/admin');
const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');

const app = express();
const PORT = 5000;

// ✅ MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/doctor_appointment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Middlewares
app.use(cors());
app.use(bodyParser.json());

// ✅ Routes
app.use('/api/auth', authRoutes);         // Register / Login
app.use('/api/admin', adminRoutes);       // Admin-specific routes
app.use('/api/doctor', doctorRoutes);     // Doctor-specific routes
app.use('/api/patient', patientRoutes);   // Patient-specific routes

// ✅ Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

