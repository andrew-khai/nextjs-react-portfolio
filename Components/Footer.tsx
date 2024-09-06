import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { LinkPreview } from "./ui/LinkPreview";

const Footer = () => {
  return (
    <section className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Want me to help bring <span className="text-blue-300">your</span>{" "}
          projects and ideas to life?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out today and let&apos;s discuss how I can help you accomplish
          your goals.
        </p>
        <a href="mailto:1andrew.khai@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-y-2 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Andrew Chan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className={`w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ${profile.otherClasses}`}
            >
                <LinkPreview url={profile.link} isStatic imageSrc={profile.staticImg}>
                  <img
                    src={profile.img}
                    alt={profile.link}
                    width={20}
                    height={20}
                  />
                </LinkPreview>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
