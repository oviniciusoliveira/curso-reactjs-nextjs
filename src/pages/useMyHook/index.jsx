import React, { useState, useEffect, useRef } from 'react';
import './../../styles/globalStyles.css';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <main>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
        className="button-increment"
      >
        +{incrementor}
      </button>
      <button
        onClick={(d) => {
          setDelay((d) => d - incrementor);
        }}
        className="button-increment"
      >
        -{incrementor}
      </button>
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
    </main>
  );
}

export default App;
