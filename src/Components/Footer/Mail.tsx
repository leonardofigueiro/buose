import styled from 'styled-components';

const EnderecoTitulo = styled.h5`
  box-sizing: border-box;
  border-bottom: 5px solid var(--primary6);
  font-family: var(--fontDisplay);
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  text-transform: uppercase;
  width: 100px;
`;

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
      <EnderecoTitulo>
        Endereço
      </EnderecoTitulo>
      <Endereco className='mt-4'>
        RUA COM NOME DE ÁRVORE, 13, JARDIM JACARANDÁS <br/>
        SINOP - MT, CEP 78123-012
      </Endereco>

    </div>

  );
}