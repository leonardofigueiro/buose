import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import 'animate.css/animate.min.css';
import Layout from '../components/layout';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale-1'/>
        <link rel="shortcut icon" href="/logos/favicon.png"></link>
        
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossOrigin="anonymous"/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"/>
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"/>
      </Layout>
    </>
  );

}
