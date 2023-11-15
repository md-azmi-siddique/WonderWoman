import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  let options = [
    { optionName: "home", optionLink: "/" },
    { optionName: "about", optionLink: "/" },
    { optionName: "contact", optionLink: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">  
    {/* not this much important commented for upper div */}
      <div className="items-center justify-between md:flex bg-gray-500 py-2 px-7 md:px-10">
        {/* logo and name */}
        <div className="font-semibold text-2xl flex items-center font-mono text-red-500">
          <span className="w-16 h-16 mr-2">
            <img src={logo} alt="" />
          </span>
          Logo
        </div>

        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
        </div>
 
        {/* list */}
        <ul className={`
        md:flex 
        items-center 
        md:pb-0 pb-12 
        absolute 
        md:static
        md:z-auto 
        z-[-1] 
        left-0 
        w-full 
        md:w-auto 
        md:pl-0 
        pl-9 
        transition-all 
        duration-500 
        ease-in 
        ${open?'top-20 opacity-100':'top-[-490px]'} md:opacity-100`}>
          {options.map((s) => (
            <li className="md:ml-8 text-xl md:my-0 my-7" key={s.optionLink}>
              <a
                className="text-white hover:text-red-950 duration-500"
                href={s.optionLink}
              >
                {s.optionName}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;