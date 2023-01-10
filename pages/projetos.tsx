import { Divisor, TituloCard } from '../components/Commons/Cards';
import styled from 'styled-components';
import { images } from '../src/images';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const Imagem = styled.img`
  max-width: 330px;
  max-height: 190px;
  width: auto;
  height: auto;
  &:hover{
    cursor:pointer;
  }
`;

export default function Projetos() {

  const [toggler, setToggler] = useState(false);
  const [id, setId] = useState<Number>();

  return (
    <section className='mt-5 d-flex flex-column align-items-center gap-5'>
      <TituloCard className='text-center'>Projetos</TituloCard>
      <Divisor />
      <div className="d-flex flex-wrap justify-content-center gap-3">

        {images.map((image) => {
          return (
            <>
              <Imagem
                key={image.id}
                className='img-thumbnail'
                width={330} height={190}
                src={`/projetos/thumb/${image.src}_Easy-Resize.com.jpg`}
                alt='Imagem realista'
                onClick={() => {
                  setToggler(!toggler);
                  setId(image.id);
                
                }}
              />
            </>);
        })}
        {toggler && (
          <Lightbox
            mainSrc={`projetos/${images[id as number - 1].src}.jpg`}
            onCloseRequest={() => setToggler(!toggler)}
            onImageLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
            discourageDownloads
          />)}

      </div>




    </section>
  );
}