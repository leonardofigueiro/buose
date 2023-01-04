import Link from 'next/link';
import styled from 'styled-components';
import {  Divisor, Paragrafo, SubTitle, TituloCard } from './Commons/Cards';


const Section = styled.section`
  color: var(--secondary14);
  font-family: var(--fontDisplay);
  background: url('bg/bg_content.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 2px 4px rgba(19, 6, 6, 0.3);
`;

export default function ContentOne() {
  return (
    <Section className='mt-4 p-5'>
      <div className="container d-flex justify-content-center gap-4">
        <div>
          <img className='img-fluid' src='images/content1.png' alt="" />
        </div>
        <div className='w-50 d-flex flex-column align-items-center'>
          <TituloCard>Buose arquitetura</TituloCard>
          <SubTitle>mais do que projetos</SubTitle>
          <Divisor className='mt-4 mb-4'/>
          <Paragrafo className='mb-5'>
            Nossa equipe atua no desenvolvimento de projetos
            de Arquitetura e Urbanismo, Design de Interiores,
            Análise de Viabilidade Técnica e Mercadológica para
            empreendimentos imobiliários dos mais variados portes,
            com desenvolvimento de estratégia de Marketing e Vendas,
            Design e Representação Gráfica. Arquiteturas além do
            projeto, significa proporcionar bem estar e qualidade
            de vida para todos os envolvidos, seja na construção
            de sonhos e/ou otimização de investimentos. Nos acompanhe
            em nosso blog e redes sociais, e claro, venha nos fazer
            uma visita!
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



      </div>
    </Section>
  );
}