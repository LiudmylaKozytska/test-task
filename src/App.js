import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Tweets = lazy(() => import('./pages/Tweets'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
