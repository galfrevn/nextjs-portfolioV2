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
    <Reveal
      keyframes={customAnimation}
      triggerOnce={true}
      delay={300}
      duration={300}
      cascade={2}
    >
      <Link href={`${project.slug}?title=${project.title}`} as={project.slug}>
        <div className="card w-full md:cursor-pointer bg-white md:grid md:grid-cols-2 h-full duration-300 transition-all overflow-hidden group hover:-translate-y-2 border-b-[.5px] md:border-none  ">
          <Image
            layout="responsive"
            width="100%"
            height={58}
            quality={65}
            objectFit="cover"
            src={project.img}
            alt={project.title}
            placeholder="blur"
            blurDataURL={project.img}
            className="rounded-md"
          />
          <div className="pb-10 md:ml-8 md:flex md:h-full md:justify-center md:flex-col pt-6">
            <span
              className={` ${
                project.tag === "Fullstack"
                  ? "bg-[#ffefea] text-[#f19e82]"
                  : "bg-[#ecf4ff] text-[#5393fe] "
              } text-xs md:text-[16px] font-semibold md:w-[100px] rounded-md px-2 py-1 md:px-3 md:py-2 `}
            >
              {project.tag}
            </span>
            <h1 className="text-[#111010] md:text-3xl my-4 text-xl font-bold">
              {project.title}
            </h1>
            <div className="text-sm text-[#111010] leading-6 md:text-[16px] ">
              {project.description}
            </div>
            <Link
              href={`${project.slug}?title=${project.title}`}
              as={project.slug}
              passHref
            >
              <a className="group">
                <div className="flex items-center mt-6 ">
                  <p className="text-[#111010] md:text-sm text-xs font-bold">
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