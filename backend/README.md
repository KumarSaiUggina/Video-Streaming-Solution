# Video Streaming Solution Backend

This is the backend for the Video Streaming Solution project, built with Express.js and MongoDB. The backend handles video uploads, playback, and adaptive bitrate streaming.

## Features

- Video upload
- Video playback
- Adaptive bitrate streaming
- API documentation

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd video-streaming-solution/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

### Running the Application

To start the server, run:
```
npm start
```

The server will run on `http://localhost:5000`.

## API Documentation

### Video Routes

- **POST /api/videos/upload**: Upload a new video.
- **GET /api/videos**: Fetch all videos.
- **GET /api/videos/:id**: Stream a specific video.

## Folder Structure

- `src/`: Contains the source code for the backend.
  - `controllers/`: Contains the video controller for handling requests.
  - `models/`: Contains the video model for MongoDB.
  - `routes/`: Contains the routes for video-related endpoints.
  - `services/`: Contains business logic related to video processing.
  - `config/`: Contains configuration files, including database connection.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.