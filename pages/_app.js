import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import "../styles/code.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
