import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import SubNavbar from "../components/subnavbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      {router.pathname.includes("/series") ? <SubNavbar /> : null}
      <Component {...pageProps} />
    </>
  );
}
