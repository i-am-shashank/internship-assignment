import "../styles/globals.css";
import Layout from "./components/Layout";
import HeadNext from "./components/HeadNext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadNext />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
