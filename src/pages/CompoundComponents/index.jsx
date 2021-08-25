import { Children, cloneElement, createContext, useContext, useState } from 'react';
import P from 'prop-types';

const style = {
  style: {
    fontSize: '60px',
    backgroundColor: 'green',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => {
    setIsOn((prevOn) => !prevOn);
  };

  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;
};

TurnOnOff.propTypes = {
  children: P.node,
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = () => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return <button onClick={() => onTurn()}>Turn {isOn ? 'OFF' : 'ON'}</button>;
};

const Paragraph = ({ children }) => <p {...style}>{children}</p>;

Paragraph.propTypes = {
  children: P.node,
};

const CompoundComponents = () => {
  return (
    <TurnOnOff>
      <div>
        <header>
          <TurnedOff>
            <Paragraph>Aqui vem as coisas do OFF.</Paragraph>
          </TurnedOff>
        </header>
        <section>
          <TurnedOn>
            <Paragraph>Aqui as coisas que vão acontecer quando estiver ON.</Paragraph>
          </TurnedOn>
        </section>
      </div>
      <TurnButton />
    </TurnOnOff>
  );
};

export default CompoundComponents;
