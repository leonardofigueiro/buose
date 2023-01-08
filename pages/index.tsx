
import Head from 'next/head';
import Carroussel from '../components/Carroussel';
import ContentOne from '../components/ContentOne';
import ContentTwo from '../components/ContentTwo';
import ContentThree from '../components/ContentThree';
import ContentFour from '../components/ContentFour';
import ContentFive from '../components/ContentFive';
import ContentSix from '../components/ContentSix';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Form from '../components/Form';


function Home() {
  return (
    <>
      <Head>
        <title>Buose | Início</title>
      </Head>
      <Carroussel />
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentOne />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentTwo />
      </AnimationOnScroll>
      
      <AnimationOnScroll  animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentThree />
      </AnimationOnScroll>
      
      <AnimationOnScroll className='container' animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentFour />
      </AnimationOnScroll>
       
      <AnimationOnScroll className='container' animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentFive />
      </AnimationOnScroll>
      
      <AnimationOnScroll className='container' animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <ContentSix />
      </AnimationOnScroll>
      <AnimationOnScroll className='container' animateIn="animate__fadeIn" animateOnce initiallyVisible>
        <Form />
      </AnimationOnScroll>
    </>
  );
}

export default Home;