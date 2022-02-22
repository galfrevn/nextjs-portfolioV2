import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import projects from '../components/data'

export default function works() {
  return (
    <>
      <Head>
        <title>Work | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | Work" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] md:text-5xl text-[28px] font-bold leading-[1.45] ">
          My works
        </h1>
        <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
          Take a look to some of my personal projects 📚!
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
