import React from "react";
import img1 from "../../Assets/KeepThingsFlexiable/img1.webp";
import Button from "../Button/Button";

const KeepThingsFlexible = () => {
  return (
    <div className="container mx-auto mt-20">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex justify-center">
          Tour package
        </div>
        <div className="justify-center">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default KeepThingsFlexible;
