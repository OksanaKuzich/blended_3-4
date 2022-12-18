import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
`;

export const NavItem = styled(NavLink)`
  font-size: 20px;
  color: black;
  text-decoration: none;

  &.active,
  :hover,
  :focus {
    color: #db0000;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

