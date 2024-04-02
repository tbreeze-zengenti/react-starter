import React from 'react';
import { useSelector } from 'react-redux';
import { selectNavbar } from '~/redux/selectors';
import styled from 'styled-components';
import Link from '~/components/link/link.component';

const Navbar = () => {
  const navigation = useSelector(selectNavbar);

  return (
    <NavbarStyled>
      {navigation?.map(({ id, label, path }) => {
        return (
          <Link key={id} path={path}>
            {label}
          </Link>
        );
      })}
    </NavbarStyled>
  );
};
const NavbarStyled = styled.div`
  display: flex;
`;

export default Navbar;
