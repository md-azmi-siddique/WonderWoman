import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png";

const Home = () => {
  return (
    // <div className="flex">
    //   <div className="pt-6 justify-center flex w-1/3 bg-red-500">
    //     <div>
    //       <FontAwesomeIcon
    //         icon={faCarrot}
    //         size="xl"
    //         style={{ color: "#000000" }}
    //       />
    //     </div>
    //     <div>
    //       <FontAwesomeIcon
    //         icon={faCarrot}
    //         size="xl"
    //         style={{ color: "#000000" }}
    //       />
    //     </div>
    //     <div>
    //       <FontAwesomeIcon
    //         icon={faCarrot}
    //         size="xl"
    //         style={{ color: "#000000" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="justify-center flex w-1/3 bg-green-500">
    //     <img className="w-1/6" src={logo} alt="" />
    //   </div>
    //   <div className=" p-4 flex flex-wrap w-1/3 bg-yellow-500">
    //     <div>
    //       <input type="text" />
    //     </div>
    //     <div>
    //       <button>
    //         <FontAwesomeIcon icon={faMagnifyingGlass} />
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div class="grid grid-rows-4 gap-4">
      <div className="bg-blue-500">001</div>
      <div className="bg-blue-500">002</div>
      <div className="bg-blue-500">003</div>
      <div className="bg-blue-500">004</div>
      <div className="bg-blue-500">005</div>
      <div className="bg-blue-500">006</div>
      <div className="bg-blue-500">007</div>
      <div class="col-start-2 col-span-4 bg-red-500 ">01</div>
      <div className="bg-blue-500">006</div>
      <div className="bg-blue-500">006</div>
      <div class="col-start-1 col-end-3 bg-green-500">02</div>
      <div class="col-end-7 col-span-3 bg-yellow-500">03</div>
      <div class="col-start-1 col-end-7 bg-purple-500">04</div>
    </div>
  );
};

export default Home;
