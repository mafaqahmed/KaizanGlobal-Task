import React from "react";
import { Link } from "react-scroll";

const MobileMenu = () => {
  return (
    <div>
      <ul className="flex flex-col space-y-7 items-center">
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-lightBlack">
          <Link
            to="welcome"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            welcome
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-lightBlack">
          <Link
            to="about"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            about
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-lightBlack">
          <Link
            to="artists"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            artists
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-lightBlack">
          <Link
            to="roadmap"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            roadmap
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-lightBlack">
          <Link
            to="team"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            team
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-lightBlack">
          <Link
            to="faq"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            faq
          </Link>
        </li>
        <li>
          <button class="bg-yellow-500 hover:bg-white text-black w-40 text-center py-3 rounded-full text-xs uppercase ease-in-out duration-300">
            mint
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
