import { Html, Head, Main, NextScript } from 'next/document';
import Analytics from '../components/Analytics';
import { GA_TRACKING_ID } from '../src/utils.gtag';

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <Analytics/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
