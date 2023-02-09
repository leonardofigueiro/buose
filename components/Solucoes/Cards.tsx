import { SubTitle, TituloCard } from '../Commons/Cards';
import styled from 'styled-components';
import OnlineIcon from '../../public/icons/online.svg';
import MedalIcon from '../../public/icons/dedicacao.svg';
import Wallet from '../../public/icons/wallet.svg';
import Project from '../../public/icons/projetos.svg';



const DivTexto = styled.div`
gap: 30px;
@media (max-width: 540px) {
  justify-content: center;
  gap: 15px;
}
`;

const CardTitle = styled.h4`
border-bottom: 3px solid var(--secondary6);
color: var(--secondary13); 
font-family: var(--fontDefault);
font-weight: 700;
font-size: 20px;
line-height: 24px;
width: 130px;
@media (max-width: 540px) {
  font-size: 18px;
  width: 120px;
}
`;

const CardDescription = styled.p`
color: var(--secondary13);
font-family: var(--fontDefault);
font-weight: 400;
font-size: 18px;
line-height: 126.4%;
width: 198px;
@media (max-width: 540px) {
  font-size: 16px;
  line-height: 110%;
  width: 170px;
}
@media (max-width: 768px) {
  font-size: 16px;
  line-height: 110%;
  width: 150px;
}
`;

const DivCards = styled.section`

`;


export default function Cards() {
  return (
    <section className='container mt-5 d-flex justify-content-center flex-wrap flex-lg-nowrap flex-md-nowrap'>


      <DivTexto className='d-flex flex-column gap-0 justify-content-center'>
        <TituloCard>O que está incluso?</TituloCard>
        <SubTitle style={{color: 'var(--secondary14)', fontSize: '20px', fontWeight: '700'}}>Comece a sua transformação</SubTitle>

      </DivTexto>


      <DivCards className="justify-content-start my-4 d-flex gap-3 flex-wrap">

        <div>
          <div><OnlineIcon /></div>
          <CardTitle className='mt-2'>Veja seu novo ambiente</CardTitle>
          <CardDescription>
            Veja seu novo ambiente em uma planta baixa humanizada,
            vendo a disposição de todos os móveis, podendo organizar
            tudo no lugar certo!
          </CardDescription>
        </div>
        <div>
          <MedalIcon />
          <CardTitle className='mt-2'>Lista de materiais</CardTitle>
          <CardDescription>
            Conte com um arquiteto experiente para tirar todas as suas
            dúvidas durante a execução.
          </CardDescription>
        </div>
        <div>
          <Wallet />
          <CardTitle className='mt-2'>Aproveitamento do espaço</CardTitle>
          <CardDescription>
            Um layout 3D é desenvolvido através das informações que você nos
            passar, é possível visualizar o resultado de todas as nossas ideias.
            Desenvolvemos também todo o projeto detalhado com medidas e
            informações para executar o projeto sem nenhum erro.
          </CardDescription>
        </div>
        <div>
          <Project />
          <CardTitle className='mt-2'>Projeto de iluminação</CardTitle>
          <CardDescription>
            Ilumine! <br />Se precisar, podemos fazer seu projeto de iluminação, com todas as especificações.
          </CardDescription>
        </div>

      </DivCards>







    </section>


  );
}