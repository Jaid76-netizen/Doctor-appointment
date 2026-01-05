const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

// ✅ Get doctor's own profile
router.get('/profile/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctor profile', error: err });
  }
});

// ✅ Get appointments for a specific doctor
router.get('/appointments/:doctorId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.params.doctorId });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err });
  }
});

// ✅ Update doctor's own profile (optional)
router.put('/profile/:id', async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: 'Doctor profile updated', doctor: updatedDoctor });
  } catch (err) {
    res.status(500).json({ message: 'Error updating doctor profile', error: err });
  }
});

module.exports = router;
