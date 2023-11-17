import React from "react";
import img1 from '../../Assets/TourBooking/img1.jpg'
import img2 from '../../Assets/TourBooking/img2.jpg'
import img3 from '../../Assets/TourBooking/img3.jpg'
import img4 from '../../Assets/TourBooking/img4.jpg'

const TourBooking = () => {
  return (
    <div>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 ...">04</div>
        <div class="pr-16">
          <div class="grid grid-cols-2 gap-4">
            <div class="...">
                <img src={img1} alt="" />
            </div>
            <div class="...">
                <img src={img2} alt="" />
            </div>
            <div class="...">
                <img src={img3} alt="" />
            </div>
            <div class="...">
                <img src={img4} alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;
