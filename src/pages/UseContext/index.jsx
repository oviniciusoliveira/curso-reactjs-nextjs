import React, { useContext, useState } from 'react';

const initialState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Main = ({ children }) => {
  return (
    <main className="main-container">
      <H1 />
      <P />
    </main>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() =>
        setContextState((prevState) => {
          return { ...prevState, counter: prevState.counter + 1 };
        })
      }
    >
      {body} {counter}
    </p>
  );
};

function UseContext() {
  const [contextState, setContextState] = useState(initialState);
  return (
    <React.Fragment>
      <GlobalContext.Provider value={{ contextState, setContextState }}>
        <Main></Main>
      </GlobalContext.Provider>
    </React.Fragment>
  );
}

export default UseContext;
