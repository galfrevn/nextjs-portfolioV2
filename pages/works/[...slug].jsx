/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "../../components/Footer";

import md from "markdown-it";

// Apollo Client for GraphQL queries
import { gql } from "@apollo/client";
import client from "../../apolloClient";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { useRouter } from "next/router";

function ProjectPage({ project }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title> Case study (Crombie) | Galfré Valentín Portfolio </title>
        <meta name="description" content={`Galfré Valentín portfolio | `} />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 px-6 pt-6">
        <button onClick={handleBack}>
          <a className="group">
            <div className="flex items-center mb-6 ">
              <BsArrowLeftShort className="duration-200 md:w-6 md:h-6 group-hover:transform group-hover:-translate-x-2" />
              <p className="text-[#111010] ml-1 text-xs font-semibold md:text-[16px] ">
                Return
              </p>
            </div>
          </a>
        </button>

        <h1 className="text-[#111010] text-[20px] md:text-4xl font-bold leading-[1.45] ">
          {project.title}
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
              src={project.thumbnail.url}
              alt="Crombie "
              placeholder="blur"
              blurDataURL={project.thumbnail.url}
              className="rounded-md"
            />
          </div>

          <h1 className="text-[#111010] md:text-3xl text-[20px] mt-12 md:mt-24 font-bold leading-[1.45] ">
            {project.sections[0].sectionTitle}
          </h1>
          <p
            className="text-[#777] mt-2 text-xs md:text-[16px] md:leading-7 leading-6"
            dangerouslySetInnerHTML={{
              __html: md().render(project.sections[0].sectionDescription),
            }}
          ></p>

          <p className="text-[#777] mt-8 text-xs md:mt-16 leading-5 md:text-[16px] ">
            This project was build using 🔨
          </p>

          <div className="mt-10 ">
            <dl className="space-y-6 md:space-y-14">
              {project.technologies.map((feature) => (
                <div key={feature.name} className="group relative">
                  <dt>
                    <div
                      style={{
                        backgroundColor: feature.backgroundColor.hex,
                        color: feature.iconColor.hex,
                      }}
                      className={
                        "absolute flex items-center justify-center h-12 w-12  md:h-20 md:w-20 rounded-md"
                      }
                    >
                      <img
                        src={feature.icon.url}
                        className="h-6 w-6 md:w-10 md:h-10"
                        aria-hidden="true"
                        alt={feature.name}
                      />
                    </div>

                    <p className="md:pt-1.5 ml-16 md:ml-24 md:text-xl text-[13px] leading-6 font-bold text-[#111010] ">
                      {feature.name}
                    </p>
                  </dt>
                  <dd
                    className="ml-16 md:ml-24 md:w-4/5 md:text-[16px] md:leading-7 leading-5 text-xs text-[#777]"
                    dangerouslySetInnerHTML={{
                      __html: md().render(feature.description),
                    }}
                  ></dd>
                </div>
              ))}
            </dl>
          </div>

          <h1 className="text-[#111010] md:text-3xl text-[20px] mt-12 md:mt-24 font-bold leading-[1.45] ">
            {project.sections[1].sectionTitle}
          </h1>
          <p
            className="text-[#777] mt-2 text-xs md:text-[16px] md:leading-7 leading-6"
            dangerouslySetInnerHTML={{
              __html: md().render(project.sections[1].sectionDescription),
            }}
          ></p>
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
          draggable={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            560: {
              slidesPerView: 3,
            },
            802: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
        >
          {project.galeryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full md:h-[560px] relative h-80 border-[.5px] rounded-xl cursor-grab">
                <Image
                  src={img.url}
                  alt={`Valentín Galfré Portfolio | ${project.title} | Slide ${
                    index + 1
                  }`}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={img.url}
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
          <Link href={project.repoLink} passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-[12px] md:text-[16px] md:py-4 md:px-8 bg-black font-semibold hover:bg-[#222] transitiona-all duration-300  text-white py-3 px-6 "
            >
              Github repo
            </a>
          </Link>
          <Link href={project.demoLink} passHref>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: project.buttonColor.hex }}
              className="text-[12px] md:text-[16px] md:py-4 md:px-8 font-semibold transitiona-all duration-300 text-white py-3 px-6 "
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

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        projectSchemas {
          slug
        }
      }
    `,
  });
  const { projectSchemas } = data;
  const paths = projectSchemas.map((project) => ({
    params: { slug: [project.slug] },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query Project($slug: String!) {
        projectSchemas(where: { slug: $slug }) {
          title
          shortDescription
          tags
          thumbnail {
            url
          }
          slug
          technologies {
            name
            description
            icon {
              url
            }
            iconColor {
              hex
            }
            backgroundColor {
              hex
            }
          }
          sections {
            sectionTitle
            sectionDescription
          }
          galeryImages {
            url
          }
          buttonColor {
            hex
          }
          repoLink
          demoLink
        }
      }
    `,
    fetchPolicy: "no-cache",
    variables: { slug },
  });

  const { projectSchemas } = data;
  const project = projectSchemas[0];

  return {
    props: {
      project,
    },
    revalidate: 1,
  };
}
