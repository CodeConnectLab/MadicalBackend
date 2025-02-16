const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  clinicName: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: 'Mobile number must be 10 digits'
    }
  },
  specialization: {
    type: String,
    required: true,
    // enum: [
    //   'General Physician',
    //   'Cardiology',
    //   'Dermatology',
    //   'Orthopedics',
    //   'Pediatrics',
    //   'Neurology',
    //   'Psychiatry',
    //   'Gynecology',
    //   'Ophthalmology',
    //   'Dentistry'
    // ]
  },
  experience: {
    type: Number,
    required: true,
    min: 0
  },
  profilePicture: {
    type: String,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
//   updatedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   }
}, {
  timestamps: true
});

module.exports = mongoose.model('Doctor', doctorSchema);