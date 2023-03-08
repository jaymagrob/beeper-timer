import Script from "next/script";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
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
