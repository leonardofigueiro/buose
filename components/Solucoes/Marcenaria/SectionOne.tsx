import classname from './Consultoria.module.scss';




export default function SectionOne() {

  return (
    <section className={classname.section}>
      <div className="container text-end">
        <h2 className={classname.section__titulo}>Planeje!</h2>
        <h3 className={classname.section__subtitulo}>tá pensando em trocar ou reorganizar sua mobilia? Temos a solução ideal</h3>
      </div>
    </section>
  );
}