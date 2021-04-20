import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';
import UseRef from './pages/UseRef';
import UseContext from './pages/UseContext';
import UseContext2 from './pages/UseContext2';
import UseReducer from './pages/UseReducer';
import ContextReducer from './pages/ContextReducer';
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
          <Route path="/useMemo" component={UseMemo} />
          <Route path="/useRef" component={UseRef} />
          <Route path="/useContext" component={UseContext} />
          <Route path="/useContext2" component={UseContext2} />
          <Route path="/useReducer" component={UseReducer} />
          <Route path="/contextReducer" component={ContextReducer} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
