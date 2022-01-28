import React, { useEffect, useState } from "react";
import KhardungPass from "./KhardungPass";

const Khardung = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("https://quiet-waters-33050.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data.slice(3, 4)));
  }, []);

  return (
    <div>
      {spots.map((spot) => (
        <KhardungPass key={spot._id} spot={spot}></KhardungPass>
      ))}
    </div>
  );
};

export default Khardung;
