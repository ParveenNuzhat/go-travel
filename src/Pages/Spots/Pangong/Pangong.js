import React, { useEffect, useState } from "react";
import PangongLake from "./PangongLake";

const Pangong = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch(`https://quiet-waters-33050.herokuapp.com/spots`)
      .then((res) => res.json())
      .then((data) => setSpots(data.slice(1, 2)));
  }, []);

  return (
    <div>
      {spots.map((pangong) => (
        <PangongLake key={pangong._id} pangong={pangong}></PangongLake>
      ))}
    </div>
  );
};

export default Pangong;
