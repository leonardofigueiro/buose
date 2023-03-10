import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat, Quicksand } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import TagManager from 'react-gtm-module';




const montserrat = Montserrat({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'] });


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-WDZ4DDG'
    };  

    TagManager.initialize(tagManagerArgs);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        :root {
          --fontDisplay: ${quicksand.style.fontFamily};
          --fontDefault: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale-1' />
        <meta name='description' content='Contrate um arquiteto online. Obtenha consultoria de arquitetura de especialistas qualificados 
                                          diretamente em sua casa através do nosso serviço de consultoria online. 
                                          Projetos personalizados e soluções criativas para atender às suas 
                                          necessidades e orçamento. Atendimento presencial em Sinop e Região.'/>

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Buose Arquitetura Online" />
        <meta property="og:image" content="/images/logos/logoBuose.svg" />
        <meta name="author" content="Buose Arquitetura" />
        <meta name="ahrefs-site-verification" content="9b3a7e7f22ba7dadfcf2ccb837122c13e0741a8cb470d6600ddb641b597cb3ac"></meta>
        <link rel="shortcut icon" href="/logos/favicon.png"></link>
        <link rel='canonical' href='https://www.buosearquitetura.com.br' />

      </Head>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </>
  );

}
