import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteHorizontalScroll";
import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="pt-20" id="skills">
      <h1 className="heading">
        My <span className="text-blue-300">Skills</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards items={skills} speed="fast" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
