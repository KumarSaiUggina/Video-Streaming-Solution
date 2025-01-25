const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    default: 'IN',
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // This option adds createdAt and updatedAt fields
});

const ContactInfo = mongoose.model('Contact', contactSchema);

module.exports = ContactInfo;