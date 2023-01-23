import { Html, Head, Main, NextScript } from 'next/document';
import Analytics from '../components/Analytics';

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <Analytics />
      </Head>
      <body>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDZ4DDG"
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
