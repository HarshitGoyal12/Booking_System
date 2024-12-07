const express = require("express");
const router = express.Router();
const { addTrain, getTrains } = require("../controllers/trainController");

router.post("/add", addTrain);
router.get("/get", getTrains);

module.exports = router;
