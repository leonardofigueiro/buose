import Link from 'next/link';
import styled from 'styled-components';
import { SubTitle, TituloCard } from './Commons/Cards';


const Section = styled.section`
  color: var(--secondary14);
  font-family: var(--fontDefault);
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;
const DivTexto =styled.div`
  gap: 30px;
  @media (max-width: 540px) {
    justify-content: center;
    gap: 15px;
  }
 `;

export default function ContentOne() {
  return (
    <Section className='mt-4 d-flex justify-content-center gap-4 flex-wrap flex-md-nowrap flex-lg-nowrap'>

      <div className='d-flex justify-content-end'>
        <Img className='img-fluid' src='images/content1.png' alt="Imagem realista de uma bela casa moderna" />
      </div>
      <DivTexto className='d-flex flex-column'>
        <TituloCard>Quer transformar seu ambiente com ajuda profissional?</TituloCard>
        <SubTitle>Aqui você consegue,<br /> e sem gastar muito!</SubTitle>
        <Link className='link' href='/comofunciona' style={{textDecoration: 'none', width: '200px'}}>
            saiba mais
        </Link>
      </DivTexto>
    </Section>
  );
}