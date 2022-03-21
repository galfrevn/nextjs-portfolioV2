import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Footer } from "../components/Footer";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNpm,
  SiGithub,
  SiGit,
  SiUnity,
  SiPython,
  SiAdobephotoshop,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const skills = [
  {
    icon: SiHtml5,
    bg: "bg-[#f19e82]",
    text: "text-[#fff]",
  },
  {
    icon: SiCss3,
    bg: "bg-[#5393fe]",
    text: "text-[#fff]",
  },
  {
    icon: SiJavascript,
    bg: "bg-[#f3d686]",
    text: "text-[#ffffff]",
  },
  {
    icon: SiBootstrap,
    bg: "bg-[#B57BFF]",
    text: "text-[#fff]",
  },
  {
    icon: SiTailwindcss,
    bg: "bg-[#17B1B1]",
    text: "text-[#fff]",
  },
  {
    icon: SiReact,
    bg: "bg-[#9fd4ff]",
    text: "text-[#fff]",
  },
  {
    icon: SiNpm,
    bg: "bg-[#ff3e3e]",
    text: "text-[#fff]",
  },
  {
    icon: SiGit,
    bg: "bg-[#fff6f6]",
    text: "text-[#ff3e3e]",
  },
  {
    icon: SiGithub,
    bg: "bg-[#000]",
    text: "text-[#fff]",
  },
  {
    icon: SiUnity,
    bg: "bg-[#eeeeee]",
    text: "text-[#000]",
  },
  {
    icon: SiPython,
    bg: "bg-[#5393fe]",
    text: "text-[#fff]",
  },
  {
    icon: SiAdobephotoshop,
    bg: "bg-[#053c69]",
    text: "text-[#6bbcff]",
  },
  {
    icon: CgFigma,
    bg: "bg-[#B57BFF]",
    text: "text-[#fff]",
  },
];

export default function about() {
  return (
    <>
      <Head>
        <title>About | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | Work" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 p-6 md:grid md:grid-cols-2 md:gap-x-10 mb-10">
        <div>
          <h1 className="text-[#111010] text-[28px] md:text-5xl font-bold leading-[1.45] ">
            About
          </h1>
          <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
            Discover my strengths, hobbies and other stuffs 🔨.
          </p>

          <p className="text-[#777] leading-7 text-xs md:text-[16px] mt-10 ">
            Hello, thanks for getting here! I&apos;m very happy to be able to
            teach you a little more about me. My name is <b>Valentín Galfré</b>,
            I was born on July 10, 2002 in Santa Fe, Argentina. I am
            currentlycls 19 years old and I am studying{" "}
            <b>information systems engineering</b> 📕 at the National Litoral
            University. I love programming and computers ✨ from a very young
            age and I seek to dedicate myself to it. I like to design, edit and
            create. I love languages! I&apos;ve been studying English since I
            was 12 years old and now I&apos;m going for French. I completed my
            secondary studies at Technical School N°322 &quot;Obispo
            Gelabert&quot; with the <b>best average</b>. I love horror and
            adventure video games. 💙
          </p>

          <p className="text-[#777] leading-7 text-xs md:text-[16px] mt-10 ">
            As a recent graduated, I would love to be part of a company where I
            can apply my knowledge and at the same time, allow me to develop
            professionally. 👨🏻‍💻 I am an organized, self-taught person with great
            motivation; I am capable of adapting to any circumstance, always
            giving my best. ✨I <b>love programming and design</b>; I dream of
            developing as a professional developer. 🎭
          </p>

          <h1 className="text-[#111010] text-[28px] md:text-5xl font-bold leading-[1.45] mt-10 md:mt-16 ">
            Technologies
          </h1>
          <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
            Discover my strengths, hobbies and other stuffs 🔨.
          </p>

          <div className="mt-6 md:mt-12">
            <div className="mt-10">
              <div className="grid grid-cols-5 md:grid-cols-3 gap-4 md:gap-10 md:w-3/4 ">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${skill.bg} ${skill.text} flex items-center justify-center h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-md transition-all duration-200 hover:scale-110 `}
                  >
                    <skill.icon
                      className="h-6 w-6 md:w-10 md:h-10"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-[#777] leading-7 text-xs md:text-[16px] mt-10 md:mt-16 ">
            I consider myself a detailed person with great capacity for analysis
            and problem solving, capable of working and having good results as a
            team 🤝🏻. I love languages, I have a high level of English (B2 /
            C1) and I can start conversations fluently 🍕; I am currently
            studying French (A2) 🥐 .
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full pl-0 md:pl-10 mt-10 md:mt-0 space-y-5 md:space-y-7">

            <div className="border-[1px] border-[#d1d1d1] p-4 rounded-md ">
              <h1 className="text-[#111010] text-[28px] md:text-3xl font-bold leading-[1.45] ">
                Lin
              </h1>
              <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
                Discover my strengths, hobbies and other stuffs 🔨.
              </p>
            </div>

            <div className="border-[1px] border-[#d1d1d1] p-4 rounded-md ">
              <h1 className="text-[#111010] text-[28px] md:text-3xl font-bold leading-[1.45] ">
                Lin
              </h1>
              <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
                Discover my strengths, hobbies and other stuffs 🔨.
              </p>
            </div>

            <div className="border-[1px] border-[#d1d1d1] p-4 rounded-md ">
              <h1 className="text-[#111010] text-[28px] md:text-3xl font-bold leading-[1.45] ">
                Lin
              </h1>
              <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
                Discover my strengths, hobbies and other stuffs 🔨.
              </p>
            </div>

          </div>
        </div>
      </div>

      <footer className="pb-4 ">
        <Footer />
      </footer>
    </>
  );
}
