const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

// ✅ Patient Signup
router.post('/signup', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const newUser = new User({ username, password, role: role || 'patient' });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Signup error', error: err });
  }
});

// ✅ Patient Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err });
  }
});

// ✅ Get all doctors (for patient to choose from)
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctors', error: err });
  }
});

// ✅ Book appointment
router.post('/appointments', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked', appointment: newAppointment });
  } catch (err) {
    res.status(500).json({ message: 'Error booking appointment', error: err });
  }
});

// ✅ Get patient's own appointments
router.get('/appointments/:patientId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.patientId });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err });
  }
});

module.exports = router;
