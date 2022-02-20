import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    tag: "Frontend",
    title: "(VNBlog) NextJS, TailwindCSS & GraphCMS Blog",
    description: (
      <>
        <p>VNBlog is a Simple blog Application</p>
        <strong>Simple blog Application</strong>
        <p>made with NextJS, Tailwind CSS and GraphCMS as Content Manager.📰</p>
      </>
    ),
    img: "/mercado.jpg",
    slug: "a",
  },
  {
    tag: "Fullstack",
    title: "(Magasin) Vanilla JavaScript Ecommerce Website",
    description: (
      <>
        <p>
          Magasin is a Fullstack <strong>Ecommerce</strong>, made for a school
          project with <strong>Vanilla</strong>JavaScript, NodeJS, Express &
          MongoDB
        </p>
      </>
    ),
    img: "/crombie.jpg",
    slug: "b",
  },
  {
    tag: "Frontend",
    title: "(VNSearch) React Google Search Clone",
    description: (
      <>
        <p>
          VNSearch is a Google Search Clone made with{" "}
          <strong>ReactJS, Tailwind CSS</strong> and a <strong>RapidAPI</strong>
        </p>

        <p> Google Search Clone 🔎</p>
      </>
    ),
    img: "/2d.jpg",
    slug: "b",
  },
];

export default function works() {
  return (
    <>
      <Head>
        <title>Work | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | Work" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-2xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[28px] font-bold leading-[1.45] ">
          My works
        </h1>
        <p className="text-[#777] text-xs ">
          Take a look to some of my personal projects!
        </p>

        <div className="mt-12 mb-20">
          <div className="mt-2">
            <div className="space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
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
