module.exports = {
  connectDB: async () => {
    const mongoose = require("mongoose");
    const dotenv = require("dotenv");
    const path = require("path");

    // Load environment variables
    dotenv.config();

    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection failed:", error.message);
      process.exit(1);
    }
  },
};
