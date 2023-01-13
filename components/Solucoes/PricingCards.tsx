import { Divisor, SubTitle, TituloCard } from '../Commons/Cards';
import styled from 'styled-components';
import CardPrincipal from './Cards/CardPrincipal';
import CardConsultoria from './Cards/CardConsultoria';
import CardMarcenaria from './Cards/CardMarcenaria';

const Precos = styled.section`

`;

const DivCards = styled.div`

`;


export default function PricingCards() {
  return (
    <Precos className="mt-5 d-flex flex-column container align-items-center gap-4">
      <div className='d-flex flex-column align-items-center'>

        <TituloCard style={{ maxWidth: '100%' }}>BUOSE ARQUITETURA</TituloCard>
        <SubTitle style={{ color: 'var(--secondary12)' }}>Soluções em arquitetura</SubTitle>
        <Divisor />
      </div>

      <DivCards className='d-flex gap-3 align-items-center flex-wrap flex-lg-nowrap justify-content-center'>

        <CardConsultoria />

        <CardPrincipal />



        <CardMarcenaria />



      </DivCards>

    </Precos>
  );
}