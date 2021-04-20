import P from 'prop-types';
import React, { createContext, useReducer, useContext, useRef } from 'react';
import './../../styles/globalStyles.css';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
export const initialState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar Título');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  // em contexto, é preferivel manter o controle do estado com o reducer
  return (
    <React.Fragment>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" ref={inputRef} />
    </React.Fragment>
  );
};

// App.jsx
function ContextReducer() {
  return (
    <AppContext>
      <main>
        <H1 />
      </main>
    </AppContext>
  );
}

export default ContextReducer;
