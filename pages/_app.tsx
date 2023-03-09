import Script from "next/script";
import '@/styles/globals.css'
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-5CH82CJ" });
  }, []);

  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-6809452858412935"
        async
        strategy="afterInteractive"
        onError={(e) => {
          // eslint-disable-next-line no-console
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Component {...pageProps} />
    </>
  )
}
