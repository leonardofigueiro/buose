import Link from 'next/link';
import styled from 'styled-components';
import { SubTitle, TituloCard } from './Commons/Cards';
import Image from 'next/image';
import Content1 from '../public/images/content1.png';


const Section = styled.section`
  color: var(--secondary14);
  font-family: var(--fontDefault);
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 540px) {
    width: 100%;
  }
`;

const DivTexto =styled.div`
  gap: 30px;
  @media (max-width: 540px) {
    justify-content: center;
    gap: 15px;
  }
 `;

const DivImagem = styled.div`
  @media(max-width: 540px){
    display: none;
  }
 `;

export default function ContentOne() {
  return (
    <Section className='mt-4 d-flex justify-content-center gap-4 flex-wrap flex-md-nowrap flex-lg-nowrap'>

      <DivImagem >
        <Image src={Content1} alt="Imagem realista de uma bela casa moderna" />
      </DivImagem>
      <DivTexto className='d-flex flex-column'>
        <TituloCard>Quer transformar seu ambiente com ajuda profissional de arquitetura, Online?</TituloCard>
        <SubTitle>Aqui você consegue,<br /> e sem gastar muito!</SubTitle>
        <Link className='link' href='/comofunciona' style={{textDecoration: 'none', width: '200px'}}>
            saiba mais
        </Link>
      </DivTexto>
    </Section>
  );
}