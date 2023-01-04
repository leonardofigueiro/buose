import styled from 'styled-components';

const TituloCard = styled.h2`
  color: var(--secondary14);
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

const SubTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
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