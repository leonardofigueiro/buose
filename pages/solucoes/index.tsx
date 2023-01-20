import Head from 'next/head';
import Processo from '../../components/Solucoes/Processo';
import PricingCards from '../../components/Solucoes/PricingCards';
import Form from '../../components/Form';
import { ReactElement } from 'react';
import Layout from '../../components/layout';

function ProjetoOnline() {

  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Soluções</title>
      </Head>
      <main className='d-flex flex-column align-items-center container-fluid gap-5'>
        <PricingCards />
        <Processo />
        <Form/>
      </main>
    </>
  );
}

ProjetoOnline.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default ProjetoOnline;