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
  SiAdobephotoshop,
  SiTypescript,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TiArrowDown } from "react-icons/ti";

const skills = [
  {
    icon: SiHtml5,
    bg: "bg-[#ffd1c3]",
    text: "text-[#fff]",
  },
  {
    icon: SiCss3,
    bg: "bg-[#C3E9FF]",
    text: "text-[#fff]",
  },
  {
    icon: SiJavascript,
    bg: "bg-[#FFEFC3]",
    text: "text-[#ffffff]",
  },
  {
    icon: SiTypescript,
    bg: "bg-[#C3D8FF]",
    text: "text-[#fff]",
  },
  {
    icon: SiBootstrap,
    bg: "bg-[#D1C3FF]",
    text: "text-[#fff]",
  },
  {
    icon: SiTailwindcss,
    bg: "bg-[#C3FFEF]",
    text: "text-[#fff]",
  },
  {
    icon: SiReact,
    bg: "bg-[#C3EFFF]",
    text: "text-[#fff]",
  },
  {
    icon: SiNpm,
    bg: "bg-[#FFC6C3]",
    text: "text-[#fff]",
  },
  {
    icon: SiGit,
    bg: "bg-[#C3FFDD]",
    text: "text-[#fff]",
  },
  {
    icon: SiGithub,
    bg: "bg-[#DBC3FF]",
    text: "text-[#fff]",
  },
  {
    icon: SiUnity,
    bg: "bg-[#E7E7E7]",
    text: "text-[#fff]",
  },
  {
    icon: SiAdobephotoshop,
    bg: "bg-[#C3D0FF]",
    text: "text-[#fff]",
  },
  {
    icon: CgFigma,
    bg: "bg-[#EFC3FF]",
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
            giving my best. I <b>love programming and design</b> 🎊
          </p>

          <h1 className="text-[#111010] text-[28px] md:text-5xl font-bold leading-[1.45] mt-10 md:mt-16 ">
            Technologies
          </h1>
          <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
            I have good knowledge in 🧠
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
            I recently got my first official job as Frontend Developer 🥳 at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-[#5393fe]"
              href="https://linkedin.com/company/crombie"
            >
              Crombie
            </a>
            . On it, I work every day with a team of developers and designers to
            bring to life new projects and improve existing ones. I work with
            multiple technologies and languages, as <b>ReactJS</b>,{" "}
            <b>TypeScript</b>, <b>React Native</b> and <b>Jest</b>.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full pl-0 md:pl-10 mt-10 md:mt-0">
            <h1 className="text-[#111010] text-[28px] md:text-5xl font-bold leading-[1.45] ">
              Who I Am?
            </h1>
            <p className="text-[#777] text-xs md:text-[16px] mt-2 ">
              Another point of view 🐱‍👤
            </p>

            <div className="mt-10">
              <Image
                layout="responsive"
                width="100px"
                height={62}
                src="https://media2.giphy.com/media/1GEATImIxEXVR79Dhk/giphy.gif?cid=ecf05e47s4eu8pty0v18v0k9g7nqma9vkimiciehm23chuq7&rid=giphy.gif&ct=g"
                alt="Galfrevn"
                placeholder="blur"
                blurDataURL="https://media2.giphy.com/media/1GEATImIxEXVR79Dhk/giphy.gif?cid=ecf05e47s4eu8pty0v18v0k9g7nqma9vkimiciehm23chuq7&rid=giphy.gif&ct=g"
              />
            </div>

            <div className="flex items-center mt-10">
              <p className="text-[#777] leading-7 text-xs md:text-[16px] ">
                This is me!
              </p>
              <TiArrowDown className="w-5 h-5 ml-1 text-[#777]" />
            </div>

            <p className="text-[#777] leading-7 text-xs md:text-[16px]  ">
              Valentín Galfré is a young Argentinian guy who wants to
              share his creations. He is interested in frontend web development
              and technology. He realy loves breaking goals, and next one is
              working as a developer. 😅 He can spend hours and hours listening
              to clasic rock-pop🎸. He also created some videogames, go play
              them in Itch.io 🎮.
            </p>

            <p className="text-[#777] leading-7 text-xs md:text-[16px] mt-10"></p>
          </div>
        </div>
      </div>

      <footer className="pb-4 pt-0 md:pt-14">
        <Footer />
      </footer>
    </>
  );
}
