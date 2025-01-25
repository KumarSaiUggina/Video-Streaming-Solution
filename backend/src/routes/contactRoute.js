const express = require('express')
const {contactDetailsUpload} = require('../controllers/contactController');

const router = express.Router();

router.post('/data', contactDetailsUpload);

module.exports = router;
