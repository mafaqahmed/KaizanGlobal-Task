import React from "react";

const Welcome = () => {
  return (
    <div
      id="welcome"
      className="h-screen font-sans flex items-center w-headerW mx-auto justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://assets.website-files.com/621d66c640897d5ae151fecd/6241fba5a34132260c0595d7_head.svg)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 justify-center max-w-5xl">
      <div>
        <p className="text-white uppercase font-bold text-5xl md:text-6xl whitespace-nowrap">
          Welcome to <br /> meta tigers
        </p>
      </div>
      <div className="text-gray-400">
        <p>
          Welcome to Meta Tiger Society, where an exclusive collection of 5,555
          hand-drawn NFT tigers prowl the Ethereum blockchain...
        </p>
        <p className="my-8">
          Celebrate the natural majesty of the tiger, support the protection of
          this critically endangered animal, and benefit from a range of
          incredible utilities by joining the Meta Tiger movement today!.
        </p>
        <button class="bg-yellow-500 hover:bg-white text-gray-900 py-3 px-12 rounded-full text-xs ease-in-out duration-300 uppercase">
          Join Discord
        </button>
      </div>
      </div>
    </div>
  );
};

export default Welcome;
