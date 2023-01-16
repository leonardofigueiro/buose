import classname from './Interiores.module.scss';
import Checked from '../../../public/icons/checked_m.svg';


export default function SectionTwo() {

  return (
    <section className='mt-4 d-flex justify-content-center container align-items-center flex-wrap flex-lg-nowrap'>
      <div className={classname.section__left}>
        <span className={classname.section__divisor}></span>
        <h2 className={classname.section__titulo}>O que está incluso?</h2>
        <h3 className={classname.section__subtitulo}>Comece a transformação de seus ambientes</h3>
      </div>

      <div className={classname.section__right}>
        <ul className={classname.lista}>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}>Projeto de <b>mobiliário</b></h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}><b>Projeto de iluminação</b>com detalhamento</h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}>Veja como ficará <b>seu ambiente em 3D</b></h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}><b>Listagem</b> de todos os itens usados no projeto</h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}><b>Detalhamento</b> de tudo o que você precisa</h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}><b>Reuniões</b> com especialistas</h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}>Escolha dos<b>revestimentos</b></h4>
          </li>
          <li className={classname.lista__item}>
            <div className={classname.lista__icon}><Checked /></div>
            <h4 className={classname.lista__texto}><b>Acompanhamento</b> na montagem dos ambientes</h4>
          </li>
        </ul>
      </div>
    </section>
  );
}