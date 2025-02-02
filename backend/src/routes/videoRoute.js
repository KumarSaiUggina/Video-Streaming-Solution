const express = require('express')
const multer = require("multer");
const { uploadVideo, } = require("../controllers/videoController");

const router = express.Router();
const upload = multer({ dest: process.env.UPLOADS_PATH });
// Route for uploading a video
router.post('/data', upload.single('file'), uploadVideo);


module.exports = router;
