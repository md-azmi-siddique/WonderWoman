import React from "react";
import img1 from '../../Assets/PeopleReaction/img1.jpg'
import img2 from '../../Assets/PeopleReaction/img2.jpg'

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <div class="grid grid-cols-4 gap-4">
        <div className="flex justify-center bg-slate-600">
            <img src={img1} alt="" />
        </div>
        <div class="col-span-2 flex justify-center">
            Testimonial
        </div>
        <div className="flex justify-center bg-slate-600">
            <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
