import React, { useReducer } from 'react';
import './../../styles/globalStyles.css';

const initialState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverte': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('NENHUMA ACTION ENCONTRADA');
  return { ...state };
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter, title, body } = state;
  return (
    <main className="main-container">
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}
        className="button-increment"
      >
        Muda
      </button>
      <button onClick={() => dispatch({ type: 'inverte' })} className="button-increment">
        Inverte
      </button>
      <button onClick={() => dispatch({ type: 'NENHUMAACTION' })} className="button-increment">
        SEM ACTION
      </button>
    </main>
  );
}

export default UseReducer;
