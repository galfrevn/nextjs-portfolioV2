/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import projects from "../../components/data";
import { BsArrowRightShort, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

function ProjectPage() {
  const router = useRouter();
  const slug = router.query.slug;

  const [product, setProduct] = useState([projects[0]]);

  useEffect(() => {
        slug === "crombie"
      ? setProduct(() => projects[0])
      : slug === "mercadolibre"
      ? setProduct(() => projects[1])
      : slug === "google-search"
      ? setProduct(() => projects[2])
      : slug === "instagram"
      ? setProduct(() => projects[3])
      : slug === "magasin"
      ? setProduct(() => projects[4])
      : setProduct(() => projects[0]);
  }, [product]);

  return (
    <>
      <Head>
        <title> {product.title} | Galfré Valentín Portfolio </title>
        <meta name="description" content={`Galfré Valentín portfolio | `} />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[20px] font-bold leading-[1.45] ">
          {product.title}
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
            <img src={product.img} alt={product.title} className="rounded-md" />
          </div>

          <h1 className="text-[#111010] text-[20px] mt-12 font-bold leading-[1.45] ">
            Overview
          </h1>
          <p className="text-[#777] mt-2 text-xs leading-5">
            {product.shortDescription} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quam architecto eum aperiam accusantium qui ipsam
            voluptates, unde voluptatibus temporibus at iure adipisci laudantium
            illum est expedita cum. Officiis itaque, sunt necessitatibus dolorum
            saepe commodi, veniam molestiae dignissimos laboriosam vel nemo!
          </p>

          <div className="mt-12">
            <img src={product.img} alt={product.title} className="rounded-md" />
          </div>

          <h1 className="text-[#111010] text-[20px] mt-12 font-bold leading-[1.45] ">
            Branding
          </h1>
          <p className="text-[#777] mt-2 leading-5 text-xs ">
            {product.shortDescription} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quam architecto eum aperiam accusantium qui ipsam
            voluptates, unde voluptatibus temporibus at iure adipisci laudantium
            illum est expedita cum. Officiis itaque, sunt necessitatibus dolorum
            saepe commodi, veniam molestiae dignissimos laboriosam vel nemo!
          </p>
        </div>

          <p>here goes a slider</p>

      </div>

      <div className="flex mt-6 px-6 items-center ">
        <p className="text-[#111010] text-xs ">Get in touch</p>
        
      </div>

      <Link href={`/`} as={product.slug} passHref>
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
