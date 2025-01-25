const express = require("express");

const videoRoutes = require("./routes/videoRoute");
const contactRoutes = require("./routes/contactRoute");

const { connectDB } = require("./config/db");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/upload", videoRoutes);
app.use("/api/contact", contactRoutes);

// Async function to handle database connection and start the server
const startServer = async () => {
  // Database connection
  try {
    await connectDB(); // Wait for DB connection
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the app if DB connection fails
  }

  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
};


startServer();
