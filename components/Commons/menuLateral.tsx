import Link from 'next/link';
import styled from 'styled-components';
import Home from '../../public/icons/home.svg';
import Projeto from '../../public/icons/projeto.svg';



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
  return (
    <OffCanvas className="offcanvas offcanvas-end" tabIndex={-1} id="menuLateral" aria-labelledby="menuLateralLabel">
      <div className="offcanvas-header">
        <Titulo className="offcanvas-title" id="menuLateralLabel">Menu</Titulo>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4">
        <Item>
          <Home/>
          <Link href={'/'}> Home </Link>
        </Item>
        <Item>
          <Projeto/>
          <Link href={'/projetos'}> Projetos </Link>
        </Item>
          
      </div>
    </OffCanvas>


  );
}