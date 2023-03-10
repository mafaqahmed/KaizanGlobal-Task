import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="my-40 font-sans flex items-center w-headerW mx-auto overflow-hidden"
    >
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-20 md:space-y-0 items-center justify-center">
        <div className="flex-1 flex w-full">
          <div className="w-full mr-10">
            <div className="w-full bg-lightBlack rounded-md aspect-square mb-10"></div>
            <div className="w-full bg-lightBlack rounded-md aspect-square"></div>
          </div>
          <div className="w-full">
            <div className="w-full bg-lightBlack rounded-md aspect-square mb-10"></div>
            <div className="w-full bg-lightBlack rounded-md aspect-square"></div>
          </div>
        </div>
        <div
          className="text-gray-400 flex-1"
          style={{
            backgroundImage:
              "url(https://assets.website-files.com/621d66c640897d5ae151fecd/6241fc6c8fc7f081b0af0f33_claws.svg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
          }}
        >
          <p className="text-white uppercase font-bold text-5xl md:text-6xl whitespace-nowrap mb-7">
            Meta tigers
          </p>
          <p className="md:pr-40">
            The Meta Tiger team is dedicated to bringing awareness to and
            supporting the preservation of the critically endangered tiger. With
            just a few percent of the world's tigers left alive, this cause has
            never been more vital. …
          </p>
          <p className="my-8 md:pr-40">
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
      </div>
    </div>
  );
};

export default About;
