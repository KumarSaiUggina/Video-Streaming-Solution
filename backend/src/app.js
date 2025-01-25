const express = require("express");

const videoRoutes = require("./routes/videoRoute");
const contactRoutes = require("./routes/contactRoute");

const { connectDB } = require("./config/db");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors(
  {
    origin: 'https://video-streaming-solution-frontend.vercel.app', // Frontend origin
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/upload", videoRoutes);
app.use("/api/contact", contactRoutes);

// Database connection
(async () => {
  try {
    await connectDB(); // Ensure DB is connected when the app is initialized
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the app if DB connection fails
  }
})();

// Export the app for Vercel
module.exports = app;