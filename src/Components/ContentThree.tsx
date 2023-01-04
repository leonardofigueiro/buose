import Link from 'next/link';
import styled from 'styled-components';
import {  Divisor, Paragrafo, TituloCard } from './Commons/Cards';


const Section = styled.section`
  color: var(--secondary14);
  font-family: var(--fontDisplay);
  background: url('bg/bg_content2.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 2px 4px rgba(19, 6, 6, 0.3);
`;

export default function ContentThree() {
  return (
    <Section className='mt-4 p-5'>
      <div className="container d-flex justify-content-center gap-4">

        <div className='w-50 d-flex flex-column align-items-center'>
          <TituloCard>pré-projeto ao seu alcance</TituloCard>
          <Divisor className='mt-4 mb-4'/>
          <Paragrafo className='mb-5'>
          Estudos e Análises de Viabilidade são 
          artifícios que ajudam as pessoas a tomarem 
          decisões para seus projetos de vida e 
          empreendimentos. Nossa máxima sobre avaliação 
          de terrenos, “todo terreno vale aquilo que ele 
          proporciona de resultados”. Convidamos as 
          pessoas a utilizarem nossos conhecimentos sem 
          qualquer compromisso, contatando-nos antes 
          de efetivarem qualquer compra de terreno, 
          seja com o intuito de morar, produzir ou investir.
          </Paragrafo>
          <Link style={{
            color: 'var(--primary1)',
            boxSizing: 'border-box',
            background: 'linear-gradient(180deg, #447054 0%, #295237 100%)',
            border: '1px solid var(--primary12)',
            borderRadius: '30px',
            padding: '18px 30px',
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'uppercase',
            width: '30%',
            flexWrap: 'nowrap'
          }} href='#'>saiba mais</Link>
        </div>
        <div className='position-relative'>
          <img className='img-fluid' src='images/business.png' alt="" style={{width: '80%', zIndex: '10'}}/>
        </div>



      </div>
    </Section>
  );
}