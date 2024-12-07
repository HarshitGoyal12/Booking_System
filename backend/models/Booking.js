const connection = require("../config/db");

const Booking = {
  createBooking: (user_id, train_id, seats_booked, callback) => {
    const query = "INSERT INTO bookings (user_id, train_id, seats_booked) VALUES (?, ?, ?)";
    connection.query(query, [user_id, train_id, seats_booked], callback);
  },
  
  getByBookingId: (booking_id, callback) => {
    const query = "SELECT * FROM bookings WHERE id = ?";
    connection.query(query, [booking_id], callback);
  }
};

module.exports = Booking;
