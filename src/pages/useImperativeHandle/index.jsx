import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import P from 'prop-types';

const UseImperativeHandle = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((prevCounted) => [...prevCounted, +prevCounted.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 100);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  return (
    <>
      <button className={'button-increment'} onClick={handleClick}>
        Count {counted.slice(-1)}
      </button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
};

export default UseImperativeHandle;

export const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
  const [randomNumber, setRandomNumber] = useState(0.24);
  const divRef = useRef();

  const handleClick = () => {
    setRandomNumber(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => {
    return {
      handleClick,
      divRef: divRef.current,
    };
  });

  return (
    <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
      {counted.map((count) => {
        return (
          <p key={`c-${count}`} onClick={handleClick}>
            {count} +++ {randomNumber}
          </p>
        );
      })}
    </div>
  );
});

DisplayCounted.propTypes = {
  counted: P.any,
};
