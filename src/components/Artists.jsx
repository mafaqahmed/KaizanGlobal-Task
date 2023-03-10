import React from "react";

const Artists = () => {
  return (
    <div
      id="artists"
      className="mb-40 font-sans flex w-headerW  mx-auto overflow-hidden items-center justify-center"
    >
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-20 md:space-y-0 max-w-7xl justify-center ">
        <div className="text-gray-400 flex-1 md:ml-16">
          <p className="text-white uppercase font-bold text-5xl md:text-6xl whitespace-nowrap mb-7">
            CERKA<br />STUDIOS
          </p>
          <p className="">
            The Meta Tiger team is dedicated to bringing awareness to and
            supporting the preservation of the critically endangered tiger. With
            just a few percent of the world's tigers left alive, this cause has
            never been more vital. …
          </p>
          <p className="my-8">
            As our passionate project grows, we plan to create a virtual
            Conservation Station where members can learn all there is to know
            about this incredible animal. It will be possible for Meta Tiger
            Society members to , support tiger organizations doing invaluable
            work worldwide, and even secure spots on educational trips to
            glimpse tigers in their natural habitats!
          </p>
          <p className="my-8">Together, let's make a roaring difference…</p>
          <button class="bg-yellow-500 hover:bg-white text-gray-900 py-3 px-12 rounded-full text-xs ease-in-out duration-300 uppercase">
            Button Text
          </button>
        </div>
        <div className="flex-1 w-full aspect-square bg-lightBlack rounded-md">
        </div>
      </div>
    </div>
  );
};

export default Artists;
