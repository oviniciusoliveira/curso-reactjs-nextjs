import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../routes';
import Menu from '../../components/Menu';

import './styles.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menu />
        <AppRoutes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
