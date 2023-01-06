
import Head from 'next/head';
import Carroussel from '../src/Components/Carroussel';
import ContentOne from '../src/Components/ContentOne';
import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header';
import ContentTwo from '../src/Components/ContentTwo';
import ContentThree from '../src/Components/ContentThree';
import ContentFour from '../src/Components/ContentFour';
import ContentFive from '../src/Components/ContentFive';
import ContentSix from '../src/Components/ContentSix';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Home() {
  return (
    <>
      <Head>
        <title>Buose | Início</title>
      </Head>
      <Header />
      <Carroussel />
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <ContentOne />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <ContentTwo />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <ContentThree />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <ContentFour />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <ContentFive />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <ContentSix />
      </AnimationOnScroll>
      <Footer />
    </>
  );
}

export default Home;