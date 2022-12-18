import { Outlet } from 'react-router-dom';
import { NavItem, NavList, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavItem to="/">Home</NavItem>
            </li>
            <li>
              <NavItem to="add">Add</NavItem>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
