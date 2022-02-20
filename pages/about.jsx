import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";

export default function about() {
  return (
    <>
      <Head>
        <title>About | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | About" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-2xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[28px] font-bold leading-[1.45] ">
          About Me
        </h1>
        <p className="text-[#777] text-xs ">
          Discover my strengths, hobbies and other stuffs 🔨.
        </p>

        <div className="mt-12 mb-20">
          
        </div>
      </div>
      <footer className="pb-4 ">
        <Footer />
      </footer>
    </>
  );
}
