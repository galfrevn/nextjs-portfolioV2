import Head from "next/head";
import { BsLinkedin } from "react-icons/bs";
import { ProjectCard } from "../components/ProjectCard";
import { Footer } from "../components/Footer";
import projects from '../components/data'

export default function Home() {
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

      <div className="md:max-w-2xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[28px] font-bold leading-[1.45] ">
          Welcome to{" "}
          <span className="text-[#5393fe] hover:bg-[#ecf4ff] transition-all duration-300">
            Valentin&apos;s Galfré
          </span>{" "}
          <span className="text-[#f19e82] hover:bg-[#ffefea] transition-all duration-300">
            portfolio
          </span>
          . If you want to{" "}
          <span className="text-[#B57BFF] hover:bg-[#f3ebff] transition-all duration-300 ">
            know{" "}
          </span>{" "}
          me{" "}
          <span className="text-[#97cc8d] hover:bg-[#edfceb] transition-all duration-300 ">
            better
          </span>
          , this is the{" "}
          <span className="text-[#17B1B1] hover:bg-[#e1f8f8] transition-all duration-300 ">
            correct place
          </span>
          . <br /> Frontend Developer 💻
        </h1>
        <button className="mt-7 py-3.5 px-5 flex bg-[#5393fe] transition-all duration-300 hover:bg-[#9ec5ff] space-x-2 ">
          <BsLinkedin className="mt-0.5 text-white" />
          <h3 className="text-[14px] font-semibold text-white ">Contact me</h3>
        </button>

        <div className="mt-24 mb-20">
          <h1 className="text-[#111010] text-xl font-bold">
            See some of my best projects
          </h1>

          <div className="mt-12">
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
    </div>
  );
}
