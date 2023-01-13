import styled from 'styled-components';


const UlCard = styled.ul`
  
  text-align: left;

  & li {
    font-size: 12px;
    display: flex;
    gap: 10px;
    list-style: none;
    &::before{
      content: url('icons/checkedCard.svg');
      
    }
  }
`;
const SpanCard = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
const H1Card = styled.h2`
  font-family: var(--fontDisplay);
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;
const PCard = styled.p`
  font-size: 12px;
`;
const HrCard = styled.hr`
  width: 90%;
`;

export {UlCard, SpanCard, H1Card, PCard, HrCard};