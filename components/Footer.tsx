import styled from 'styled-components';
import Socials from './Footer/Socials';
import Mail from './Footer/Mail';
import Phones from './Footer/Phones';
import Logo from '../public/logos/logoBuose.svg';


const Section = styled.section`
  background: url('bg/bg_footer.webp');
`;

const Nome = styled.span`
  font-family: var(--fontDefault);
  font-size: 36px;
  font-weight: 300;
  text-transform: uppercase;
`;

const SubNome = styled.span`
  font-family: var(--fontDisplay);
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
`;

export default function Footer() {
  return (
    <footer>
      <Section className="d-flex flex-column align-items-center mt-4 p-4">
        <Logo style={{width: '63'}}/>
        <Nome>Buose</Nome>
        <SubNome>Arquitetura | Interiores</SubNome>
        <Socials />
        <Mail />
        <Phones />

      </Section>

    </footer>
  );
}