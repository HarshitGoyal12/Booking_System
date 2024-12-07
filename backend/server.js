const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const authMiddleware = require("./middlewares/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const trainRoutes = require("./routes/trainRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Initialize the app and load environment variables
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests


// Use routes
app.use("/api/auth", authRoutes);  // User-related routes (e.g., register, login)
app.use("/api/trains", authMiddleware, trainRoutes);  // Train-related routes (protected by authMiddleware)
app.use("/api/bookings", authMiddleware, bookingRoutes);  // Booking-related routes (protected by authMiddleware)

// Test API endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the IRCTC API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
