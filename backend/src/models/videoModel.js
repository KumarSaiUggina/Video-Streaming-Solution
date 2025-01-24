const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
const videoInfoSchema = new mongoose.Schema({
  unique_id: {
    type: String,
    required: false,
    unique: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true, 
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to assign a UUID if not provided
videoInfoSchema.pre("save", function (next) {
  if (!this.unique_id) {
    this.unique_id = uuidv4(); // Generate a unique UUID
  }
  next();
});

const VideoInfo = mongoose.model("Video", videoInfoSchema);

module.exports = VideoInfo
