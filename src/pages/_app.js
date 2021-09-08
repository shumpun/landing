import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import { Toaster } from "react-hot-toast";

import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
