import Link from 'next/link';
import styled from 'styled-components';
import { SubTitle, TituloCard } from './Commons/Cards';
import Image from 'next/image';
import Business from '../public/images/business.png';

const Section = styled.section`
  color: var(--secondary14);
  font-family: var(--fontDefault);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Lista = styled.ul`
  font-weight: 600;
  list-style: none;
    & li::after{
      content: url('icons/rec.svg');
      margin-left: 4px;
    }
`;

const DivImagem = styled.div`
  @media(max-width: 540px){
    display: none;
  }
 `;

export default function ContentFive() {
  return (
    <Section className='mt-4 p-5 d-flex justify-content-center container gap-5 flex-wrap-reverse flex-lg-nowrap'>
      <div className='d-flex flex-column align-items-end gap-3'>
        <TituloCard>Pré-projeto ao seu alcance</TituloCard>
        <SubTitle className='text-end'>Com um projeto profissional, você:</SubTitle>

        <Lista className='text-end d-flex flex-column gap-2'>
          <li>
            poupa tempo
          </li>
          <li>
            economiza dinheiro
          </li>
          <li>
            aproveita melhor o seu espaço
          </li>
          <li>
            agreva valor ao seu imóvel
          </li>
        </Lista>
        <Link className='link' style={{textDecoration: 'none'}} href='/solucoes'>Conheça mais vantagens
        </Link>
      </div>
      <DivImagem>
        <Image src={Business} alt="Imagem de pessoas efetuando cálculos de custos" />
      </DivImagem>
    </Section>
  );
}