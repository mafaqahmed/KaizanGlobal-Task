import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 overflow-hidden">
      <div>
        <img
          src="https://assets.website-files.com/621d66c640897d5ae151fecd/624b2493dc4e8f6bb83f225e_Logo%20Vector.png"
          alt="Logo"
          className="h-24 cursor-pointer my-2 opacity-50"
        />
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-10 sm:grid-cols-6 text-white uppercase">
          <li className="px-2  cursor-pointer">
            <p className="text-center">welcome</p>
          </li>
          <li className="px-2 cursor-pointer">
            <p className="text-center">about</p>
          </li>
          <li className="px-2 cursor-pointer">
            <p className="text-center">artists</p>
          </li>
          <li className="px-2 cursor-pointer">
            <p className="text-center">roadmap</p>
          </li>
          <li className="px-2 cursor-pointer">
            <p className="text-center">team</p>
          </li>
          <li className="px-2 cursor-pointer">
            <p className="text-center">faq</p>
          </li>
        </ul>
      </div>
      <div>
        <button class="bg-yellow-500 hover:bg-white text-gray-900 py-3 px-12 rounded-full text-xs ease-in-out duration-300 uppercase">
          Join Discord
        </button>
      </div>
      <div className="bg-yellow-500 w-full">
        <p className="text-center text-xs py-3">
          META TIGER SOCIETY - ALL RIGHTS RESERVED | DESIGN BY CERKA
        </p>
      </div>
    </div>
  );
};

export default Footer;
