import styled from 'styled-components';
import Icons from './Footer/Icons';
import Socials from './Footer/Socials';
import Mail from './Footer/Mail';
import Phones from './Footer/Phones';


const Section = styled.section`
  background: url('bg/bg_footer.png');
`;



export default function Footer() {
  return (
    <footer>
      <Section className="d-flex justify-content-center mt-4 p-5">
        <div className='d-flex flex-column w-50 gap-3'>
          <Icons/>
          <Socials/>
          <Mail/>
          <Phones/>
        </div>
        <div>
          Formulario
        </div>
      </Section>
      <section>
        linha 2
      </section>

    </footer>
  );
}