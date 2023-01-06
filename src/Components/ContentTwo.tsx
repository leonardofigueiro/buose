import styled from 'styled-components';
import OnlineIcon from '../../public/icons/online.svg';
import MedalIcon from '../../public/icons/dedicacao.svg';
import Wallet from '../../public/icons/wallet.svg';
import Project from '../../public/icons/projetos.svg';

const CardTitle = styled.h4`
  border-bottom: 3px solid var(--secondary6);
  color: var(--secondary13); 
  font-family: var(--fontDefault);
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  width: 130px;
`;

const CardDescription = styled.p`
  color: var(--secondary13);
  font-family: var(--fontDefault);
  font-weight: 400;
  font-size: 18px;
  line-height: 126.4%;
  width: 198px;
`;


export default function ContentTwo() {
  return (
    <section className="container p-2">
      <div className="d-flex gap-4 justify-content-center flex-wrap">

        <div>
          <div><OnlineIcon/></div>
          <CardTitle className='mt-2'>100% online</CardTitle>
          <CardDescription>
            O projeto é 100% online e entregue rapidamente
          </CardDescription>
        </div>
        <div>
          <MedalIcon />
          <CardTitle className='mt-2'>Dedicação</CardTitle>
          <CardDescription>
            Conte com um arquiteto experiente para tirar
            todas as suas dúvidas durante a execução.
          </CardDescription>
        </div>
        <div>
          <Wallet />
          <CardTitle className='mt-2'>Preço justo</CardTitle>
          <CardDescription>
            Nosso preço cabe no seu orçamento.
          </CardDescription>
        </div>
        <div>
          <Project />
          <CardTitle className='mt-2'>Projetos</CardTitle>
          <CardDescription>
            Conte com plantas humanizadas e imagens realistas.
          </CardDescription>
        </div>

      </div>
    </section>
  );
}