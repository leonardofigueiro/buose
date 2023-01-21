import styled from 'styled-components';
import Coffe from '../../public/icons/coffe.svg';
import Checked from '../../public/icons/checked.svg';
import Smile from '../../public/icons/smile.svg';
import { useCounter } from '../../src/hooks/Counter';

const Number = styled.h4`
text-align: center;
display: flex;
  justify-content: center;
color: var(--secondary11);
font-family: var(--fontDefault);
font-weight: 700;
font-size: 42px;
@media (max-width: 540px) {
    font-size: 32px;
  }
`;

const Description = styled.h5`
color: var(--secondary11);
font-family: var(--fontDefault);
font-size: 18px;
font-weight: 700;
line-height: 110%;
text-align: center;
width: 170px;
@media (max-width: 540px) {
  font-size: 16px;
  width: 110px;
  }
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;

`;

export default function Icons() {

  const countAtendimentos = useCounter(0, 137);
  const countProjetos = useCounter(0, 83);
  const countClientes = useCounter(0, 90);

  return (
    <div className='d-flex  justify-content-center'>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <Logo><Coffe /></Logo>
        <Number>
          {countAtendimentos}
        </Number>
        <Description>
          Atendimentos realizados
        </Description>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <Logo><Checked /></Logo>
        <Number>
          {countProjetos}
        </Number>
        <Description>
          Projetos Concluídos
        </Description>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <Logo><Smile /></Logo>
        <Number>
          {countClientes}
        </Number>
        <Description>
          Clientes satisfeitos
        </Description>
      </div>
    </div>
  );
}