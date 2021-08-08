import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const useLayoutEffectExample = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((prevCounted) => [...prevCounted, +prevCounted.slice(-1) + 1]);
  };

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 3000);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <>
      <button className={'button-increment'} onClick={handleClick}>
        Count {counted.slice(-1)}
      </button>
      <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
        {counted.map((count) => {
          return <p key={`c-${count}`}>{count}</p>;
        })}
      </div>
    </>
  );
};

export default useLayoutEffectExample;
