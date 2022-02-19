import { Navbar } from "../components/Navbar";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import { BottomOverlay } from "../components/BottomOverlay";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress
        height={4}
        color="#5393fe"
        options={{ showSpinner: false }}
      />
      <div className="bg-white">
        <Navbar name="Galfre.vn" option1="Works" option2="About" />
        <AnimatePresence>
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
