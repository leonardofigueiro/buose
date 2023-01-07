import styled from 'styled-components';
import Phone from '../../public/icons/phone.svg';
import Whats from '../../public/icons/whatsapp.svg';

const DivNumeros = styled.div`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const Tel = styled.h5`
  color: var(--primary4);
  font-family: var(--fontDefault);
  font-size: 18px;
  letter-spacing: 0.075em;
  font-weight: 600;
`;

export default function Phones() {
  return (
    <DivNumeros className='d-flex gap-4 justify-content-center flex-wrap flex-md-nowrap'>
      <div className='d-flex gap-1 align-items-end'>
        <Phone/>
        <Tel>(65)99999-9999</Tel>
      </div>
      <div className='d-flex gap-1 align-items-end'>
        <Whats/>
        <Tel >(65)99999-9999</Tel>
      </div>
    </DivNumeros>

  );
}



