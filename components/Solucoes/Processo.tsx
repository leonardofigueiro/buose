import styled from 'styled-components';
import Card from './Card';


const Section = styled.section`
  background-color: var(--secondary7);
  border-radius: 0px 200px;
  width: auto;
  @media (min-width: 0px) {
    border-radius: 0px 50px;
    width: 100vw;
  }
  @media (min-width: 540px) {
    border-radius: 0px 80px;
    width: auto;
  }
  @media (min-width: 768px) {
    border-radius: 0px 150px;
    width: auto;
  }
`;

const Description = styled.span`
  color: var(--secondary1);
  font-family: var(--fontDefault);
  font-weight: 700;
  font-size: 35px;
`;

export default function Processo() {
  return (
    <Section className=" container p-5 d-flex flex-column align-items-center justify-content-center shadow-sm gap-4">
      <Description className='text-center'>
        Como funciona
      </Description>

      <div className="d-flex gap-1 flex-wrap justify-content-center">
        <Card numero={1}>Escolha uma das opções e entre em contato com a nossa equipe.</Card>
        <Card numero={2}>Compartilhe as informações dos ambientes.</Card>
        <Card numero={3}>Realize o pagamento.</Card>
        <Card numero={4}>Acompanhe o desenvolvimento do projeto.</Card>
        <Card numero={5}>Navegue pelo seu novo ambiente.</Card>
      </div>


    </Section>
  );
}