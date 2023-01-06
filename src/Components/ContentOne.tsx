import Link from 'next/link';
import styled from 'styled-components';
import { Divisor, Paragrafo, SubTitle, TituloCard } from './Commons/Cards';


const Section = styled.section`
  color: var(--secondary14);
  font-family: var(--fontDefault);
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function ContentOne() {
  return (
    <Section className='mt-4 p-5 container-sm d-flex justify-content-center gap-4 flex-wrap'>

      <div>
        <img className='img-fluid' src='images/content1.png' alt="" />
      </div>
      <div className='w-50 d-flex flex-column align-items-start gap-5'>
        <TituloCard className='text-start'>Quer transformar seu ambiente com ajuda profissional?</TituloCard>
        <SubTitle>Aqui você consegue,<br /> e sem gastar muito!</SubTitle>
        <Link href='#' style={{textDecoration: 'none'}}>
          <div className='link'>
            saiba mais
          </div>
        </Link>
      </div>
    </Section>
  );
}