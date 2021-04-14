import React, { useState } from 'react';
import logo from './../../logo.svg';
import './../../App.css';

function UseState() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'App-logo-reverse' : '';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    // setCounter(counter + 1);

    // boas práticas
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        <p>
          <button type="button" onClick={handleClick}>
            Reverse
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Increment {counter}
          </button>
        </p>
      </header>
    </div>
  );
}

export default UseState;

// versao com class

// class App extends Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.handleClick = this.handleClick.bind(this);

//   //   this.state = {
//   //     reverse: false,
//   //   };
//   // }

//   // igual a

//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'App-logo-reverse' : '';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse
//           </button>
//         </header>
//       </div>
//     );
//   }
// }
