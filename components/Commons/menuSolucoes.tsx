import Link from 'next/link';
import { Props } from 'react-input-mask';
import styled from 'styled-components';

const MenuDropdown = styled.div`
background: var(--secondary4);
border: 1px solid var(--secondary5);
position: absolute;
width: 200px;
`;

const ListaMenuDropdown = styled.ul`
display: flex;
flex-direction: column;
margin-top: 15px;
gap: 10px;
padding: 0;
`;

const ItemDropdown = styled.li`
list-style: none;
padding-left: 15px;
width: 100%;
& a {
  color: var(--secondary14);
}
&:hover{
  background: var(--secondary2);
}
`;


export default function MenuSolucoes(props: Props) {

  return (
    <>
      <MenuDropdown className={props.className}>
        <ListaMenuDropdown>
          <ItemDropdown>
            <Link href={'/solucoes/consultoria-de-interiores'} replace>Consultoria</Link>
          </ItemDropdown>
          <ItemDropdown>
            <Link href={'/solucoes/projeto-de-marcenaria'} replace >Marcenaria</Link>

          </ItemDropdown>
          <ItemDropdown>
            <Link href={'/solucoes/projeto-de-interiores'} replace>Interiores</Link>
          </ItemDropdown>
        </ListaMenuDropdown>

      </MenuDropdown>
    </>
  );
}