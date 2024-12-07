import React, { useState } from "react";
import api from "../utils/api";

const TrainAvailability = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [trainList, setTrainList] = useState([]);

  const checkAvailability = async () => {
    try {
      const { data } = await api.get(
        `/train/availability?source=${source}&destination=${destination}`
      );
      setTrainList(data);
    } catch (err) {
      console.error("Error fetching train availability:", err);
    }
  };

  return (
    <div>
      <h2>Check Train Availability</h2>
      <input
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={checkAvailability}>Check Availability</button>
      <ul>
        {trainList.map((train) => (
          <li key={train.id}>
            {train.name} - {train.available_seats} seats available
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainAvailability;
