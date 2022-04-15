import Head from "next/head";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { BsArrowRightShort } from "react-icons/bs";

// Apollo Client for GraphQL queries
import { gql } from "@apollo/client";
import client from "../apolloClient";
import { MiniCard } from "../components/MiniCard";
import { Parallax } from "react-scroll-parallax";

const data = [
  {
    title: "Simple TODO App",
    description: (
      <>
        <p>To-do App made with Expo CLI </p>
      </>
    ),
    bgColor: "#e4e4e4",
    url: "/",
  },
  {
    title: "Password Generator",
    description: (
      <>
        <p>Javascript basic password generator </p>
      </>
    ),
    bgColor: "#f5e9d4",
    url: "/",
  },
  {
    title: "Personal Portfolio V1",
    description: (
      <>
        <p>The first version of this page </p>
      </>
    ),
    bgColor: "#d4ecf5",
    url: "/",
  },
  {
    title: "Pokedex",
    description: (
      <>
        <p>Made with PokeAPI and Expo CLI </p>
      </>
    ),
    bgColor: "#f1c0c0",
    url: "/",
  },
];

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Home | Galfré Valentín Portfolio </title>
        <meta
          name="description"
          content="Galfré Valentín portfolio | Homepage"
        />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 md:mt-6 p-6">
        <div className="md:h-[80vh] md:flex md:flex-col md:justify-center md:items-start ">
          <h1 className="text-[#111010] md:text-6xl text-[28px] font-bold md:leading-[1.45] leading-[1.45] ">
            Welcome to{" "}
            <span className="text-[#5393fe] word hover:bg-[#ecf4ff] transition-all duration-300 word">
              Valentin&apos;s Galfré
            </span>{" "}
            <span className="text-[#f19e82] word hover:bg-[#ffefea] transition-all duration-300">
              portfolio
            </span>
            . If you want to{" "}
            <span className="text-[#B57BFF] word hover:bg-[#f3ebff] transition-all duration-300 ">
              know{" "}
            </span>{" "}
            me{" "}
            <span className="text-[#97cc8d] word hover:bg-[#edfceb] transition-all duration-300 ">
              better
            </span>
            , this is the{" "}
            <span className="text-[#17B1B1] word hover:bg-[#e1f8f8] transition-all duration-300 ">
              correct place
            </span>
            . <br /> Frontend Developer 💻
          </h1>

          <div className="hidden absolute md:flex flex-col items-end right-0 bottom-20 space-y-7">
            <Parallax speed={6}>
              <div className="bg-[#5393fe] transition-all duration-500 md:w-80 md:h-[71px] line "></div>
            </Parallax>
            <Parallax speed={4}>
              <div className="bg-[#f19e82] transition-all duration-500 md:w-60 md:h-[71px] line"></div>
            </Parallax>
            <Parallax speed={2}>
            <div className="bg-[#B57BFF] transition-all duration-500 md:w-40 md:h-[71px] line"></div>
            </Parallax>
            <div className="bg-[#17B1B1] transition-all duration-500 md:w-20 md:h-[71px] line"></div>
          </div>

          <Link href="/contact" passHref>
            <button className="mt-7 py-3.5 px-8 flex md:px-10 md:py-5 md:mt-10  rounded-sm hover:bg-[#9fc2ff] transition-all duration-300 bg-[#5393fe] text-white space-x-2 ">
              <p className="text-[14px] md:text-xl font-semibold  ">
                Contact me
              </p>
            </button>
          </Link>
        </div>

        <div className="mt-24 mb-20 md:mb-40">
          <h1 className="text-[#111010] md:text-3xl text-xl font-bold">
            Selected projects
          </h1>
          <p className="text-[#777] text-xs md:text-[16px] md:mt-2 mt-1">
            Take a look and see what I&apos;ve done 🧮
          </p>

          <div className="mt-12">
            <div className="space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:gap-8 gap-4 my-10 md:my-20 lg:mt-40">
            {data.map((i, index) => (
              <MiniCard project={i} delay={index} key={index} />
            ))}
          </div>
          <div className="w-full flex items-center justify-end mt-4 md:mt-14">
            <Link href="works" passHref>
              <a className="group">
                <div className="flex items-center mt-6  md:mt-10 ">
                  <p className="text-[#111010] md:text-sm text-xs font-bold lg:text-lg">
                    All my creations
                  </p>
                  <BsArrowRightShort className="ml-1 duration-200 group-hover:transform group-hover:translate-x-2 lg:w-6 lg:h-6" />
                </div>
              </a>
            </Link>
          </div>

          <p className="text-[#777] mt-14 md:mt-32 leading-7 text-xs md:text-[16px] lg:text-lg lg:leading-8 lg:w-4/5  ">
            Valentín Galfré is a young Argentinian guy who wants to
            <b> share his creations</b>. He is interested in frontend web
            development and technology. He realy loves breaking goals, and next
            one is
            <b> working as a developer</b>. 😅 He can spend hours and hours
            listening to clasic rock-pop🎸. He also created some videogames, go
            play them in Itch.io 🎮.
          </p>
        </div>
      </div>

      <footer className="pb-4 ">
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        projectLists {
          projectSchemas {
            title
            shortDescription
            tags
            thumbnail {
              url
            }
            slug
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });

  const { projectLists } = data;
  const { projectSchemas } = projectLists[0];

  return {
    props: {
      projects: projectSchemas,
    },
    revalidate: 60,
  };
}
