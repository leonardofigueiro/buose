import styled from 'styled-components';


const Externa = styled.div`
  font-family: var(--fontDefault);
  background-color: var(--secondary1);
  padding: 10px 10px;
  height: 190px;
  width: 170px;
`;
const Numero = styled.span`
  background-color: var(--primary9);
  border-radius: 50px;
  color: var(--primary1);
  font-size: 40px;
  font-weight: 700;
  height: 60px;
  width: 60px;
`;

const Divisor = styled.span`
  background-color: var(--secondary6);
  display: block;
  height: 3px;
  width: 60px;
`;

const Description = styled.p`
  color: var(--secondary13);
  font-size: 12px;
  font-weight: 400;
`;

interface Props {
  numero: number,
  children?: string
}

export default function Card(props: Props) {
  return (
    <Externa className="d-flex flex-column gap-2 align-items-center">
      <Numero className="d-flex justify-content-center">{props.numero}</Numero>
      <Divisor />
      <Description>
        {props.children}
      </Description>

    </Externa>
  );
}