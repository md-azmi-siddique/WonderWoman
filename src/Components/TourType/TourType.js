import React from "react";
import { Link } from "react-router-dom";
import bus from "../../Assets/TravelType/icons8-bus-100.png";
import train from "../../Assets/TravelType/icons8-train-100.png";
import air from "../../Assets/TravelType/icons8-flight-100.png";
import ship from "../../Assets/TravelType/icons8-ship-100.png";
const TourType = () => {
  return (
    <div className="items-center justify-center mt-4">
      <div>
        <p className="text-center font-bold text-lg">Enjoy Our Tour Plan</p>
      </div>

      <div className="flex justify-center items-center mt-9">
        <div className="grid grid-cols-4 gap-8 sm:gap-20">
          <div className="flex justify-center items-center">
            <img src={bus} className="h-10 w-10" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src={train} className="h-10 w-10" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src={air} className="h-10 w-10" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src={ship} className="h-10 w-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourType;
