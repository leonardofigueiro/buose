import Link from 'next/link';
import { useEffect } from 'react';
import styled from 'styled-components';

const Titulo = styled.h5`
  font-size: 16px;

`;

const OffCanvas = styled.div`
  background-color: var(--secondary7);
  & .btn {
    padding: 0;
  }
`;

const Item = styled.div`
  align-items: center;
  border-bottom: 1px dotted;
  display: flex;
  gap: 10px;
  width: 100%;
  & a {
    font-size: 0.8rem;
  }
`;


const Item2 = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  width: 100%;
  & a {
    font-size: 0.8rem;
  }
`;

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function MenuLateral() {
  useEffect(() => {
    require('bootstrap/js/dist/collapse');
  },[]);
  return (
    <OffCanvas className="offcanvas mobile-toggler offcanvas-end w-75" tabIndex={-1} id="menuLateral" aria-labelledby="menuLateralLabel" >
      <div className="offcanvas-header">
        <Titulo className="offcanvas-title" id="menuLateralLabel">Menu</Titulo>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-4">
        <Item data-bs-dismiss="offcanvas" className="item">
          <Link href={'/'} >Inicio</Link>
        </Item>
        <Item className="item" data-bs-dismiss="offcanvas">
          <Link href={'/projetos'} >Projetos</Link>
        </Item>
        <Item  className="nav-item">
          <a className="btn" 
            data-bs-toggle="collapse" 
            href="#collapseExample"
            role="button" 
            aria-expanded="false" 
            aria-controls="collapseExample">
            Soluções
          </a>
        </Item>
        <Lista className="collapse" id="collapseExample">
          <Item2 data-bs-dismiss="offcanvas">
            <Link href={'/solucoes/consultoria-de-interiores'} replace>Consultoria</Link>
          </Item2>
          <Item2 data-bs-dismiss="offcanvas">
            <Link  href={'/solucoes/projeto-de-marcenaria'} replace >Marcenaria</Link>
          </Item2>
          <Item2 data-bs-dismiss="offcanvas">
            <Link  href={'/solucoes/projeto-de-interiores'} replace>Interiores</Link>
          </Item2>
        </Lista>

        <Item className="item" data-bs-dismiss="offcanvas">
          <Link  href={'/about'}>Sobre nós</Link>
        </Item>

      </div>
    </OffCanvas>


  );
}