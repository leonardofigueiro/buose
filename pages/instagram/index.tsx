import classname from '../../styles/Instabio.module.scss';
import { useEffect, useState } from 'react';
import Internet from '../../public/icons/Instagram/internet.svg';
import Whatsapp from '../../public/icons/Instagram/msg.svg';
import { useInterval } from '../../src/hooks/Shake';
import Logo from '../../public/logos/logoBuose.svg';
import Image from 'next/image';

interface ShakeElementProps {

}


const InstaBio: React.FC<ShakeElementProps> = (props) => {
  const [transparent, setTransparent] = useState(false);
  const [shake, setShake] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTransparent(true);
    }, 500);
  }, []);

  useInterval({
    callback: () => {
      setShake(!shake);
    },
    delay: 3000
  });



  return (
    <body className={classname.body}>
      <main className={transparent ? classname.mainVisivel : classname.main}>
        <header className={classname.header}>

          <Image src={Logo} alt='Logo Buose Arquitetura' width={200} />
          <h1>Buose Arquitetura</h1>
        </header>
        <div className={classname.shakingElement}>
          <ul className={`${shake ? classname.shake : ''}`}>
            <li>
              <a href="https://buosearquitetura.com.br/">
                <Internet />
                Site
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/66999130621">
                <Whatsapp />
                Brenda Buose
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/66999068622">
                <Whatsapp />
                Gabriellin Buose
              </a>
            </li>

          </ul>
        </div>
      </main>
    </body>

  );
}

export default InstaBio;