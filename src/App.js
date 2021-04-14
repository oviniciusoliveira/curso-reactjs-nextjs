import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UseState from './pages/UseState/index';
import UseEffect from './pages/UseEffect/index';
import UseCallback from './pages/UseCallback/index';
import Menu from './components/Menu';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/useState" component={UseState} />
          <Route path="/useEffect" component={UseEffect} />
          <Route path="/useCallback" component={UseCallback} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
