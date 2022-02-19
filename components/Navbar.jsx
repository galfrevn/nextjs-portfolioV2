import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const Navbar = ({ name, option1, option2 }) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  const [page, setPage] = useState("Home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 600);
    });
  }, [scroll]);

  useEffect(() => {
    router.pathname === "/works"
      ? setPage(() => "Works")
      : router.pathname === "/about"
      ? setPage(() => "About")
      : setPage(() => "Home");
  }, [router.pathname]);

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
        <div className="flex space-x-8 items-center text-[#111010] font-semibold text-[14px] ">
          <Link href="/works" passHref>
            <a>
              <p className={`${page === "Works" ? "text-[#73abff] bg-[#e3efff] px-2 py-1" : ""} `}>{option1}</p>
            </a>
          </Link>
          <Link href="/about" passHref>
            <a>
              <p className={`${page === "About" ? "text-[#DC6039] bg-[#FDE1D9] px-2 py-1" : ""} `} >{option2}</p>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
