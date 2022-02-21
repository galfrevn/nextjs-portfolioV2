import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";

function Contact() {

  return (
    <>
      <Head>
        <title>Work | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | Work" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <div className="md:max-w-2xl md:mx-auto mt-36 p-6">
        <h1 className="text-[#111010] text-[28px] font-bold leading-[1.45] ">
          Contact
        </h1>
        <p className="text-[#777] text-xs ">
          Find All the ways to reach me here! 🍻
        </p>

        <div className="mt-12 mb-20">
          <form
            action=""
            className="text-[11px]"
            autoComplete="off"
          >
            <div className="mb-6 ">
              <p className=" text-[#111010] text-xl font-bold mb-2">
                I&apos;m looking to
              </p>

              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                Create a project from scratch.
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                Continue / improve an existing project.
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                Hire Consultancy Services.
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                Just need cost/time estimate guidance
              </label>
            </div>

            <div className="mb-6 ">
              <p className=" text-[#111010] text-xl font-bold mb-2">
                I want to hire
              </p>

              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                Custom Web Development Product
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                Custom Mobile Development Product
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                CMS/E-Commerce
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                A team for Staff Augmentation
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                I don&apos;t know
              </label>
            </div>

            <div className="mb-6 ">
              <p className=" text-[#111010] text-xl font-bold mb-2">
                I already have
              </p>

              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] bg-white rounded-sm checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                A detailed brief to share.
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                I only have an idea and would like some help with it.
              </label>
              <label className="text-[#111010] text-[9px] flex items-center mb-2">
                <input
                  className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-white checked:bg-black checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                I don&apos;t have anything
              </label>

              <div className="overflow-hidden relative transform mt-4 w-1/2 flex justify-start items-start">
                <button className="bg-indigo hover:bg-indigo-dark text-white text-[9px] border-white rounded-sm border-[1px] py-1 px-4 inline-flex items-center">
                  <p className="">Attach your brief</p>
                </button>
                <input
                  className="cursor-pointer absolute block opacity-0 pin-r pin-t"
                  type="file"
                  name="vacancyImageFiles"
                />
              </div>
            </div>

            
          </form>
        </div>
      </div>
      <footer className="pb-4 ">
        <Footer />
      </footer>
    </>
  );
}

export default Contact;
