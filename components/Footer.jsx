import React from "react";
import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="relative md:max-w-6xl md:mx-auto text-[#111010]">
      <div className="pl-6 pr-32 pb-20 ">
        <h1 className="font-extrabold text-xl mb-4">
          Now that you know me better, let&apos;s work together!
        </h1>
        <p className="text-xs ">
          Whether from scratch or in advanced stages, we can make it happen.
        </p>
        <button text="Get it touch" />
      </div>

      <div className="absolute right-0 top-0 space-y-7">
        <div className="bg-[#5393fe] w-16 h-10 "></div>
        <div className="bg-[#f19e82] w-16 h-10 "></div>
        <div className="bg-[#B57BFF] w-16 h-10 "></div>
        <div className="bg-[#17B1B1] w-16 h-10 "></div>
      </div>

      <div className="absolute left-6 bottom-4 ">
        <a
          href="https://linkedin.com/in/galfrevn"
          target="_blank"
          rel="noreferrer"
          className="hover:bg-blue-200"
        >
          <div className="flex items-center">
            <p className="text-[9px] ">Follow me on</p>
            <div className="w-12 ml-1 mb-1">
              <BsLinkedin className="mt-0.5 text-[#5393fe]" />
            </div>
          </div>
        </a>

        <p className="text-xs font-semibold">Made by Valentín Galfré</p>
      </div>
    </div>
  );
};
