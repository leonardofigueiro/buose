import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap');
  }, []);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale-1'/>
        <link rel="shortcut icon" href="/logos/favicon.png"></link>
      </Head>
      <Component {...pageProps} />
    </>



  );

}
