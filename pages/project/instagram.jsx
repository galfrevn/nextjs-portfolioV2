/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper";
import "swiper/css";

const images = [
  {
    src: "/study/instagram/a.jpg",
  },
  {
    src: "/study/instagram/b.jpg",
  },
  {
    src: "/study/instagram/c.jpg",
  },
  {
    src: "/study/instagram/d.jpg",
  },
  {
    src: "/study/instagram/e.jpg",
  },
  {
    src: "/study/instagram/f.jpg",
  },
  {
    src: "/study/instagram/g.jpg",
  },
  {
    src: "/study/instagram/h.jpg",
  },
  {
    src: "/study/instagram/i.jpg",
  },
];

const features = [
  {
    name: "React",
    description:
      "Is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
    icon: SiReact,
    bg: "bg-[#ecf4ff]",
    text: "text-[#5393fe]",
  },
  {
    name: "Next.JS",
    description:
      "Is a React Based framework with server side rendering capability. It is very fast and SEO friendly. Has an automatic routing and gives a lot of features",
    icon: SiNextdotjs,
    bg: "bg-[#ffefea]",
    text: "text-[#f19e82]",
  },
  {
    name: "TailwindCSS",
    description:
      "Is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
    icon: SiTailwindcss,
    bg: "bg-[#e1f8f8]",
    text: "text-[#17B1B1]",
  },
];

function ProjectPage() {
  return (
    <>
      <Head>
        <title> Case study (Instagram) | Galfré Valentín Portfolio </title>
        <meta name="description" content={`Galfré Valentín portfolio | `} />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 px-6 pt-6">
        <Link href={`/works`} passHref>
          <a className="group">
            <div className="flex items-center mb-6 ">
              <BsArrowLeftShort className="duration-200 md:w-6 md:h-6 group-hover:transform group-hover:-translate-x-2" />
              <p className="text-[#111010] ml-1 text-xs font-semibold md:text-[16px] ">
                Return
              </p>
            </div>
          </a>
        </Link>

        <h1 className="text-[#111010] text-[20px] md:text-4xl font-bold leading-[1.45] ">
          Instagram NextJS + TailwindCSS Responsive UI Clone
        </h1>
        <p className="text-[#777] mt-2 text-xs md:text-[16px] md:mt-4 ">
          Galfré Valentín - ©2022
        </p>
        <p className="text-[#777] text-xs md:text-[16px] md:mt-2">
          Take a look and discover how it works 🧪.
        </p>

        <div className="my-12">
          <div className="mt-12">
            <Image
              layout="responsive"
              width="100%"
              height={58}
              objectFit="cover"
              src="/study/instagram.jpg"
              alt="Crombie "
              quality={100}
              placeholder="blur"
              blurDataURL="/study/instagram.jpg"
              className="rounded-md"
            />
          </div>

          <h1 className="text-[#111010] md:text-3xl text-[20px] mt-12 md:mt-24 font-bold leading-[1.45] ">
            Overview
          </h1>
          <p className="text-[#777] mt-2 text-xs md:text-[16px] md:leading-7 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            architecto eum aperiam accusantium qui ipsam voluptates, unde
            voluptatibus temporibus at iure adipisci laudantium illum est
            expedita cum. Officiis itaque, sunt necessitatibus dolorum saepe
            commodi, veniam molestiae dignissimos laboriosam vel nemo!
          </p>

          <p className="text-[#777] mt-8 text-xs md:mt-16 leading-5 md:text-[16px] ">
            This project was build using 🔨
          </p>

          <div>
            <div className="mt-10 ">
              <dl className="space-y-6 md:space-y-14">
                {features.map((feature) => (
                  <div key={feature.name} className="group relative">
                    <dt>
                      <a href={feature.link} target="_blank" rel="noreferrer">
                        <div
                          className={`${feature.bg} ${feature.text} absolute flex items-center justify-center h-12 w-12  md:h-20 md:w-20 rounded-md `}
                        >
                          <feature.icon
                            className="h-6 w-6 md:w-10 md:h-10"
                            aria-hidden="true"
                          />
                        </div>
                      </a>
                      <p className="md:pt-1.5 ml-16 md:ml-24 md:text-xl text-[13px] leading-6 font-bold text-[#111010] ">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="ml-16 md:ml-24 md:w-4/5 md:text-[16px] md:leading-7 leading-5 text-xs text-[#777] ">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <h1 className="text-[#111010] md:text-3xl md:mt-20 text-[20px] mt-12 font-bold leading-[1.45] ">
            Branding
          </h1>
          <p className="text-[#777] mt-2 md:text-[16px] md:leading-7 leading-6 text-xs ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            architecto eum aperiam accusantium qui ipsam voluptates, unde
            voluptatibus temporibus at iure adipisci laudantium illum est
            expedita cum. Officiis itaque, sunt necessitatibus dolorum saepe
            commodi, veniam molestiae dignissimos laboriosam vel nemo!
          </p>
        </div>

        <h1 className="text-[#111010] md:mt-20 md:text-3xl text-[20px] font-bold leading-[1.45] ">
          Galery
        </h1>
        <p className="text-[#777] md:text-[16px] text-xs md:mt-1 md:mb-8 mb-5">
          Take a better look.
        </p>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          mousewheel={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            560: {
              slidesPerView: 3
            },
            802: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Mousewheel]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full md:h-[560px] relative h-80 border-[.5px] rounded-xl cursor-grab">
                <Image
                  src={img.src}
                  alt={`Slide ${index}`}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={img.src}
                  quality={100}
                  className="rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-[#777] md:text-[16px] mt-12 md:mb-4 text-xs mb-2">
          Test it by yourself ✨
        </p>
        <div className="flex space-x-4 items-center ">
          <Link
            href={"https://github.com/galfrevn/nextjs-instagram-clone"}
            passHref
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="text-[12px] md:text-[16px] md:py-4 md:px-8 bg-black font-semibold hover:bg-[#222] transitiona-all duration-300  text-white py-3 px-6 "
            >
              Github repo
            </a>
          </Link>
          <Link href={"https://vninsta.vercel.app"} passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-[12px] md:text-[16px] md:py-4 md:px-8 bg-[#ffffff] font-semibold transitiona-all duration-300 hover:bg-black hover:text-white text-black border-2 border-black py-3 px-6 "
            >
              Live demo
            </a>
          </Link>
        </div>
      </div>

      <div className="pt-20 md:pt-40 pb-4 ">
        <Footer />
      </div>
    </>
  );
}

export default ProjectPage;
