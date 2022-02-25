import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Layout from './layouts/Index';
import App from './pages/App';

import stores from './models/stores';

const routes: FC = () => {
  return (
    <Provider {...stores}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="index" element={<App />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default routes;
