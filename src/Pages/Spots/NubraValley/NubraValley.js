import React, { useEffect, useState } from "react";
import Nubra from "./Nubra";

const NubraValley = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("https://quiet-waters-33050.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data.slice(0, 1)));
  }, []);

  return (
    <div>
      {spots.map((spot) => (
        <Nubra key={spot._id} spot={spot}></Nubra>
      ))}
    </div>
  );
};

export default NubraValley;
