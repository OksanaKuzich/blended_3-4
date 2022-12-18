import { Outlet } from 'react-router-dom';
import { NavItem, NavList } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
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
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
