import Image from 'next/image';
import { Divisor, TituloCard } from './Commons/Cards';
import styled from 'styled-components';
import Residencial from '../public/images/content2/residencial.webp';
import Comercial from '../public/images/content2/comercial.webp';
import Interiores from '../public/images/content2/interiores.webp';
import Reformas from '../public/images/content2/reformas.webp';

const ContainerAtuacao = styled.div`
  background-color: var(--secondary11);
  bottom: 0;
  margin-left: 20%;
  position: absolute;
  text-align: center;
  width: 60%;
`;

const TituloAtuacao = styled.h4`
  color: var(--secondary1);
  border-bottom: 5px solid var(--primary7);
  font-family: var(--fontDisplay);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  
`;

export default function ContentFour() {
  return (
    <section className="container-fluid p-5">
      <TituloCard className='text-center'>Áreas de atuação</TituloCard>
      <Divisor className='mt-4 mb-4'/>
      <div className="d-flex gap-4 justify-content-center flex-wrap flex-lg-nowrap">

        <div className='position-relative'>
          <Image className='img-fluid' src={Residencial} alt="" />
          <ContainerAtuacao className="mb-3 p-3">
            <TituloAtuacao>
              Residencial
            </TituloAtuacao>
          </ContainerAtuacao>
        </div>
        <div className='position-relative'>
          <Image className='img-fluid' src={Comercial} alt="" />
          <ContainerAtuacao className="mb-3 p-3">
            <TituloAtuacao>
              Comercial
            </TituloAtuacao>
          </ContainerAtuacao>
        </div>
        <div className='position-relative'>
          <Image className='img-fluid' src={Interiores} alt="" />
          <ContainerAtuacao className="mb-3 p-3">
            <TituloAtuacao>
              Interiores
            </TituloAtuacao>
          </ContainerAtuacao>
        </div>
        <div className='position-relative'>
          <Image className='img-fluid' src={Reformas} alt="" />
          <ContainerAtuacao className="mb-3 p-3">
            <TituloAtuacao>
              Reformas
            </TituloAtuacao>
          </ContainerAtuacao>
        </div>

      </div>
    </section>
  );
}