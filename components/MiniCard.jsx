/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-30px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const MiniCard = ({ project }) => {
  console.log(project);

  return (
    <Reveal
      keyframes={customAnimation}
      triggerOnce={true}
      delay={200}
      duration={500}
      cascade={2}
    >
      <Link href="/">
        <div className="card w-full relative md:cursor-pointer h-28 md:h-36 group rounded-lg border-b-[.5px] border-[1px] border-[#777] overflow-hidden ">
          <div className="flex flex-col px-2 pt-4 text-xs md:text-sm relative z-10">
            <h5 className="font-bold md:translate-x-2" >{project.title}</h5>
            <p className="text-[#777] md:translate-x-2 " >{project.description}</p>
          </div>

          <div className="absolute -right-6 -bottom-6 rounded-full transition-all duration-300 group-hover:w-20 group-hover:h-20 w-16 h-16 md:w-32 md:h-32 " style={{ backgroundColor: project.bgColor }} >

          </div>

          <a href={project.url} target="_blank" rel="noreferrer">
            <a className="group absolute md:left-4 left-2 md:bottom-3 bottom-2">
              <div className="flex items-center mt-6 ">
                <p className="text-[#111010] md:text-sm text-xs font-bold">
                  Visit the repo
                </p>
                <BsArrowRightShort className="ml-1 duration-200 group-hover:transform group-hover:translate-x-2" />
              </div>
            </a>
          </a>
        </div>
      </Link>
    </Reveal>
  );
};
