import Image from 'next/image';
import Carolsel1 from '../public/images/carousel/carousel1.webp';
import Carolsel2 from '../public/images/carousel/carousel2.webp';
import Carolsel3 from '../public/images/carousel/carousel3.webp';

export default function Carroussel() {
  return (

    <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <Image src={Carolsel2} alt='Imagem realista de uma casa moderna com piscina' style={{width: '100vw', height: 'auto'}} />
        </div>
        <div className="carousel-item">
          <Image src={Carolsel3}  alt='Imagem realista de uma casa moderna com piscina' style={{width: '100vw', height: 'auto'}}/>
        </div>
        <div className="carousel-item active">
          <Image src={Carolsel1} alt='Imagem realista de uma sala com sofá e mesa de centro em madeira rústica' style={{width: '100vw', height: 'auto'}} priority/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>





  );
}