import styled from 'styled-components';
import Icons from './Footer/Icons';
import Link from 'next/link';



const Section = styled.section`
  background-color: var(--secondary1);
  border-radius: 0px 200px;
  height: 430px;
  width: 60vw;
`;

const Description = styled.span`
  color: var(--secondary11);
  font-family: var(--fontDefault);
  font-weight: 700;
  font-size: 27px;
  width: 30vw;
`;

export default function ContentThree() {
  return (
    <Section className="container p-4 d-flex flex-column align-items-center justify-content-between shadow-sm">
      <Icons />

      <Description className='text-sm-center'>
        Descubra seu estilo e crie uma decoração
        com a sua cara!
      </Description>

      <Link className='link' style={{textDecoration: 'none'
      }} href='#'>
        Faça seu projeto agora
      </Link>


    </Section>
  );
}