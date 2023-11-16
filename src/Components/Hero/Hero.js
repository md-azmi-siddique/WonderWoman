import React from "react";
import travel from "../../Assets/Travel-book.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="HeroSection">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-600 rounded">
          <div className="font-mono pl-4 pt-11 text-lg">Travel as you wish for</div>
        </div>
        <div className="bg-slate-600 rounded hidden md:block">
          <img
            src={travel}
            alt=""
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
      <img
        src={travel}
        alt=""
        className="rounded-lg shadow-lg w-full h-auto md:hidden"
      />
    </div>
  );
};

export default Hero;
