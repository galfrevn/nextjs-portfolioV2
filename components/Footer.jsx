import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  
  const handleClick = () => {
    const lines = document.querySelectorAll(".line")
    lines.forEach(line => {
      line.classList.toggle("w-20")
    });
  }

  return (
    <div className="relative">
      <div className="relative md:h-96 md:max-w-6xl h-[280px] md:mx-auto text-[#111010]">
        <div className="pl-6 pr-20 md:pr-32 pb-20 ">
          <h1 className="font-extrabold md:text-4xl xl:text-5xl md:w-4/5 md:leading-[1.45] text-xl mb-4">
            Now that you know me better, let&apos;s work together!
          </h1>
          <p className="text-xs md:text-[16px]">
            Whether it&apos;s for small or large projects, I can lend a hand.
          </p>
          <button aria-label="Get in touch" text="Get in touch" />
          <Link href="/contact" passHref>
            <button onClick={handleClick} className="py-2 px-6 flex md:px-8 md:py-3 bg-[#5393fe] transition-all duration-300 hover:bg-[#9ec5ff] space-x-2 ">
              <p className="text-xs md:text-xl font-semibold text-white ">
                Hire me
              </p>
            </button>
          </Link>
        </div>

        <div className="absolute left-6 bottom-1 ">
          <a
            href="https://linkedin.com/in/galfrevn"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-blue-200"
          >
            <div className="flex items-center">
              <p className="text-[9px] md:text-[16px] ">Follow me on</p>
              <div className="w-12 ml-1 mb-1">
                <BsLinkedin className="mt-0.5 text-[#5393fe]" />
              </div>
            </div>
          </a>

          <p className="text-xs font-semibold md:text-lg ">
            Made by Valentín Galfré
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 space-y-7">
        <div className="bg-[#5393fe] transition-all duration-500 md:w-40 w-16 md:h-[71px] h-12 line"></div>
        <div className="bg-[#f19e82] transition-all duration-500 md:w-40 w-16 md:h-[71px] h-12 line"></div>
        <div className="bg-[#B57BFF] transition-all duration-500 md:w-40 w-16 md:h-[71px] h-12 line"></div>
        <div className="bg-[#17B1B1] transition-all duration-500 md:w-40 w-16 md:h-[71px] h-12 line"></div>
      </div>
    </div>
  );
};
