import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="pb-20" id="projects">
      <h1 className="heading">
        Here are some of my{" "}
        <span className="text-blue-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] sm:w-[570px] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-[90vw]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="z-10 absolute bottom-0 w-[465px] h-[302px] rounded-lg"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-300">Check live site</p>
                  <FaLocationArrow className="ms-3" color="#93c5fd" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
