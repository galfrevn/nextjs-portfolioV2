import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { RiInstagramFill, RiNewspaperFill } from "react-icons/ri";

const features = [
  {
    name: "LinkedIn",
    description: "Discover what I have to offer in a more professional way",
    icon: SiLinkedin,
    bg: "bg-[#ecf4ff]",
    text: "text-[#5393fe]",
    link: "https://linkedin.com/in/galfrevn",
  },
  {
    name: "Instagram",
    description: "Know more about my personal life & hobbies (I usually upload great pictures)",
    icon: RiInstagramFill,
    bg: "bg-[#ffefea]",
    text: "text-[#f19e82]",
    link: "https://instagram.com/galfre.v",
  },
  {
    name: "Github",
    description:
      "Find out all my repositories and the code behind my projects!",
    icon: SiGithub,
    bg: "bg-[#f3ebff]",
    text: "text-[#B57BFF]",
    link: "https://github.com/galfrevn",
  },
  {
    name: "Curriculum Vitae",
    description: "Take a look or download my recently updated CV!",
    icon: RiNewspaperFill,
    bg: "bg-[#edfceb]",
    text: "text-[#97cc8d]",
    link: "https://drive.google.com/file/d/1l2RkoF1klK1843UCs1KGgOppZEcnKfJz/view",
  },
  {
    name: "Email",
    description: "Send me your proposal at: galfre.vn@gmail.com",
    icon: SiGmail,
    bg: "bg-[#e1f8f8]",
    text: "text-[#17B1B1]",
    link: "mailto:galfre.vn@gmail.com",
  },
];

function Contact() {
  return (
    <>
      <Head>
        <title>Work | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | Work" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[28px] md:text-5xl font-bold leading-[1.45] ">
          Contact
        </h1>
        <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
          Find All the ways to reach me here! 🍻
        </p>

        <div className="mt-6 md:mt-12 mb-12 md:mb-32">
          <div className="mt-10">
            <dl className="space-y-6 md:space-y-14">
              {features.map((feature) => (
                <div key={feature.name} className="group relative">
                  <dt>
                    <a href={feature.link} target="_blank" rel="noreferrer"  >
                      <div
                        className={`${feature.bg} ${feature.text} absolute flex items-center justify-center h-12 w-12  md:h-20 md:w-20 rounded-md `}
                      >
                        <feature.icon className="h-6 w-6 md:w-10 md:h-10" aria-hidden="true" />
                      </div>
                    </a>
                    <p className="md:pt-4 ml-16 md:ml-24 md:text-xl text-[13px] leading-6 font-bold text-[#111010] ">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="ml-16 md:ml-24 md:text-[16px] text-xs text-[#777] ">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <footer className="pb-4 ">
        <Footer />
      </footer>
    </>
  );
}

export default Contact;
