const express = require("express");
const router = express.Router();
const { bookSeat, getBookingDetails } = require("../controllers/bookingController");

router.post("/book", bookSeat);
router.get("/details", getBookingDetails);

module.exports = router;
