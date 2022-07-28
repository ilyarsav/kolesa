import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import App from "next/app";
import LayoutMob from "../components/Layout/LayoutMob";
import { Provider } from "react-redux";
import { store } from "../store/store.js";

const MyApp = ({ Component, pageProps, isMobile }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return isMobile ? (
    <Provider store={store}>
      <LayoutMob>
        <Component {...pageProps} isMobile={isMobile} />
      </LayoutMob>
    </Provider>
  ) : (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} isMobile={isMobile} />
      </Layout>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const UA = appContext?.ctx?.req?.headers["user-agent"];
  const isMobile = Boolean(
    UA?.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  //   const res = await fetch("http://localhost:3000/api/get-top-cat-list");
  //   const data = await res.json();

  return { ...appProps, isMobile };
};

export default MyApp;
