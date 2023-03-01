import "../styles/globals.css";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    if (typeof window == "undefined") return;

    const handler = () => document.body.classList.toggle("dev");

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
