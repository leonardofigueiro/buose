import Link from 'next/link';
import styled from 'styled-components';
import Home from '../../public/icons/home.svg';
import Projeto from '../../public/icons/projeto.svg';
import { paginas } from '../../src/paginas';
import { useRouter } from 'next/router';




const Titulo = styled.h5`
  font-size: 26px;
  text-transform: uppercase;

`;

const OffCanvas = styled.div`
  background-color: var(--secondary7);
`;

const Item = styled.div`
  align-items: center;
  border-bottom: 1px dotted;
  display: flex;
  
  gap: 10px;
  width: 100%;
  & a {
    font-size: 22px;
  }
`;

export default function MenuLateral() {
  const Router = useRouter();
  return (
    <OffCanvas className="offcanvas offcanvas-end" tabIndex={-1} id="menuLateral" aria-labelledby="menuLateralLabel">
      <div className="offcanvas-header">
        <Titulo className="offcanvas-title" id="menuLateralLabel">Menu</Titulo>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4">
        {paginas.map((pagina) => {
          return (<Item key={pagina.id} className="item">
            <Link className={Router.pathname === pagina.caminho ? 'ativo' : ''} href={pagina.caminho}>{pagina.nome}</Link>
          </Item>);
        })}

      </div>
    </OffCanvas>


  );
}