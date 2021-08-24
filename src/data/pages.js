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
import MyErrorBoundary from './../pages/MyErrorBoundary';

export const pages = [
  { path: '/useState', component: UseState },
  { path: '/useEffect', component: UseEffect },
  { path: '/useCallback', component: UseCallback },
  { path: '/useMemo', component: UseMemo },
  { path: '/useRef', component: UseRef },
  { path: '/useContext', component: UseContext },
  { path: '/useContext2', component: UseContext2 },
  { path: '/useReducer', component: UseReducer },
  { path: '/contextReducer', component: ContextReducer },
  { path: '/useMyHook', component: useMyHook },
  { path: '/multipleHooks', component: MultipleHooks },
  { path: '/useFetch', component: useMyHook2 },
  { path: '/useAsync', component: useMyHook3 },
  { path: '/UseLayoutEffect', component: useLayoutEffectExample },
  { path: '/UseImperativeHandle', component: UseImperativeHandle },
  { path: '/UseDebugValue', component: UseDebugValue },
  { path: '/MyErrorBoundary', component: MyErrorBoundary },
];
