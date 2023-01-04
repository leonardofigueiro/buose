import styled from 'styled-components';
import LogoBuose from '../../public/logos/logoBuose.svg';
import Link from 'next/link';

const Cabecalho = styled.header`
    background-color: var(--secondary7);
    box-shadow: 0px 2px 4px rgba(19, 6, 6, 0.3);
    display: flex;
`;

const DivLogo = styled.div`
    display: flex;
`;

const Logo = styled.h1`
    color: #ffffff;
    font-family: var(--fontDisplay);
    font-weight: 300;
    font-size: 57px;
    line-height: 71px;
    letter-spacing: 0.115em;
`;

const Links = styled.a`
    color: var(--secondary0);
    font-family: var(--fontDefault);
    font-weight: 300;
    &.ativo {
        border-bottom: 2px solid;
        border-color: var(--primary3);
    }
    &:hover{
        border-bottom: 2px solid var(--primary3);
        color: var(--secondary10);
        transition: 0.5s;
    }
`;

function Header() {
  return (
    <Cabecalho className='fixed-top'>

      <div className="container">
        <nav className="navbar navbar-expand-md ">
          <DivLogo>
            <Link className='navbar-brand' style={{ display: 'flex', gap: '10px' }} href={'/index'}>
              <LogoBuose />
              <Logo>buose</Logo>
            </Link>
          </DivLogo>
          <div className="container-fluid justify-content-end align-content-start flex-grow-1 pe-2">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Links className="nav-link ativo" href="#">Inicio</Links>
                <Links className="nav-link" href="#">Projetos</Links>
                <Links className="nav-link" href="#">Sobre nós</Links>
                <Links className="nav-link" href="#">Contato</Links>
              </div>
            </div>
          </div>
        </nav>

      </div>

    </Cabecalho>
  );
}

export default Header;