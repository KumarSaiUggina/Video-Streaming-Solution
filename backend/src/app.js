const express = require("express");

const videoRoutes = require("./routes/videoRoute");
const contactRoutes = require("./routes/contactRoute");

const { connectDB } = require("./config/db");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors(
  {
    origin: ["https://video-streaming-solution-frontend.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/upload", videoRoutes);
app.use("/api/contact", contactRoutes);

// Database connection
const startServer = async () => {
  try {
    await connectDB(); // Connect to the database
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the app if DB connection fails
  }

  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();