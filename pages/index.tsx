
import Carroussel from '../components/Carroussel';
import ContentOne from '../components/ContentOne';
import ContentTwo from '../components/ContentTwo';
import ContentThree from '../components/ContentThree';
import ContentFive from '../components/ContentFive';
import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../components/layout';


function Home() {
  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Inicio</title>
      </Head>
      <Carroussel />

      <ContentOne />


      <ContentTwo />


      <ContentThree />


      <ContentFive />

    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;