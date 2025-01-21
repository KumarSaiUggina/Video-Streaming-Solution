import express from 'express';
import VideoController from '../controllers/videoController.js';

const router = express.Router();
const videoController = new VideoController();

// Route for uploading a video
router.post('/upload', videoController.uploadVideo);

// Route for fetching video metadata
router.get('/:id', videoController.getVideo);

// Route for streaming a video
router.get('/stream/:id', videoController.streamVideo);

export default router;