import React, { useState } from "react";
import api from "../utils/api";

const BookingDetails = () => {
  const [bookingId, setBookingId] = useState("");
  const [details, setDetails] = useState(null);

  const handleSearch = async () => {
    try {
      const { data } = await api.get(`/user/booking-details?id=${bookingId}`);
      setDetails(data);
    } catch (err) {
      console.error("Error fetching booking details", err);
    }
  };

  return (
    <div>
      <h2>Booking Details</h2>
      <input
        type="text"
        placeholder="Booking ID"
        onChange={(e) => setBookingId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {details && (
        <div>
          <p>Train: {details.train_number}</p>
          <p>Seats: {details.seats_booked}</p>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
