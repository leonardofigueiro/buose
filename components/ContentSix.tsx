import styled from 'styled-components';
import Quotes from '../public/icons/quotes.svg';



const Section = styled.section`
  color: var(--primary1);
  background-color: var(--secondary1);
  border-radius: 200px 0px;
  font-family: var(--fontDefault);
  height: 430px;
  padding: 50px 20px;
  width: 100%;
  @media (max-width: 540px) {
    border-radius: 0px 80px;
    margin: 0 5px 0 5px;
    height: auto;
    width: 100vw;
  }
  @media (max-width: 768px) {
    border-radius: 0px 80px;
    margin: 0 5px 0 5px;
    height: auto;
    width: 100vw;
  }
  @media (max-width: 991px) {
    border-radius: 0px 150px;
    width: auto;
  }
  @media (max-width: 1199px) {
    border-radius: 0px 150px;
    width: auto;
  }
`;

const Cartao = styled.div`
  background-color: var(--primary11);
  width: 100%;
`;

const Dep = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 150%;
  width: 100%;
  
`;

const Nome = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const Desc = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export default function ContentSix() {
  return (
    <Section className="container d-flex justify-content-center gap-3 shadow flex-wrap flex-md-nowrap flex-lg-nowrap">
      <Cartao className='d-flex flex-column p-3 justify-content-between'>
        <Quotes/>
        <Dep className='text-center'>
        Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Aliquam perferendis, assumenda 
        fuga dolor consequatur eum omnis, deleniti, 
        odio totam necessitatibus laboriosam voluptas 
        eaque dicta accusamus debitis delectus iusto 
        earum quibusdam?
        </Dep>
        <div className='text-center d-flex flex-column'>
          <Nome>Nome</Nome>
          <Desc>Consultoria online</Desc>
        </div>
      </Cartao>
      <Cartao className='d-flex flex-column p-3 justify-content-between'>
        <Quotes/>
        <Dep className='text-center'>
        Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Aliquam perferendis, assumenda 
        fuga dolor consequatur eum omnis, deleniti, 
        odio totam necessitatibus laboriosam voluptas 
        eaque dicta accusamus debitis delectus iusto 
        earum quibusdam?
        </Dep>
        <div className='text-center d-flex flex-column'>
          <Nome>Nome</Nome>
          <Desc>Consultoria online</Desc>
        </div>
      </Cartao>
      <Cartao className='d-flex flex-column p-3 justify-content-between'>
        <Quotes/>
        <Dep className='text-center'>
        Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Aliquam perferendis, assumenda 
        fuga dolor consequatur eum omnis, deleniti, 
        odio totam necessitatibus laboriosam voluptas 
        eaque dicta accusamus debitis delectus iusto 
        earum quibusdam?
        </Dep>
        <div className='text-center d-flex flex-column'>
          <Nome>Nome</Nome>
          <Desc>Consultoria online</Desc>
        </div>
      </Cartao>
    </Section>
  );
}