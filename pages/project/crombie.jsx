/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper";
import "swiper/css";

const images = [
  {
    src: "/study/crombie/a.jpg",
  },
  {
    src: "/study/crombie/b.jpg",
  },
  {
    src: "/study/crombie/c.jpg",
  },
  {
    src: "/study/crombie/d.jpg",
  },
  {
    src: "/study/crombie/e.jpg",
  },
  {
    src: "/study/crombie/f.jpg",
  },
  {
    src: "/study/crombie/g.jpg",
  },
  {
    src: "/study/crombie/h.jpg",
  },
  {
    src: "/study/crombie/i.jpg",
  },
];

function ProjectPage() {
  return (
    <>
      <Head>
        <title> Case study (Crombie) | Galfré Valentín Portfolio </title>
        <meta name="description" content={`Galfré Valentín portfolio | `} />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 px-6 pt-6">
        <h1 className="text-[#111010] text-[20px] font-bold leading-[1.45] ">
          Crombie Webpage UI Clone
        </h1>
        <p className="text-[#777] mt-2 text-xs ">Galfré Valentín - ©2022</p>
        <p className="text-[#777] text-xs ">
          Take a look and discover how it works 🧪.
        </p>

        <div className="my-12">
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

        <h1 className="text-[#111010] text-[20px] font-bold leading-[1.45] ">
          Galery
        </h1>
        <p className="text-[#777] text-xs mb-5">Take a better look.</p>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          mousewheel={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Mousewheel]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full relative h-80">
                <Image
                  src={img.src}
                  alt={`Slide ${index}`}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={img.src}
                  className="rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
