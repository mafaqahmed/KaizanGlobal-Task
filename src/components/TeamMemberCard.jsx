import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const TeamMemberCard = ({desc}) => {
  return (
    <div className="w-full font-sans text-white">
      <div className="w-full flex flex-col space-y-5 justify-center items-center">
        <div className="w-full aspect-square rounded-full bg-lightBlack"></div>
        <p className={`uppercase ${desc && 'text-3xl'} font-extrabold ${!desc && 'text-lg'}`}>name</p>
        <p className={`uppercase ${desc && 'text-xl'} font-bold ${!desc && 'text-md'}`}>position</p>
        {desc &&
        <>

        <p className="text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus,
        </p>
        <div>
        <ul className="flex space-x-8 items-center">
            <li>
              <BsTwitter className="text-orange-600 text-xl" />
            </li>
            <li>
              <BsInstagram className="text-orange-600 text-xl" />
            </li>
            <li>
              <FaDiscord className="text-orange-600 text-xl" />
            </li>
          </ul>
        </div>
        </>}
      </div>
    </div>
  );
};

export default TeamMemberCard;
