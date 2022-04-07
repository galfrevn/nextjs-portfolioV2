import Head from "next/head";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { BsArrowRightShort } from "react-icons/bs";

// Apollo Client for GraphQL queries
import { gql } from "@apollo/client";
import client from "../apolloClient";
import { MiniCard } from "../components/MiniCard";

const data = [
  {
    tag: "React Native",
    title: "Simple TODO App",
    description: (
      <>
        <p>To-do App made with Expo CLI </p>
      </>
    ),
    bgColor: "#e4e4e4",
    url: "/",
    img: "1.jpg",
  },
  {
    tag: "React Native",
    title: "Password Generator",
    description: (
      <>
        <p>Javascript basic password generator </p>
      </>
    ),
    bgColor: "#f5e9d4",
    url: "/",
    img: "2.jpg",
  },
  {
    tag: "React Native",
    title: "Personal Portfolio V1",
    description: (
      <>
        <p>The first version of this page </p>
      </>
    ),
    bgColor: "#d4ecf5",
    url: "/",
    img: "3.jpg",
  },
  {
    tag: "React Native",
    title: "Pokedex",
    description: (
      <>
        <p>Made with PokeAPI and Expo CLI </p>
      </>
    ),
    bgColor: "#f1c0c0",
    url: "/",
    img: "4.jpg",
  },
];

export default function Home({ projects }) {
  console.log(projects);

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

          <Link href="/contact" passHref>
            <button className="mt-7 py-3.5 px-8 flex md:px-10 md:py-5 md:mt-10 border-2 rounded-sm border-[#5393fe] text-[#5393fe] transition-all duration-300 hover:bg-[#5393fe] hover:text-white space-x-2 ">
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
            <div className="w-full flex items-center justify-end mt-4 md:mt-14">
              <Link href="works" passHref>
                <a className="group">
                  <div className="flex items-center mt-6  md:mt-10 ">
                    <p className="text-[#111010] md:text-sm text-xs font-bold">
                      All my creations
                    </p>
                    <BsArrowRightShort className="ml-1 duration-200 group-hover:transform group-hover:translate-x-2" />
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="mt-20 md:mt-36">
            <h1 className="text-[#111010] mb-8 md:mb-10 md:text-3xl text-xl font-bold">
              Don&apos;t forget to visit
            </h1>

            <div className="grid grid-cols-2 md:gap-8 gap-4">
              {data.map((i, index) => (
                <MiniCard project={i} key={index} />
              ))}
            </div>

          </div>
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
