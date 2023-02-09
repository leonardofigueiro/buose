import { Divisor, TituloCard } from '../components/Commons/Cards';
import { images } from '../src/images';
import { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import classname from '../styles/Modal.module.scss';
import Head from 'next/head';
import Layout from '../components/layout';

function Projetos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setIndex((index + 1) % images.length);
      setSelectedImage(images[index]);
    } else if (event.key === 'ArrowLeft') {
      setIndex(
        (index - 1 + images.length) % images.length
      );
      setSelectedImage(images[index]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index]);


  return (
    <>
      <Head>
        <title>Buose Arquitetura Online | Projetos</title>
      </Head>


      <section className='mt-5 d-flex flex-column align-items-center gap-5'>
        <TituloCard className='text-center'>Projetos</TituloCard>
        <Divisor />
        <div className="d-flex flex-wrap justify-content-center gap-3">



          {images.map((image, i) => (
            <div className={classname.imageWrapper} key={image} onClick={() => openModal(images[i], i)}>
              <Image src={`/projetos/thumb/${image}_Easy-Resize.com.webp`} alt='Imagem realista de um projeto arquitetônico' width={330} height={190} />
            </div>
          ))}
          {modalOpen && (
            <div className={classname.modal}>
              
              <button className={`${classname.arrowButton} ${classname.left}`} onClick={() => openModal(images[(index - 1 + images.length) % images.length], (index - 1 + images.length) % images.length)}> &lt; </button>


              <Image src={`/projetos/${selectedImage as string}.webp`} alt='Imagem realista de um projeto arquitetônico' width={1500} height={800} className={classname.image} />
              
              <button className={`${classname.arrowButton} ${classname.right}`} onClick={() => openModal(images[(index + 1) % images.length], (index + 1) % images.length)}> &gt; </button>


              <button className={classname.closeButton} onClick={closeModal}>X</button>
            </div>
          )}
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