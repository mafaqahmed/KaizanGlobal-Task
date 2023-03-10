import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <div
      id="team"
      className="mb-40 font-sans flex items-center justify-center w-headerW mx-auto overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center space-y-20">
        <div className=" w-full text-gray-400 flex flex-col space-y-5 max-w-5xl md:justify-center md:items-center md:space-x-14 md:flex-row md:space-y-0">
          <p className="text-white text-4xl uppercase font-bold md:text-6xl whitespace-nowrap">
            META TIGER TEAM
          </p>
          <p className="whitespace-normal" style={{wordBreak: 'normal'}}>
            Join us from the first step in our roar-some adventure to educate
            the world about the plight of the tiger and support their vital
            preservation!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <TeamMemberCard desc={true} className/>
          <TeamMemberCard desc={true}/>
          <TeamMemberCard desc={true}/>
          <TeamMemberCard desc={true}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 w-full">
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
        </div>
        {/* <div className="flex space-x-10 justify-evenly w-full"> */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10 w-full">
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
          <TeamMemberCard desc={false}/>
        </div>
      </div>
    </div>
  );
};

export default Team;
