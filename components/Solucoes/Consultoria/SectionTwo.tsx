import classname from './Consultoria.module.scss';
import Checked from '../../../public/icons/checked_m.svg';


export default function SectionTwo() {

  return (
    <section className='mt-4 d-flex justify-content-center container align-items-center flex-wrap flex-lg-nowrap'>
      <div className={classname.section2__left}>
        <span className={classname.section2__left__divisor}></span>
        <h2 className={classname.section2__left__titulo}>O que está incluso?</h2>
        <h3 className={classname.section2__left__subtitulo}>Consultoria em ambientes</h3>
      </div>

      <div className={classname.section__right}>
        <ul className={classname.lista}>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}>Estudo de <b>layout</b></h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}>Indicação de<b> fornecedores</b>*</h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}>Escolha de <b>revestimentos</b></h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}><b>Planta humanizada</b></h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}>Duas<b> reuniões online</b></h4>
          </li>
        </ul>
      </div>
    </section>
  );
}