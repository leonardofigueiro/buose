import styled from 'styled-components';
import { Divisor, TituloCard } from '../Commons/Cards';
import { useRef, useState } from 'react';
import { useOnHoverOutside } from '../../src/hooks/useOnHoverOutside';


const Section = styled.section`
  background-color: var(--secondary1);
  border-radius: 0px 200px;
  height: auto;
  width: auto;
  @media (min-width: 0px) {
    border-radius: 0px 50px;
    width: 100vw;
  }
  @media (min-width: 540px) {
    border-radius: 0px 80px;
    width: auto;
  }
  @media (min-width: 768px) {
    border-radius: 0px 150px;
    width: auto;
  }
`;
const ContainerAtuacao = styled.div`
  background-color: var(--secondary11);
  bottom: 0px;
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

const DivImagem = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  width: 390px;
  height: 420px;
`;

const Lista = styled.ul`
  background-color: rgba(75, 40, 38, .8);
  cursor: pointer;
  display: flex;
  list-style: square;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  padding: 30px 30px;
  width: 100%;
  @media (max-width: 500px) {
    opacity: 1;
  }
`;


export default function Staff() {
  const dropdownRef1 = useRef<HTMLDivElement | null>(null);
  const dropdownRef2 = useRef<HTMLDivElement | null>(null);
  
  const [isMenuDropDownOpenBrenda, setMenuDropDownOpenBrenda] = useState(false);
  const [isMenuDropDownOpenGabi, setMenuDropDownOpenGabi] = useState(false);

  const closeHoverMenuBrenda = () => {
    setMenuDropDownOpenBrenda(false);
  };
  const closeHoverMenuGabi = () => {
    setMenuDropDownOpenGabi(false);
  };
  useOnHoverOutside(dropdownRef1, closeHoverMenuBrenda); // Call the hook
  useOnHoverOutside(dropdownRef2, closeHoverMenuGabi); // Call the hook
  return (
    <Section className=" container py-3 px-5 d-flex flex-column align-items-center shadow-sm">
      <TituloCard style={{ textAlign: 'center' }}>Equipe</TituloCard>
      <Divisor className='mt-2 mb-4' />

      <div className='d-flex gap-3 flex-wrap justify-content-center'>
        <DivImagem
          id='1'
          className='position-relative img-fluid'
          ref={dropdownRef1}
          onMouseOver={() => {
            setMenuDropDownOpenBrenda(true);
          }}
          style={{backgroundImage: 'url(\'images/staff/Brenda.webp\')'}}
        >

          <ContainerAtuacao className="mb-3 p-3">
            <TituloAtuacao>
              Brenda Buose
            </TituloAtuacao>
          </ContainerAtuacao>

          <Lista className={isMenuDropDownOpenBrenda ? 'visivel' : 'escondido'}>
            <li>
              Sócia e fundadora da Buose Arquitetura e interiores
            </li>
            <li>
              Especialista em arquitetura comercial
            </li>
            <li>
              Mestranda em ciências ambientais UFMT
            </li>
            <li>
              Apaixonada por arquitetura de interiores e projetos desafiadores
            </li>
          </Lista>

        </DivImagem>
        <DivImagem
          id='2'
          className='position-relative img-fluid'
          ref={dropdownRef2}
          onMouseOver={() => {
            setMenuDropDownOpenGabi(true);
          }}
          style={{backgroundImage: 'url(\'images/staff/Gabrielin.webp\')'}}
        >

          <ContainerAtuacao className="mb-3 p-3">
            <TituloAtuacao>
              Gabriellin Buose
            </TituloAtuacao>
          </ContainerAtuacao>

          <Lista className={isMenuDropDownOpenGabi ? 'visivel' : 'escondido'}>
            <li>
              Sócia da Buose Arquitetura e interiores
            </li>
            <li>
              Mestranda em Arquitetura e Urbanismo UFSC
            </li>
            <li>
              Especialista em Arquitetura Comercial 
            </li>
            <li>
              Diretora de projetos e aprovações 
            </li>
            <li>
            Interessada por projetos Arquitetônicos e Interiores
            </li>
          </Lista>

        </DivImagem>
      </div>
    </Section>
  );
}


