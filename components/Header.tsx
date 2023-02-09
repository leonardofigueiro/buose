import styled from 'styled-components';
import LogoBuose from '../public/logos/logoBuose.svg';
import Menu from '../public/icons/menu.svg';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MenuLateral from './Commons/menuLateral';
import { useRouter } from 'next/router';
import { useOnHoverOutside } from '../src/hooks/useOnHoverOutside';
import MenuSolucoes from './Commons/menuSolucoes';

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
    transition: width 2s;
`;



function Header() {
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };
  // Lógica de diminuição do header
  const [small, setSmall] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 200)
      );
    }
    require('bootstrap/js/dist/offcanvas');

  }, []);

  const Router = useRouter();
  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
  return (
    <>

      <header className='header fixed-top'>
        <div className="container d-flex justify-content-between align-items-center">
          <DivLogo id='logo' className='navb-logo'>
            <Link className='navbar-brand' style={{ display: 'flex', gap: '10px' }} href={'/'}>
              <LogoBuose className={small ? 'logo_hidden' : 'logo_visible'} style={{ transition: '1s' }} />
              <Logo className={small ? 'text_logo_hidden' : ''}>buose</Logo>
            </Link>
          </DivLogo>

          {/* Links da página principal */}
          <div className="navb-items gap-4 d-none d-md-flex">
            <div className="item">
              <Link className={Router.pathname === '/' ? 'ativo' : ''} href={'/'}>Inicio</Link>
            </div>
            <div className="item">
              <Link className={Router.pathname === '/projetos' ? 'ativo' : ''} href={'/projetos'}>Projetos</Link>
            </div>
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <Link
                onMouseOver={() => {
                  setMenuDropDownOpen(true);
                }}
                className={Router.pathname === '/solucoes' ? 'ativo' : ''}
                href={'/solucoes'}
              >Soluções {isMenuDropDownOpen ? '^' : '∨'}</Link>


              <MenuSolucoes className={isMenuDropDownOpen ? 'visivel' : 'escondido'} mask={''}/>


            </div>
            <div className="item">
              <Link className={Router.pathname === '/about' ? 'ativo' : ''} href={'/about'}>Sobre nós</Link>
            </div>
          </div>
          
          {/* Botão de ativação do modal */}
          <div className="d-lg-none d-md-none">

            <a data-bs-toggle="offcanvas" href="#menuLateral" role='button' aria-controls="menuLateral">
              <Menu/>
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