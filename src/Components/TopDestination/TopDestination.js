import React from "react";
import img1 from '../../Assets/TopDestination/place1.jpg';
import img2 from '../../Assets/TopDestination/place2.jpg';
import img3 from '../../Assets/TopDestination/place3.jpg';
import img4 from '../../Assets/TopDestination/place4.jpg';

const TopDestination = () => {
  let Places = [
    { src: img1, name: "Place1" },
    { src: img2, name: "Place2" },
    { src: img3, name: "Place3" },
    { src: img4, name: "Place4" },
  ];

  return (
    <div className="container mx-auto bg-slate-300 mt-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Places.map((s, index) => (
          <div key={index}>
            <img src={s.src} alt="" />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestination;
