import styled from 'styled-components';
import Coffe from '../../../public/icons/coffe.svg';
import Checked from '../../../public/icons/checked.svg';
import Smile from '../../../public/icons/smile.svg';

const Number = styled.h4`
font-family: var(--fontDefault);
font-weight: 500;
font-size: 2rem;
`;

const Description = styled.h5`
font-family: var(--fontDefault);
font-weight: 300;
line-height: 170%;
text-transform: uppercase;
text-align: center;
width: 200px;

`;


export default function Icons() {
  return (
    <div className='d-flex'>
      <div className='d-flex flex-column align-items-center'>
        <Coffe />
        <Number className='mt-3'>
          785
        </Number>
        <Description>
          Atendimentos realizados
        </Description>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <Checked />
        <Number className='mt-3'>
          785
        </Number>
        <Description>
          Projetos Concluídos
        </Description>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <Smile />
        <Number className='mt-3'>
          785
        </Number>
        <Description>
          Clientes satisfeitos
        </Description>
      </div>
    </div>
  );
}