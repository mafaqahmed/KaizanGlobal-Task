import React from "react";

const RoadmapSlide = ({ phase, title, desc, bullets }) => {
  return (
    <div className="py-10 px-10 flex flex-col bg-lightBlack rounded-3xl space-y-10 max-w-md mx-4">
      <div className="uppercase font-extrabold text-white text-2xl">
        <span className="text-orange-600">{phase}</span> Phase
      </div>
      <div className="uppercase font-bold text-orange-600 text-lg">{title}</div>
      <p className="text-white">{desc}</p>
      <div>
        <ul>
          {bullets.map((item) => (
            <li style={{ color: "orange" }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapSlide;
