import React, { useState } from "react";
import api from "../utils/api";

const BookSeat = () => {
  const [trainId, setTrainId] = useState("");
  const [seats, setSeats] = useState(1);

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.post(
        "/booking/book",
        { trainId, seats },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Booking successful!");
    } catch (err) {
      console.error("Error booking seat:", err);
    }
  };

  return (
    <div>
      <h2>Book a Seat</h2>
      <input
        type="number"
        placeholder="Train ID"
        onChange={(e) => setTrainId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Seats"
        min="1"
        onChange={(e) => setSeats(e.target.value)}
      />
      <button onClick={handleBooking}>Book Seat</button>
    </div>
  );
};

export default BookSeat;
