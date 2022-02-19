import Link from "next/link";
import React from "react";

export const Navbar = ({ name, option1, option2 }) => {
  return (
    <nav>
      <div className="h-32 flex items-center justify-between px-7 w-screen bg-white border-b-black border-b-2">
        <Link href="/">
          <h1 className="font-semibold text-[14px] text-blue-500">{name} </h1>
        </Link>
        <div className="flex space-x-8 text-[#111010] font-semibold text-[14px] ">
          <Link href="/other">
            <p>{option1}</p>
          </Link>
          <p>{option2}</p>
        </div>
      </div>
    </nav>
  );
};
