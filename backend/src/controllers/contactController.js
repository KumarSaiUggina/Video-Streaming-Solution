const Contact = require('../models/contactModel');

const contactDetailsUpload = async (req, res) => {
  const { firstName, lastName, company, email, phoneNumber, country, message } = req.body;

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      company,
      email,
      phoneNumber,
      country,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: 'Contact details submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact details', error: error.message });
  }
};

module.exports = { contactDetailsUpload };