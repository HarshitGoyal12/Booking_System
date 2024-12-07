const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../config/db");

// Register user
const registerUser = (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send("Error hashing password");

    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    connection.query(query, [username, hashedPassword], (err, result) => {
      if (err) return res.status(500).send("Error inserting user");
      res.status(201).send("User registered successfully");
    });
  });
};

// Login user
const loginUser = (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  connection.query(query, [username], (err, result) => {
    if (err || result.length === 0) return res.status(404).send("User not found");

    bcrypt.compare(password, result[0].password, (err, match) => {
      if (err || !match) return res.status(401).send("Invalid password");

      const token = jwt.sign({ id: result[0].id }, "secretkey", { expiresIn: "1h" });
      res.status(200).send({ token });
    });
  });
};

module.exports = { registerUser, loginUser };
