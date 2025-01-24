# 🎥 Video Streaming Solution

This project is a **full-stack video streaming solution** that allows users to upload, play, and stream videos with adaptive bitrate streaming capabilities. It features a modern **React.js frontend** styled with **Tailwind CSS** and an **Express.js backend** connected to a **MongoDB database**. And also used **AWS S3, AWS EC2, AWS Lambda with SQS**

---

## ✨ Features

- 🚀 **Video Upload**: Users can seamlessly upload videos to the server.
- 🎬 **Video Playback**: Enjoy smooth playback with adaptive bitrate streaming.
- 🌐 **HLS Streaming**: Videos are streamed using **HTTP Live Streaming (HLS)** for adaptive bitrate support.
- 🛠️ **AWS S3 Integration**: Videos are securely stored in **AWS S3** buckets for scalability and reliability.
- 🎥 **FFmpeg for Transcoding**: Utilizes **FFmpeg** to transcode videos into multiple bitrates for adaptive streaming.
- 📱 **Responsive Design**: Styled with Tailwind CSS for an optimized experience across devices.
- 📖 **API Documentation**: Comprehensive documentation for all API endpoints.

---

## 📂 Project Structure

```
video-streaming-solution
├── backend                # Backend server
│   ├── src
│   │   ├── controllers    # Controllers for handling requests
│   │   ├── models         # Mongoose models
│   │   ├── routes         # API routes
│   │   ├── services       # Business logic
│   │   ├── app.js         # Entry point for the Express app
│   │   └── config         # Configuration files
│   ├── package.json       # Backend dependencies and scripts
│   ├── .env               # Environment variables
│   └── README.md          # Backend documentation
├── frontend               # Frontend application
│   ├── src
│   │   ├── components     # React components
│   │   ├── pages          # React pages
│   │   ├── App.jsx        # Main application component
│   │   ├── index.css      # Global styles
│   │   └── main.jsx       # Entry point for the React app
│   ├── public
│   │   └── index.html     # Main HTML file
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── postcss.config.js  # PostCSS configuration
│   ├── package.json       # Frontend dependencies and scripts
│   └── README.md          # Frontend documentation
├── README.md              # Project overview and setup instructions
└── .gitignore             # Git ignore file
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed:
- 🖥️ **Node.js**
- 🗄️ **MongoDB**
- 🛠️ **FFmpeg**
- ☁️ **AWS Account** (for S3 bucket setup)

### 🛠️ Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/KumarSaiUggina/Video-Streaming-Solution.git
   cd video-streaming-solution
   ```

2. **Set up the backend**:
   - Navigate to the backend directory:
     ```sh
     cd backend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   
   - Create a `.env` file and add your MongoDB connection string, AWS credentials, and other environment variables(Just Copy env.example):
     ```sh
     MONGODB_URI=<your_mongodb_connection_string>
     AWS_ACCESS_KEY_ID=<your_aws_access_key>
     AWS_SECRET_ACCESS_KEY=<your_aws_secret_key>
     S3_BUCKET_NAME=<your_s3_bucket_name>
     ```

3. **Set up the frontend**:
   - Navigate to the frontend directory:
     ```sh
     cd ../frontend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
  
### ▶️ Running the Application

1. **Start the backend server**:
   ```sh
   cd backend
   nodemon app.sj
   ```
🌐 Visit `http://localhost:5000` to view the application.

2. **Start the frontend application**:
   ```sh
   cd ../frontend
   npm run dev
   ```

🌐 Visit `http://localhost:5173` to view the application.

---

## 📜 API Documentation

### 🎥 Video Routes

- **POST /api/upload/data**: Upload a new video.
- **GET /api/stream**: Fetch all videos.
- **GET /api/stream**: Stream a specific video.

---

## 🤝 Contributing

Contributions are welcome! 🎉
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request with a detailed explanation of your changes.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🛡️ Additional Information

- **Technologies Used**:
  - React.js
  - Node.js
  - Express.js
  - MongoDB
  - Tailwind CSS
  - AWS EC2
  - AWS Lambda with SQS
  - EventBridge with ECS
  - AWS S3
  - FFmpeg
  - HLS Streaming
- **Future Enhancements**:
  - Add user authentication and profiles.
  - Automatically processing the videos on aws servers
  - Enable live video streaming.
  - Implement video analytics for user insights.

💡 Feel free to share your ideas and suggestions to improve this project!
