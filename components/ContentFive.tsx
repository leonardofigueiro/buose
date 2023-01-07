import Link from 'next/link';
import styled from 'styled-components';
import { SubTitle, TituloCard } from './Commons/Cards';


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

const Img = styled.img`
  width: 100%;
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
        <Link className='link' style={{textDecoration: 'none'}} href='#'>Conheça mais vantagens
        </Link>
      </div>
      <div className='position-relative'>
        <Img className='img-fluid' src='images/business.png' alt="" style={{ width: '80%', zIndex: '10' }} />
      </div>




    </Section>
  );
}