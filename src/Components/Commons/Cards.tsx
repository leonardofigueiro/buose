import styled from 'styled-components';

const TituloCard = styled.h2`
  color: var(--secondary14);
  font-size: 40px;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const Paragrafo = styled.p`
  font-family: var(--fontDefault);
  font-weight: 400;
  line-height: 170%;
`;

const Divisor = styled.div`
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #95AF9E 49.48%, rgba(255, 255, 255, 0) 100%);
  display: block;
  height: 5px;
  width: 100%;
`;


export { TituloCard, SubTitle, Paragrafo, Divisor};