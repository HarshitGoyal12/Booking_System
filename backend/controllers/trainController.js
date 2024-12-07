const connection = require("../config/db");

// Add new train (admin)
const addTrain = (req, res) => {
  const { train_number, source, destination, total_seats } = req.body;

  const query = "INSERT INTO trains (train_number, source, destination, total_seats) VALUES (?, ?, ?, ?)";
  connection.query(query, [train_number, source, destination, total_seats], (err, result) => {
    if (err) return res.status(500).send("Error adding train");
    res.status(201).send("Train added successfully");
  });
};

// Get all trains between source and destination
const getTrains = (req, res) => {
  const { source, destination } = req.query;

  const query = "SELECT * FROM trains WHERE source = ? AND destination = ?";
  connection.query(query, [source, destination], (err, result) => {
    if (err) return res.status(500).send("Error fetching trains");
    res.status(200).json(result);
  });
};

module.exports = { addTrain, getTrains };
