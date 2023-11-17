import React from "react";
import img1 from '../../Assets/FeaturedTour/img1.jpg'

const TravelGuide = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img className="float-left h-250 w-25" src={img1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus debitis architecto vel, necessitatibus ipsa rerum magni, harum beatae sunt molestiae quae deleniti perferendis et. Velit quia impedit error expedita officiis.
          </p>
        </div>
        <div>
          <img className="float-left h-250 w-25" src={img1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis accusantium labore provident deserunt optio accusamus veritatis tenetur voluptates a esse sunt assumenda, nam, architecto aliquid soluta fugit doloremque similique?
          </p>
        </div>
        <div>
          <img className="float-left h-250 w-25" src={img1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et veritatis at quod molestias nostrum voluptatem libero iure nulla quidem, odio, cumque ex fugit a alias laudantium culpa ab molestiae!
          </p>
        </div>
        <div>
          <img className="float-left h-250 w-25" src={img1} alt="" />
          <p className="pl-20 gap-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, sit quam voluptatibus ut laudantium. Harum eum porro enim praesentium recusandae aliquid cupiditate et? Minima recusandae temporibus illum dolore obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
