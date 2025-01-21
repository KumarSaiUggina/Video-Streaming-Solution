# Video Streaming Solution

This project is a full-stack video streaming solution that allows users to upload, play, and stream videos with adaptive bitrate streaming capabilities. It consists of a React.js frontend styled with Tailwind CSS and an Express.js backend connected to a MongoDB database.

## Project Structure

```
video-streaming-solution
├── backend                # Backend server
│   ├── src
│   │   ├── controllers    # Controllers for handling requests
│   │   ├── models         # Mongoose models
│   │   ├── routes         # API routes
│   │   ├── services       # Business logic
│   │   ├── app.js        # Entry point for the Express app
│   │   └── config        # Configuration files
│   ├── package.json       # Backend dependencies and scripts
│   ├── .env               # Environment variables
│   └── README.md          # Backend documentation
├── frontend               # Frontend application
│   ├── src
│   │   ├── components      # React components
│   │   ├── pages           # React pages
│   │   ├── App.jsx        # Main application component
│   │   ├── index.css      # Global styles
│   │   └── index.js       # Entry point for the React app
│   ├── public
│   │   └── index.html      # Main HTML file
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── postcss.config.js   # PostCSS configuration
│   ├── package.json        # Frontend dependencies and scripts
│   └── README.md           # Frontend documentation
├── README.md               # Project overview and setup instructions
└── .gitignore              # Git ignore file
```

## Features

- **Video Upload**: Users can upload videos to the server.
- **Video Playback**: Users can play videos with adaptive bitrate streaming.
- **API Documentation**: Clear documentation for API endpoints.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd video-streaming-solution
   ```

2. Set up the backend:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file and add your MongoDB connection string and other environment variables.

3. Set up the frontend:
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

Visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.