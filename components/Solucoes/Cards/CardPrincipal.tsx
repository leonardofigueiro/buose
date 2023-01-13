import Link from 'next/link';
import styled from 'styled-components';
import { H1Card, HrCard, PCard, SpanCard, UlCard } from './HTMLitems';



const DivPrincipal = styled.div`
  border: 3px solid #558164;
  box-shadow: 4px 4px 4px -1px rgba(75, 40, 38, 0.25);
  border-radius: 6px;
  color: var(--primary12);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  gap: 15px;
  height: auto;
  line-height: 15px;
  text-align: center;
  width: 280px;

`;


export default function CardPrincipal() {
  return (

    <DivPrincipal className='d-flex flex-column p-3 align-items-center'>
      <div>
        <SpanCard>Recomendado</SpanCard>
        <H1Card> INTERIORES</H1Card>

      </div>
      <PCard>Transforme completamente seu ambiente. Te auxilaremos em todas as etapas</PCard>

      <Link 
        href={'/solucoes/projeto-de-interiores'} 
        replace
        style={{
          color: 'var(--primary1)',
          background: 'var(--primary10)',
          padding: '10px 10px',
          textDecoration: 'none',
          width: '147px',
          fontSize: '12px', 
          borderRadius: '3px',
          border: '1px solid #1D432B'
        }}  
      >CONTRATE AGORA</Link>

      <HrCard />
      <div>
        <PCard style={{textAlign: 'left'}}>O projeto de interiores inclui:</PCard>
        <UlCard className='d-flex flex-column gap-2'>
          <li>projeto de mobiliário</li>
          <li>projeto de iluminação com detalhamento</li>
          <li>escolha de revestimentos</li>
          <li>três orçamentos*</li>
          <li>planta humanizada</li>
          <li>imagem realista</li>
          <li>auxílio para montagem do ambiente</li>

        </UlCard>


      </div>



    </DivPrincipal>


  );
}