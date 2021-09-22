import "@/css/tailwind.css";

import { ThemeProvider } from "next-themes";
import Head from "next/head";

import Analytics from "@/components/analytics";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          async
          defer
          data-website-id="b7be06fd-0064-45d0-8658-c9cf4e7b7108"
          src="https://data.neara.cyou/umami.js"
        >
        </script>
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
