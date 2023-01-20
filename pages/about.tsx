import Head from 'next/head';
import ContentFour from '../components/ContentFour';
import Staff from '../components/About/Staff';
import { ReactElement } from 'react';
import Layout from '../components/layout';


function About() {
  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Sobre nós</title>
      </Head>
      <section className='d-flex flex-column'>
        <ContentFour />

        <Staff/>


      </section>
    </>

  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default About;