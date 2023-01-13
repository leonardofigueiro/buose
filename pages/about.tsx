import Head from 'next/head';
import ContentFour from '../components/ContentFour';
import Staff from '../components/About/Staff';


export default function About() {
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