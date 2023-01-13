import Link from 'next/link';
import styled from 'styled-components';
import { H1Card, HrCard, PCard, SpanCard, UlCard } from './HTMLitems';



const DivPrincipal = styled.div`
  border: 1px solid #C1B8B8;
  box-shadow: 0px 0px 5px 1px rgba(75, 40, 38, 0.25);
  border-radius: 6px;
  color: var(--primary12);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  gap: 15px;
  height: 450px;
  line-height: 15px;
  text-align: center;
  width: 260px;
`;


export default function CardMarcenaria() {
  return (

    <DivPrincipal className='d-flex flex-column p-3 align-items-center'>
      <div>
        <H1Card style={{fontSize: '30px'}}> MARCENARIA</H1Card>

      </div>
      <PCard className='mb-4'>Sua mobília de cara nova</PCard>

      <Link 
        href={'/solucoes/projeto-de-marcenaria'} 
        replace
        style={{
          color: 'var(--primary10)',
          padding: '10px 10px',
          textDecoration: 'none',
          width: '147px',
          fontSize: '12px', 
          borderRadius: '3px',
          border: '1px solid #1D432B',
        }}  
      >CONTRATE AGORA</Link>

      <HrCard />
      <div>
        <PCard style={{textAlign: 'left'}}>O projeto de marcenaria inclui:</PCard>
        <UlCard className='d-flex flex-column gap-2'>
          <li>estudo de layout</li>
          <li>detalhamento dos móveis</li>
          <li>uma online ou presencial</li>

        </UlCard>


      </div>



    </DivPrincipal>


  );
}