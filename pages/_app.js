import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import "../styles/code.css";
import Head from "next/head";
import "../styles/variable.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* another meta data can be added regarding the favicon. */}
        <link rel="shortcut icon" href="/Logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
