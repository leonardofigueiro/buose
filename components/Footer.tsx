import Socials from './Footer/Socials';
import Mail from './Footer/Mail';
import Phones from './Footer/Phones';
import Logo from '../public/logos/logoBuose.svg';
import classname from './Footer/Footer.module.scss';
import WhatsButton from './Commons/WhatsButton';


export default function Footer() {
  return (
    <footer>
      <section className={classname.Footer}>
        <Logo style={{width: '63'}}/>
        <span className={classname.Footer__nome}>Buose</span>
        <span className={classname.Footer__subnome}>Arquitetura | Interiores</span>
        <Socials />
        <Mail />
        <Phones />
        <WhatsButton/>
      </section>

    </footer>
  );
}