import Head from "next/head";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <div className="bg-black h-screen">
      <Head>
        <title>404 | Galfré Valentín Portfolio </title>
        <meta name="description" content="Galfré Valentín portfolio | 404" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#FFF" />
      </Head>

      <p>Error pa no hay nada acá</p>

      <div className="text-white">
        <Footer />
      </div>
      
    </div>
  );
}