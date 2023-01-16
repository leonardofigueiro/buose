import styled from 'styled-components';



const Titulo = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 109.5%;
  letter-spacing: -0.065em;

  color: var(--secondary11);
`;

const Subtitulo = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 109.5%;
  text-align: right;
  letter-spacing: 0.015em;
  color: var(--secondary11);
`;

const Span = styled.span`
  height: 3px;
  background-color: var(--primary11);
  width: 100px;
`;


const H4 = styled.h4`
  color: var(--secondary11);
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

const Bold = styled.b`
  font-size: inherit;
  font-weight: 800;
`;

const Ul = styled.ul`
  
  text-align: left;

  & li {
    font-size: 12px;
    display: flex;
    gap: 10px;
    list-style: none;
    &::before{
      content: url('icons/checked_m.svg');
    }
  }
`;


export {Titulo, Subtitulo, Span, H4, Bold, Ul};