import Head from 'next/head';
import SectionOne from '../../components/Solucoes/Consultoria/SectionOne';
import SectionTwo from '../../components/Solucoes/Consultoria/SectionTwo';
import Processo from '../../components/Solucoes/Processo';
import Form from '../../components/Form';


export default function Consultoria() {

  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Consultoria de interiores</title>
      </Head>
      <SectionOne />
      <SectionTwo />
      <Processo />
      <Form />
    </>
  );
}