const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from "Bearer <token>"

  // If token is not provided, return an error
  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  // Verify the token using JWT secret
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // If token is valid, attach the user info to the request object and proceed
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
