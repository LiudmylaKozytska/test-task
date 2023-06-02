import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Users />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
