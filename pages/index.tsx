
import Head from 'next/head';
import Carroussel from '../components/Carroussel';
import ContentOne from '../components/ContentOne';
import ContentTwo from '../components/ContentTwo';
import ContentThree from '../components/ContentThree';
import ContentFour from '../components/ContentFour';
import ContentFive from '../components/ContentFive';
import ContentSix from '../components/ContentSix';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Home() {
  return (
    <>
      <Head>
        <title>Buose | Início</title>
      </Head>
      <Carroussel />
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce initiallyVisible>
        <ContentOne />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce initiallyVisible>
        <ContentTwo />
      </AnimationOnScroll>
      
      <AnimationOnScroll  animateIn="animate__fadeInUp" animateOnce initiallyVisible>
        <ContentThree />
      </AnimationOnScroll>
      
      <AnimationOnScroll className='container' animateIn="animate__fadeInUp" animateOnce initiallyVisible>
        <ContentFour />
      </AnimationOnScroll>
       
      <AnimationOnScroll className='container' animateIn="animate__fadeInUp" animateOnce initiallyVisible>
        <ContentFive />
      </AnimationOnScroll>
      
      <AnimationOnScroll className='container' animateIn="animate__fadeInUp" animateOnce initiallyVisible>
        <ContentSix />
      </AnimationOnScroll>
    </>
  );
}

export default Home;