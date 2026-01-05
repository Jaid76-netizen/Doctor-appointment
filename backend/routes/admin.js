const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// ✅ Admin login (Hardcoded for now)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.status(200).json({ success: true, message: 'Admin logged in' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// ✅ Add a new doctor
router.post('/add-doctor', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor: savedDoctor });
  } catch (err) {
    res.status(500).json({ message: 'Error adding doctor', error: err });
  }
});

// ✅ Get all doctors
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctors', error: err });
  }
});

// ✅ Delete a doctor by ID
router.delete('/doctor/:id', async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting doctor', error: err });
  }
});

module.exports = router;
