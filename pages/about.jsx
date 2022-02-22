import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
    bg: "bg-[#ecf4ff]",
    text: "text-[#5393fe]"
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
    bg: "bg-[#ffefea]",
    text: "text-[#f19e82]"
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
    bg: "bg-[#f3ebff]",
    text: "text-[#B57BFF]"
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
    bg: "bg-[#e1f8f8]",
    text: "text-[#17B1B1]"
  },
];

export default function about() {
  return (
    <>
      <Head>
        <title>About | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | About" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-6xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[28px] md:text-5xl font-bold leading-[1.45] ">
          About Me
        </h1>
        <p className="text-[#777] text-xs md:text-[16px] md:mt-2 ">
          Discover my strengths, hobbies and other stuffs 🔨.
        </p>

        <div className="mt-8 mb-20">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="lg:text-center">
                <p className="mt-4 max-w-2xl text-xs text-gray-500 lg:mx-auto">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className= {`${feature.bg} ${feature.text} absolute flex items-center justify-center h-12 w-12 rounded-md `} >
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-[13px] leading-6 font-bold text-[#111010] ">
                          {feature.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-xs text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pb-4 ">
        <Footer />
      </footer>
    </>
  );
}
