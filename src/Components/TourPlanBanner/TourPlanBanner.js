import React from "react";
import traveler from "../../Assets/TourPlanBanner/TRAVELER.jpg";
import Button from "../Button/Button";
const TourPlanBanner = () => {
  return (
    <div>
      <div class="container text-center mt-10">
        <div class="row">
          <div class="col">
            <img src={traveler} alt="" />
          </div>
          <div class="col">
            <h1>Plan Your Trip</h1>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPlanBanner;
