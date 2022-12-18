import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active,
  :hover,
  :focus {
    color: red;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;
