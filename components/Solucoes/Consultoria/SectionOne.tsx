import classname from './Consultoria.module.scss';




export default function SectionOne() {

  return (
    <section className={classname.section}>
      <div className="container text-end">
        <h2 className={classname.section__titulo}>Conte conosco</h2>
        <h3 className={classname.section__subtitulo}>obtenha uma consultoria online para repaginar seu ambientes</h3>
      </div>
    </section>
  );
}