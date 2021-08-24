import { useEffect, useState } from 'react';

export function ItWillThrowError() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Erro no contador');
    }
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Click to increase {counter}</button>
    </div>
  );
}
