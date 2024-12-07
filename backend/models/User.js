const connection = require("../config/db");

const User = {
  register: (username, password, callback) => {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    connection.query(query, [username, password], callback);
  },
  
  findByUsername: (username, callback) => {
    const query = "SELECT * FROM users WHERE username = ?";
    connection.query(query, [username], callback);
  }
};

module.exports = User;
