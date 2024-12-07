const connection = require("../config/db");

// Book a seat
const bookSeat = (req, res) => {
  const { user_id, train_id, seats } = req.body;

  // Fetch train info
  const query = "SELECT * FROM trains WHERE id = ?";
  connection.query(query, [train_id], (err, result) => {
    if (err || result.length === 0) return res.status(404).send("Train not found");

    const availableSeats = result[0].total_seats;

    // Check availability
    if (availableSeats < seats) {
      return res.status(400).send("Not enough seats available");
    }

    // Update train seats and add booking
    const updateQuery = "UPDATE trains SET total_seats = total_seats - ? WHERE id = ?";
    connection.query(updateQuery, [seats, train_id], (err, result) => {
      if (err) return res.status(500).send("Error updating train seats");

      const bookingQuery = "INSERT INTO bookings (user_id, train_id, seats_booked) VALUES (?, ?, ?)";
      connection.query(bookingQuery, [user_id, train_id, seats], (err, result) => {
        if (err) return res.status(500).send("Error booking seat");
        res.status(200).send("Seat booked successfully");
      });
    });
  });
};

// Get booking details
const getBookingDetails = (req, res) => {
  const { booking_id } = req.query;

  const query = "SELECT * FROM bookings WHERE id = ?";
  connection.query(query, [booking_id], (err, result) => {
    if (err || result.length === 0) return res.status(404).send("Booking not found");

    res.status(200).json(result[0]);
  });
};

module.exports = { bookSeat, getBookingDetails };
