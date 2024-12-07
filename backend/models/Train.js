const connection = require("../config/db");

const Train = {
  add: (train_number, source, destination, total_seats, callback) => {
    const query = "INSERT INTO trains (train_number, source, destination, total_seats) VALUES (?, ?, ?, ?)";
    connection.query(query, [train_number, source, destination, total_seats], callback);
  },
  
  getByRoute: (source, destination, callback) => {
    const query = "SELECT * FROM trains WHERE source = ? AND destination = ?";
    connection.query(query, [source, destination], callback);
  }
};

module.exports = Train;
