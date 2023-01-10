import styled from 'styled-components';
import LogoBuose from '../public/logos/logoBuose.svg';
import Menu from '../public/icons/menu.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuLateral from './Commons/menuLateral';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { paginas } from '../src/paginas';


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
    transition: 1s;
`;

function Header() {

  // Lógica de diminuição do header
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const Router = useRouter();

  let pageTitle;
  switch (Router.pathname) {
    case paginas[0].caminho:
      pageTitle = paginas[0].nome;
      break;
    case paginas[1].caminho:
      pageTitle = paginas[1].nome;
      break;
    case paginas[2].caminho:
      pageTitle = paginas[2].nome;
      break;
    case paginas[3].caminho:
      pageTitle = paginas[3].nome;
      break;
  }



  return (
    <>
      <Head>
        <title>
          {pageTitle}
        </title>
      </Head>
      <header className='header fixed-top'>
        <div className="container d-flex justify-content-between align-items-center">
          <DivLogo id='logo' className='navb-logo'>
            <Link className='navbar-brand' style={{ display: 'flex', gap: '10px' }} href={'/index'}>
              <LogoBuose className={small ? 'logo_hidden' : 'logo_visible'} style={{ transition: '1s' }} />
              <Logo className={small ? 'text_logo_hidden' : ''}>buose</Logo>
            </Link>
          </DivLogo>


          {/* Links da página principal */}
          <div className="navb-items gap-4 d-none d-md-flex">
            {paginas.map((pagina) => {
              return (<div key={pagina.id.toString()} className="item">
                <Link className={Router.pathname === pagina.caminho ? 'ativo' : ''} href={pagina.caminho}>{pagina.nome}</Link>
              </div>);
            })}
          </div>

          {/* Botão de ativação do modal */}
          <div className="d-lg-none d-md-none">
          
            <a data-bs-toggle="offcanvas" href="#menuLateral" role='button' aria-controls="menuLateral">
              <Menu />
            </a>

          </div>

          {/* OffCanvas */}
          <MenuLateral />
        </div>
      </header >
    </>
  );
}

export default Header;