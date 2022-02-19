import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navbar = ({ name, option1, option2 }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 600);
    });
  }, [scroll]);

  return (
    <nav>
      <div
        className={`
          ${
            scroll ? "fixed z-20 top-0" : "absolute mt-10 top-0 bg-transparent"
          } h-14 flex items-center justify-between w-full px-7 bg-[rgba(255,255,255,.98)] transition-all duration-300 `}
      >
        <Link href="/" passHref>
          <a>
            <h1 className="font-semibold text-[14px] text-[#5393fe] ">
              {name}
            </h1>
          </a>
        </Link>
        <div className="flex space-x-8 text-[#111010] font-semibold text-[14px] ">
          <Link href="/other" passHref>
            <a>
              <p>{option1}</p>
            </a>
          </Link>
          <p>{option2}</p>
        </div>
      </div>
    </nav>
  );
};
