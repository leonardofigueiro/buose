import Head from 'next/head';
import SectionOne from '../../components/Solucoes/Marcenaria/SectionOne';
import SectionTwo from '../../components/Solucoes/Marcenaria/SectionTwo';
import Processo from '../../components/Solucoes/Processo';
import Form from '../../components/Form';


export default function Marcenaria() {

  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Projeto de marcenaria</title>
      </Head>
      <SectionOne />
      <SectionTwo />
      <Processo />
      <Form />
    </>
  );
}