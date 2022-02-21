/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import projects from "../../components/data";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

function ProjectPage() {
  return (
    <>
      <Head>
        <title> | Galfré Valentín Portfolio </title>
        <meta name="description" content={`Galfré Valentín portfolio | `} />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[20px] font-bold leading-[1.45] ">
          Crombie Webpage UI Clone
        </h1>
        <p className="text-[#777] mt-2 text-xs ">Galfré Valentín - ©2022</p>
        <p className="text-[#777] text-xs ">
          Take a look and discover how it works 🧪.
        </p>

        <div className="mt-12 mb-20">
          <p className="text-[13px] ">
            This is a short description of this item.
          </p>

          <div className="mt-12">
            <Image
              layout="responsive"
              width="100%"
              height={58}
              objectFit="cover"
              src="/study/test.jpg"
              alt="Crombie "
              quality={100}
              placeholder="blur"
              blurDataURL="/study/test.jpg"
              className="rounded-md"
            />
          </div>

          <h1 className="text-[#111010] text-[20px] mt-12 font-bold leading-[1.45] ">
            Overview
          </h1>
          <p className="text-[#777] mt-2 text-xs leading-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            architecto eum aperiam accusantium qui ipsam voluptates, unde
            voluptatibus temporibus at iure adipisci laudantium illum est
            expedita cum. Officiis itaque, sunt necessitatibus dolorum saepe
            commodi, veniam molestiae dignissimos laboriosam vel nemo!
          </p>

          <div className="mt-12">
            <Image
              layout="responsive"
              width="100%"
              height={58}
              objectFit="cover"
              src="/study/test.jpg"
              alt="Crombie "
              quality={100}
              placeholder="blur"
              blurDataURL="/study/test.jpg"
              className="rounded-md"
            />
          </div>

          <h1 className="text-[#111010] text-[20px] mt-12 font-bold leading-[1.45] ">
            Branding
          </h1>
          <p className="text-[#777] mt-2 leading-5 text-xs ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            architecto eum aperiam accusantium qui ipsam voluptates, unde
            voluptatibus temporibus at iure adipisci laudantium illum est
            expedita cum. Officiis itaque, sunt necessitatibus dolorum saepe
            commodi, veniam molestiae dignissimos laboriosam vel nemo!
          </p>
        </div>

        <p>here goes a slider</p>
      </div>

      <div className="flex mt-6 px-6 items-center ">
        <p className="text-[#111010] text-xs ">Get in touch</p>
      </div>

      <Link href={`/`} passHref>
        <a className="group">
          <div className="flex items-center px-6 mt-2 ">
            <p className="text-[#111010] text-xs font-bold">Go home</p>
            <BsArrowRightShort className="ml-1 duration-200 group-hover:transform group-hover:translate-x-2" />
          </div>
        </a>
      </Link>

      <footer className="pt-20 pb-4 ">
        <Footer />
      </footer>
    </>
  );
}

export default ProjectPage;
