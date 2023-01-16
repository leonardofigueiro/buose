import Head from 'next/head';
import SectionOne from '../../components/Solucoes/Interiores/SectionOne';
import SectionTwo from '../../components/Solucoes/Interiores/SectionTwo';
import Processo from '../../components/Solucoes/Processo';
import Form from '../../components/Form';


export default function Interiores() {

  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Projeto de interiores</title>
      </Head>
      <SectionOne />
      <SectionTwo />
      <Processo />
      <Form/>
    </>
  );
}