/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper";
import "swiper/css";

const images = [
  {
    src: "/study/magasin/a.jpg",
  },
  {
    src: "/study/magasin/b.jpg",
  },
  {
    src: "/study/magasin/c.jpg",
  },
  {
    src: "/study/magasin/d.jpg",
  },
  {
    src: "/study/magasin/e.jpg",
  },
  {
    src: "/study/magasin/f.jpg",
  },
  {
    src: "/study/magasin/g.jpg",
  },
  {
    src: "/study/magasin/h.jpg",
  },
  {
    src: "/study/magasin/i.jpg",
  },
  {
    src: "/study/magasin/j.jpg",
  },
  {
    src: "/study/magasin/k.jpg",
  },
];

const features = [
  {
    name: "Vanilla JavaScript",
    description:
      "Is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
    icon: SiJavascript,
    bg: "bg-[#fffae0]",
    text: "text-[#e6cf6c]",
  },
  {
    name: "Bootstrap",
    description:
      "Is a React Based framework with server side rendering capability. It is very fast and SEO friendly. Has an automatic routing and gives a lot of features",
    icon: SiBootstrap,
    bg: "bg-[#f3ebff]",
    text: "text-[#B57BFF]",
  },
  {
    name: "NodeJS",
    description:
      "Is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
    icon: SiNodedotjs,
    bg: "bg-[#edfceb]",
    text: "text-[#97cc8d]",
  },
  {
    name: "ExpressJS",
    description:
      "Is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
    icon: SiExpress,
    bg: "bg-[#EEE]",
    text: "text-black",
  },
  {
    name: "MongoDB - Mongoose",
    description:
      "Is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
    icon: SiMongodb,
    bg: "bg-[#e1f8f8]",
    text: "text-[#17B1B1]",
  },
];

function ProjectPage() {
  return (
    <>
      <Head>
        <title> Case study (Magasin) | Galfré Valentín Portfolio </title>
        <meta name="description" content={`Galfré Valentín portfolio | Magasin`} />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 px-6 pt-6">

        <Link
          href={`/works`}
          passHref
        >
          <a className="group">
            <div className="flex items-center mb-6 ">
              <BsArrowLeftShort className="duration-200 group-hover:transform group-hover:-translate-x-2" />
              <p className="text-[#111010] ml-1 text-xs font-semibold">Return</p>
            </div>
          </a>
        </Link>

        <h1 className="text-[#111010] text-[20px] font-bold leading-[1.45] ">
          Magasin | Vanilla JavaScript Fullstack Ecommerce
        </h1>
        <p className="text-[#777] mt-2 text-xs ">Galfré Valentín - ©2022</p>
        <p className="text-[#777] text-xs ">
          Take a look and discover how it works 🧪.
        </p>

        <div className="my-12">
          <div className="mt-12">
            <Image
              layout="responsive"
              width="100%"
              height={58}
              objectFit="cover"
              src="/study/magasin.jpg"
              alt="Crombie "
              quality={100}
              placeholder="blur"
              blurDataURL="/study/magasin.jpg"
              className="rounded-md"
            />
          </div>

          <h1 className="text-[#111010] text-[20px] mt-12 font-bold leading-[1.45] ">
            Overview
          </h1>
          <p className="text-[#777] mt-2 text-xs leading-5">
            Magasin is a <b>Fullstack Responsive E-commerce Web Application</b> made with the <b>MERN</b> stack 👕
            With 
          </p>

          <p className="text-[#777] mt-8 text-xs leading-5">
            This project was build using 🔨
          </p>

          <div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div
                        className={`${feature.bg} ${feature.text} absolute flex items-center justify-center h-12 w-12 rounded-md `}
                      >
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-[13px] leading-6 font-bold text-[#111010] ">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-xs leading-5 text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
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

        <h1 className="text-[#111010] text-[20px] font-bold leading-[1.45] ">
          Galery
        </h1>
        <p className="text-[#777] text-xs mb-5">Take a better look.</p>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          mousewheel={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Mousewheel]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full relative h-80 border-[.5px] rounded-xl">
                <Image
                  src={img.src}
                  alt={`Slide ${index}`}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={img.src}
                  className="rounded-xl "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="text-[#777] mt-12  text-xs px-6 mb-2">
        Test it by yourself ✨
      </p>
      <div className="flex px-6 space-x-4 items-center ">
        <Link
          href={"https://github.com/galfrevn/nextjs-mercadolibre"}
          passHref
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="text-[12px] bg-black font-semibold hover:bg-[#222] transitiona-all duration-300  text-white py-3 px-6 "
          >
            Github repo
          </a>
        </Link>
        <Link href={"https://vnmeli.netlify.app"} passHref>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-[12px] bg-[#f4e4da] font-semibold transitiona-all duration-300 text-[#fffff8]  py-3 px-6 "
          >
            Live demo
          </a>
        </Link>
      </div>

      <footer className="pt-20 pb-4 ">
        <Footer />
      </footer>
    </>
  );
}

export default ProjectPage;
