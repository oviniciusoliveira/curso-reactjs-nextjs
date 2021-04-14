import React, { useState, useEffect } from 'react';
import './styles.css';

const eventFn = () => {
  console.log('h1 clicado');
};

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa uma vez
  useEffect(() => {
    console.log('componentDidMount');
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUnmount - limpeza de lixo
    return () => {
      console.log('componentWillUnmount');
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1: ', counter, 'C2:', counter2);
  }, [counter, counter2]);

  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);
  });

  return (
    <React.Fragment>
      <main className="main-container">
        <h1>
          Contador 1: {counter} - Contador 2: {counter2}
        </h1>
        <button className="button-increment" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <button className="button-increment" onClick={() => setCounter2(counter2 + 1)}>
          +
        </button>
      </main>
    </React.Fragment>
  );
}

export default UseEffect;
