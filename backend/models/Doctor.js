const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  fees: Number,
  availability: String,
  timeSlot: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
