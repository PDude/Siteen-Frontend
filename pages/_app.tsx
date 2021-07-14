import NextNprogress from "nextjs-progressbar";
import Layout from "../components/Layout";
import "../styles/globals.sass";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <NextNprogress
        color="#FAAA4C"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
