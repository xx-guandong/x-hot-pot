import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideNavBar from "../components/layout/SideNavBar/default";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-full">
      <Head>
        <title>X hot pot</title>
      </Head>
      {/* <HeaderNavBar /> */}
      <div className="flex">
        <SideNavBar />
        <Component className="flex-auto" {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
