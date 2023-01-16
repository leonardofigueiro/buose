import Link from 'next/link';
import styled from 'styled-components';
import { Subtitulo, Titulo } from './Comons';
import Image from 'next/image';
import Interior1 from '../../../public/interiores/interior1.webp';
import Interior2 from '../../../public/interiores/interior2.webp';
import Interior3 from '../../../public/interiores/interior3.webp';


const Section = styled.section`


& a{
  border: 1px solid #1D432B;
  border-radius: 3px;
  color: #356044;
  font-family: var(--fontDefault);
  font-weight: 500;
  font-size: 12px;
  height: auto;
  line-height: 15px;
  margin-top: 10px;
  padding: 10px 15px;
  width: auto;
  text-decoration: none;
  text-align: center;
  &:hover{
    color: var(--primary1);
    background-color: var(--primary12);
  }
}
`;



export default function SectionOne() {

  return (
    <Section className='mt-5 d-flex flex-column align-items-end'>
      <div className="container text-end">
        <Titulo>Ambientes perfeitos</Titulo>
        <Subtitulo>é nossa especialidade</Subtitulo>

      </div>

      <div className="d-flex container-fluid justify-content-center gap-3 flex-wrap flex-lg-nowrap">
        <Image className='img-fluid' src={Interior1} alt={'Imagem realista de uma cozinha bem iluminada, de frente para o mar'} />
        <Image className='img-fluid' src={Interior2} alt={'Imagem realista de sala bem iluminada, com uma bela cozinha ao fundo'} />
        <Image className='img-fluid' src={Interior3} alt={'Imagem realista de uma bela recepção, com mesa de centro iluminada, e um sofá ao fundo'} />
      </div>
      <div className="container d-flex justify-content-end">
        <Link href={'/projetos'}> Ver mais projetos </Link>


      </div>
    </Section>
  );
}