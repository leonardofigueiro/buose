import { Divisor, TituloCard } from '../components/Commons/Cards';
import { images } from '../src/images';
import { ReactElement, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from 'next/image';
import '../styles/Modal.module.scss';
import Head from 'next/head';
import Layout from '../components/layout';


function Projetos() {

  const [toggler, setToggler] = useState(false);
  const [id, setId] = useState<Number>();

  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Projetos</title>
      </Head>


      <section className='mt-5 d-flex flex-column align-items-center gap-5'>
        <TituloCard className='text-center'>Projetos</TituloCard>
        <Divisor />
        <div className="d-flex flex-wrap justify-content-center gap-3">

          {images.map((image) => {
            return (
              <>
                <Image
                  key={String(image.id)}
                  className='img-thumbnail pointer'
                  width={330} height={190}
                  src={`/projetos/thumb/${image.src}_Easy-Resize.com.webp`}
                  alt='Imagem realista de uma bela casa'
                  onClick={() => {
                    setToggler(!toggler);
                    setId(image.id);
                  }}
                />
              </>);
          })}
          {toggler && (
            <Lightbox
              mainSrc={`projetos/${images[id as number - 1].src}.webp`}
              onCloseRequest={() => setToggler(!toggler)}
              onImageLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
              discourageDownloads
            />)}

        </div>
      </section>
    </>
  );
}

Projetos.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Projetos;