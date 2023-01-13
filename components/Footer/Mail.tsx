import styled from 'styled-components';


const Endereco = styled.p`
  font-family: var(--fontDisplay);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  text-transform: uppercase;
`;


export default function Mail() {
  return (
    <div className='mt-2'>
      <Endereco className='mt-3 text-center'>
        Rua das Ameixeiras, 118, JARDIM JACARANDÁS <br/>
        SINOP - MT, CEP 78557-709
      </Endereco>

    </div>

  );
}