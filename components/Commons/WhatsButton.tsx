import { useState } from 'react';
import { useInterval } from '../../src/hooks/Shake';
import classname from '../../styles/WhatsButton.module.scss';
import classname2 from '../../styles/Instabio.module.scss';

export default function WhatsButton() {

  const [shake, setShake] = useState(false);

  useInterval({
    callback: () => {
      setShake(!shake);
    },
    delay: 3000
  });
  return (
    <div className={classname2.shakingElement}>
      <div className={`${classname.whatsappButton} ${shake ? classname2.shake : ''}`}>
        <a href="https://wa.me/+5566999130621?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos.">
          <img src="/icons/whatsapp75.svg" alt="Ícone do WhatsApp" /><br />
          <span>Fale conosco</span>
        </a>
      </div>
    </div>
  );
}