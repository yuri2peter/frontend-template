import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const PageHome = lazy(() => import('src/pages/home'));

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
    </Routes>
  );
}

export default MainRoute;
