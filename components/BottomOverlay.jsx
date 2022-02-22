import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'

export const BottomOverlay = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, [scroll]);

  return (
    <div
      className={
        scroll
          ? "fixed -bottom-20 transition-all duration-1000 left-0 backdrop-blur-sm bg-[rgba(255,255,255,.95)] py-2.5 md:py-4 px-7 w-full "
          : "fixed transition-all duration-1000 bottom-0 left-0 backdrop-blur-sm bg-[rgba(255,255,255,.95)] py-2.5 md:py-4 px-7 w-full "
      }
    >
      <div className="flex md:max-w-6xl md:mx-auto items-center md:justify-end justify-between">
        <div className="flex items-center md:hidden ">
          <ArrowCircleDownIcon className="w-5 h-5 text-[#111010] " />
          <p className="text-xs ml-2 text-[#111010]">Scroll</p>
        </div>
        <Link href="/contact" passHref>
          <a>
            <h3 className="text-[11px] md:hidden text-[#111010] font-bold">
              Let&apos;s talk
            </h3>
            <div className="hidden md:flex space-x-3 items-center pr-6">
              <h3 className=" text-lg mr-3 text-[#111010] font-semibold">
                Find me on
              </h3>
              <SiLinkedin className="w-6 h-6 text-[#302f2f]" />
              <RiInstagramFill className="w-7 h-7 text-[#302f2f] " />
              <SiGithub className="w-[26px] h-[26px] text-[#302f2f] " />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
