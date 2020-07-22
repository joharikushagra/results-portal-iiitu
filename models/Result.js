const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentRoll: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  subjects: {
    type: Array,
    required: ['Required Atleast one subject'],
  },
  cgpa: {
    type: String,
    required: true,
  },
  sgpa: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('result', resultSchema);
