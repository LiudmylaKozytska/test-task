import React from "react";
import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Oval />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
