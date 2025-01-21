# Video Streaming Solution Frontend

This is the frontend part of the Video Streaming Solution project, built with React.js and styled using Tailwind CSS. The frontend communicates with the Express.js backend to provide video upload, playback, and adaptive bitrate streaming functionalities.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd video-streaming-solution/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

### Features

- Video Upload: Users can upload videos to the server.
- Video Playback: Users can watch videos with adaptive bitrate streaming.
- Responsive Design: The application is styled using Tailwind CSS for a responsive layout.

### Folder Structure

- `src/`: Contains the source code for the React application.
  - `components/`: Reusable components, including the VideoPlayer.
  - `pages/`: Page components, such as Home.
  - `App.jsx`: Main application component.
  - `index.js`: Entry point for the React application.
- `public/`: Contains static files, including the main HTML template.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `postcss.config.js`: Configuration for PostCSS.

### API Documentation

Refer to the backend README for API endpoints and usage details.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License.