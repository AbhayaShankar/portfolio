import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import "../styles/code.css";
import Head from "next/head";
import "../styles/_variable.scss";
import NProgress from "nprogress";
import { Router } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  NProgress.configure({
    showSpinner: false,
    easing: "ease",
    speed: 1000,
    template:
      '<div class="bar" role="progressbar"><div class="peg"></div></div><div class="spinner" role="alert"><div class="spinner-icon"></div></div>',
  });

  // For first time loading of Progressbar
  useEffect(() => {
    NProgress.set(0.99);
  }, []);

  Router.events.on("routeChangeStart", () => {
    NProgress.set(0);
    NProgress.configure({ trickleRate: 0.02, trickleSpeed: 1000 });
  });

  Router.events.on("routeChangeComplete", () => {
    setTimeout(() => {
      NProgress.set(0.99);
    }, 600);
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/Logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
