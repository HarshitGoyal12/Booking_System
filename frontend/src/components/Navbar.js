import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/train-availability">Train Availability</Link>
        </li>
        <li>
          <Link to="/book-seat">Book Seat</Link>
        </li>
        <li>
          <Link to="/booking-details">Booking Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
