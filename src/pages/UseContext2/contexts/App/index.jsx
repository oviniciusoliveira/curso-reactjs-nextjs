import { createContext, useState } from 'react';

import { initialState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {/* eslint-disable-next-line */}
      {props.children}
    </GlobalContext.Provider>
  );
};
