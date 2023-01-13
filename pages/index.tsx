
import Carroussel from '../components/Carroussel';
import ContentOne from '../components/ContentOne';
import ContentTwo from '../components/ContentTwo';
import ContentThree from '../components/ContentThree';
import ContentFive from '../components/ContentFive';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Head from 'next/head';


function Home() {
  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Inicio</title>
      </Head>
      <Carroussel />
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentOne />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentTwo />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentThree />
      </AnimationOnScroll>
      <AnimationOnScroll className='container' animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentFive />
      </AnimationOnScroll>
    </>
  );
}

export default Home;