import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './../../styles/globalStyles.css';

const Button = React.memo(function Button({ incrementCounter }) {
  console.log('Filho renderizou');
  return (
    <button className="button-increment" onClick={() => incrementCounter(10)}>
      <p>+</p>
    </button>
  );
});

Button.propTypes = {
  incrementCounter: P.func,
};

function UseCallback() {
  const [counter, setCounter] = useState(0);

  // utilizar useCallback para coisas pesadas

  // useCallback(fn, [])

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai Renderizou');
  return (
    <React.Fragment>
      <main className="main-container">
        <p>Teste 3</p>
        <h1>C1: {counter}</h1>
        <Button incrementCounter={incrementCounter} />
      </main>
    </React.Fragment>
  );
}

export default UseCallback;
