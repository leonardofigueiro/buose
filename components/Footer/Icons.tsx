import styled from 'styled-components';
import Coffe from '../../public/icons/coffe.svg';
import Checked from '../../public/icons/checked.svg';
import Smile from '../../public/icons/smile.svg';

const Number = styled.h4`
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

`;

export default function Icons() {
  return (
    <div className='d-flex  justify-content-center'>
      <div className='d-flex flex-column align-items-center'>
        <Logo><Coffe /></Logo>
        <Number>
          785
        </Number>
        <Description>
          Atendimentos realizados
        </Description>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <Logo><Checked /></Logo>
        <Number>
          785
        </Number>
        <Description>
          Projetos Concluídos
        </Description>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <Logo><Smile /></Logo>
        <Number>
          785
        </Number>
        <Description>
          Clientes satisfeitos
        </Description>
      </div>
    </div>
  );
}