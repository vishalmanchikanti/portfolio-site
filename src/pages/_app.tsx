import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vishal Manchikanti | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Full-stack developer portfolio built with Next.js" />
        <meta name="theme-color" content="#111827" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
