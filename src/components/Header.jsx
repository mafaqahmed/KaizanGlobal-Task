import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-scroll";
import MobileMenu from "./MobileMenu";
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="border-red-700 shadow-sm z-40 rounded-full text-white border-2 w-headerW fixed top-3 right-0 left-0 bg-myblack uppercase"
      style={{ left: "50%", transform: "translate(-50%, 0)" }}
    >
      <div className="flex justify-between items-center px-3">
        <div>
          <Link to="welcome">
          <img
            src="https://assets.website-files.com/621d66c640897d5ae151fecd/624b2493dc4e8f6bb83f225e_Logo%20Vector.png"
            alt="Logo"
            className="h-12 cursor-pointer my-2"
          />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-8 items-center">
            <li>
              <BsTwitter className="text-white text-lg cursor-pointer" />
            </li>
            <li>
              <BsInstagram className="text-white text-lg cursor-pointer" />
            </li>
            <li>
              <FaDiscord className="text-white text-lg cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-7 items-center">
            <li
              className="px-2 text-xs cursor-pointer"
            >
              <Link to="welcome" activeClass="text-red-400" spy={true} smooth={true} offset={-100}  duration={700}>welcome</Link>
            </li>
            <li
              className="px-2 text-xs cursor-pointer"
            >
              <Link to="about" activeClass="text-red-400" spy={true} smooth={true} offset={-100}   duration={700}>about</Link>
            </li>
            <li
              className="px-2 text-xs cursor-pointer"
            >
              <Link to="artists" activeClass="text-red-400" spy={true} smooth={true} offset={-100}  duration={700}>artists</Link>
            </li>
            <li
              className="px-2 text-xs cursor-pointer"
            >
              <Link to="roadmap" activeClass="text-red-400" spy={true} smooth={true} offset={-100}  duration={700}>roadmap</Link>
            </li>
            <li
              className="px-2 text-xs cursor-pointer"
            >
              <Link to="team" activeClass="text-red-400" spy={true} smooth={true}  offset={-100}  duration={700}>team</Link>
            </li>
            <li
              className="px-2 text-xs cursor-pointer"
            >
              <Link to="faq" activeClass="text-red-400" spy={true} smooth={true} offset={-100}   duration={700}>faq</Link>
            </li>
            <li>
              <button class="bg-yellow-500 hover:bg-white text-black py-3 px-12 rounded-full text-xs uppercase ease-in-out duration-300">
                mint
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden py-3 text-2xl">
          <span className="sr-only">Open menu</span>
          <BiMenu
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          />
        </div>
      </div>
      <div className="fixed top-24 right-10 block md:hidden">
      {mobileMenu && (
        <MobileMenu />
      )}
      </div>
    </header>
  );
}
