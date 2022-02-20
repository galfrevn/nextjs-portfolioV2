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

export const ProjectCard = (project) => {
  return (
    <Reveal keyframes={customAnimation} triggerOnce={true} delay={300} duration={300} cascade={2} >
      <Link href={project.slug} >
        <div className="card w-full bg-white rounded-sm duration-300 transition-all overflow-hidden group hover:-translate-y-2 border-b-[.5px]  " >
          <Image
            layout="responsive"
            width="100%"
            height={61}
            src={project.img}
            alt={project.title}
            quality={100}
            placeholder="blur"
            blurDataURL={project.img}
          />
          <div className="py-10 px-6">
            <span className="text-xs font-semibold text-[#A9AAAB]">
              {project.tag}
            </span>

            <h1 className="text-[#111010] my-4 text-xl font-bold">
              {project.title}
            </h1>
            <div className="text-sm text-[#111010] leading-6">
              {project.description}
            </div>
            <Link href={project.slug} passHref>
              <a className="group">
                <div className="flex items-center mt-6 ">
                  <p className="text-[#111010] text-xs font-bold">
                    More details
                  </p>
                  <BsArrowRightShort className="ml-1 duration-200 group-hover:transform group-hover:translate-x-2" />
                </div>
              </a>
            </Link>
          </div>
        </div>
        </Link>
    </Reveal>
  );
};
