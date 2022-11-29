import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import SubNavbar from "../components/subnavbar";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        {router.pathname.includes("/series") ? <SubNavbar /> : null}
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
