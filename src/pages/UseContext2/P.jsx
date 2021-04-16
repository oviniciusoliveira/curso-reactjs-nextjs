import { useContext } from 'react';
import { GlobalContext } from './contexts/App/index';

// eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { body, counter },
    setState,
  } = theContext;
  return (
    <p
      onClick={() =>
        // spread do objeto recebido, e sobre escreve com o novo counter
        setState((prevState) => {
          return { ...prevState, counter: prevState.counter + 1 };
        })
      }
    >
      {body} {counter}
    </p>
  );
};
