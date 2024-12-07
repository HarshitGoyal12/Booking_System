import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import TrainAvailability from "./components/TrainAvailability";
import BookSeat from "./components/BookSeat";
import BookingDetails from "./components/BookingDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/train-availability" component={TrainAvailability} />
        <Route path="/book-seat" component={BookSeat} />
        <Route path="/booking-details" component={BookingDetails} />
      </Switch>
    </Router>
  );
}

export default App;
