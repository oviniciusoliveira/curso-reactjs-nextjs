import { Route, Switch } from 'react-router-dom';

import UseState from './../pages/UseState';
import UseEffect from './../pages/UseEffect';
import UseCallback from './../pages/UseCallback';
import UseMemo from './../pages/UseMemo';
import UseRef from './../pages/UseRef';
import UseContext from './../pages/UseContext';
import UseContext2 from './../pages/UseContext2';
import UseReducer from './../pages/UseReducer';
import ContextReducer from './../pages/ContextReducer';
import useMyHook from './../pages/useMyHook';
import MultipleHooks from './../pages/MultipleHooks';
import useMyHook2 from './../pages/useFetch';
import useMyHook3 from './../pages/useAsync';
import useLayoutEffectExample from './../pages/useLayoutEffectExample';
import UseImperativeHandle from './../pages/useImperativeHandle';
import UseDebugValue from './../pages/UseDebugValue';

export function AppRoutes() {
  return (
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
      <Route path="/useMyHook" component={useMyHook} />
      <Route path="/multipleHooks" component={MultipleHooks} />
      <Route path="/useFetch" component={useMyHook2} />
      <Route path="/useAsync" component={useMyHook3} />
      <Route path="/UseLayoutEffect" component={useLayoutEffectExample} />
      <Route path="/UseImperativeHandle" component={UseImperativeHandle} />
      <Route path="/UseDebugValue" component={UseDebugValue} />
    </Switch>
  );
}
