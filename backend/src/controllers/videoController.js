const multer = require("multer");
const VideoInfo = require("../models/videoModel");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// S3 Configuration
const s3ClientInstance = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Function to upload file to S3
async function putObjectToS3(filename, fileContent, contentType) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `videos/uploads/user-upload/${filename}`,
    Body: fileContent,
    ContentType: contentType,
  });
  try {
    await s3ClientInstance.send(command);
    return `videos/uploads/user-upload/${filename}`; // Return the S3 object key
  } catch (error) {
    throw new Error(`Failed to upload to S3: ${error.message}`);
  }
}


// Upload Video Handler
const uploadVideo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { filename, path: videoPath, mimetype } = req.file;

      // Validate that the file is an MP4
      if (mimetype !== "video/mp4") {
        throw new Error("Only MP4 video uploads are allowed.");
      }
  
    // Read the file from the local file system
    const fileContent = fs.readFileSync(videoPath);

    const s3Key = await putObjectToS3(
      `video-${Date.now()}-${filename}`,
      fileContent,
      mimetype
    );

      // Save video metadata to the database
    const newVideo = new VideoInfo({
      title,
      description,
      path: s3Key,
      size: req.file.size,
    });

    const savedVideo = await newVideo.save();

    // Delete the local file after uploading to S3
    fs.unlinkSync(videoPath);

    res.status(201).json({
      message: "Video uploaded successfully. Transcoding takes time...",
      video: savedVideo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadVideo };
