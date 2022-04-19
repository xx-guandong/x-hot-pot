import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideNavBar from "../components/layout/SideNavBar/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* <HeaderNavBar /> */}
      <div className="flex">
        <SideNavBar />
        <Component className="flex-auto" {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
