import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import "../styles/code.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* another meta data can be added regarding the favicon. */}
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
