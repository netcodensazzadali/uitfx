import "bootstrap/dist/css/bootstrap.min.css";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/layout";
import "../styles/globals.scss";

// NProgress setup
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track Meta Pixel PageView on route change
    const handleRouteChange = () => {
      if (typeof window.fbq !== "undefined") {
        window.fbq("track", "PageView");
      }
    };
    
 

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
