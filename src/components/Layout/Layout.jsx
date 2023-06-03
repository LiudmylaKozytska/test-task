import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { NavItem, NavList, NavigationLink, Header, Main } from './LayoutStyles';

const Layout = () => {
  return (
    <>
      <Header>
        <NavList>
          <NavItem>
            <NavigationLink to="/">Home</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink to="/tweets">Tweets</NavigationLink>
          </NavItem>
        </NavList>
      </Header>
      <Main>
        <Suspense fallback={<Oval />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
