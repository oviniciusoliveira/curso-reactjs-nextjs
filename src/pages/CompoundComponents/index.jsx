import { Children, cloneElement, useState } from 'react';
import P from 'prop-types';

const style = {
  style: {
    fontSize: '60px',
    backgroundColor: 'green',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => {
    setIsOn((prevOn) => !prevOn);
  };

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);

const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({ isOn, onTurn }) => {
  return <button onClick={() => onTurn()}>Turn {isOn ? 'OFF' : 'ON'}</button>;
};

TurnButton.propTypes = {
  isOn: P.bool,
  onTurn: P.func,
};

const CompoundComponents = () => {
  return (
    <TurnOnOff>
      <TurnedOn>Aqui as coisas que vão acontecer quando estiver ON.</TurnedOn>
      <TurnedOff>Aqui vem as coisas do OFF.</TurnedOff>
      <TurnButton />
    </TurnOnOff>
  );
};

export default CompoundComponents;
