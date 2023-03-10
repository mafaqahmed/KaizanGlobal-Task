import React from "react";
import Slider from "./Slider";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className=" mb-40 font-sans flex items-center justify-center w-full mx-auto relative overflow-x-hidden"
    >
        <div className="flex flex-col items-center justify-center">
        <div className="text-gray-400 flex flex-col space-y-14 max-w-4xl justify-center items-center mt-20 md:flex-row md:space-x-24 md:space-y-0">
          <p className="text-white uppercase font-bold text-6xl whitespace-nowrap">
            Roadmap
          </p>
          <p className="md:w-full w-sm">
            Join us from the first step in our roar-some adventure to educate
            the world about the plight of the tiger and support their vital
            preservation!
          </p>
        </div>
        <div className="mt-20">
          <Slider />
        </div>
        </div>
      <img
        src="https://assets.website-files.com/621d66c640897d5ae151fecd/624788555668010271b33cd2_Asset%203.svg"
        alt=""
        className="w-full h-96 opacity-50 absolute right-0 left-0"
        style={{ transform: "rotate(180deg) scale(1.2)", top: '-30px', zIndex:'-1'}}
      />
    </div>
    
  );
};

export default Roadmap;
