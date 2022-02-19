import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
          ? "fixed -bottom-20 transition-all duration-1000 left-0 bg-[rgba(255,255,255,.95)] py-2.5 w-full px-8"
          : "fixed transition-all duration-1000 bottom-0 left-0 bg-[rgba(255,255,255,.95)] py-2.5 w-full px-8"
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ArrowCircleDownIcon className="w-5 h-5 text-[#111010] " />
          <p className="text-xs ml-2 text-[#111010]">Scroll</p>
        </div>
        <Link href="/contact" passHref>
          <a>
            <h3 className="text-[11px] text-[#111010] font-bold">
              Let&apos;s talk
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
};
