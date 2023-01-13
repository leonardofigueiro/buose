import Link from 'next/link';
import styled from 'styled-components';
import { H1Card, HrCard, PCard, UlCard } from './HTMLitems';



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


export default function CardConsultoria() {
  return (

    <DivPrincipal className='d-flex flex-column p-3 align-items-center'>
      <div>
        <H1Card style={{fontSize: '30px'}}> CONSULTORIA</H1Card>

      </div>
      <PCard>Para quem quer mudar mas não sabe por onde começar.</PCard>

      <Link 
        href={'/solucoes/consultoria-de-interiores'} 
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
        <PCard style={{textAlign: 'left'}}>A consultoria inclui:</PCard>
        <UlCard className='d-flex flex-column gap-2'>
          <li>estudo de layout</li>
          <li>indicação de fornecedores</li>
          <li>escolha dos revestimentos</li>
          <li>planta humanizada</li>
          <li>duas reuniões online ou presencial</li>

        </UlCard>


      </div>



    </DivPrincipal>


  );
}