import styled from 'styled-components';


const Title = styled.p`
  color: var(--secondary14);
  font-size: 50px;
  font-family: var(--fontDefault);
  font-weight: 500;
  line-height: 109.5%;
  text-align: center;
  width: 500px;
  & b {
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: 700;
  }
`;

const Label = styled.label`
  color: var(--secondary14);
  font-size: 14px;
  font-family: var(--fontDefault);
  font-weight: 700;
  margin-left: 5px;
`;

const Input = styled.input`
  background: var(--secondary1);
  border: 1px solid var(--secondary2);
  border-radius: 10px;
  height: 56px;
  padding: 0 0 0 10px;
  width: 100%;
`;
const TextArea = styled.textarea`
  background: var(--secondary1);
  border: 1px solid var(--secondary2);
  border-radius: 10px;
  padding: 5px 5px 0 10px;
  width: 100%;
`;

const Button = styled.button`
  background: linear-gradient(180deg, #447054 0%, #295237 100%);
  border: 1px solid #1D432B;
  border-radius: 30px;
  color: var(--primary1);
  padding: 18px 30px;
  text-align: center;
  width: 50%;
`;

export { Title, Button, TextArea, Input, Label};