import Head from 'next/head';
import Cards from '../../components/Solucoes/Cards';
import Processo from '../../components/Solucoes/Processo';
import PricingCards from '../../components/Solucoes/PricingCards';
import Form from '../../components/Form';

export default function ProjetoOnline() {

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