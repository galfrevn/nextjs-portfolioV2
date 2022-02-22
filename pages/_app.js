/* eslint-disable @next/next/no-img-element */
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import { BottomOverlay } from "../components/BottomOverlay";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <>
    
      <div className="flex items-center justify-center w-screen h-screen absolute top-0 left-0" >
        <img src="/loading.gif" alt="" />
      </div>

    </>;
  }

  return (
    <>
      <NextNProgress
        height={4}
        color="#5393fe"
        options={{ showSpinner: false }}
      />
      <div className="bg-white overflow-hidden">
        <Navbar name="Galfre.vn" option1="Works" option2="About" />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
                x: -40,
              },
              pageAnimate: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <BottomOverlay />
      </div>
    </>
  );
}

export default MyApp;
