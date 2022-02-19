import { Navbar } from "../components/Navbar";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress
        height={2}
        color="#3B82F6"
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
                x: -10,
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
      </div>
    </>
  );
}

export default MyApp;
