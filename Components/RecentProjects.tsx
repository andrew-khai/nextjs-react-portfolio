"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div className="pb-20" id="projects">
      <h1 className="heading">
        Here are some of my{" "}
        <span className="text-blue-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] sm:w-[570px] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-[90vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-[300px] h-[200px] sm:w-[465px] sm:h-[302px] rounded-lg"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
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
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-300">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#93C5DF" />
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