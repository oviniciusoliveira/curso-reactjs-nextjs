import { Component } from 'react';
import P from 'prop-types';
import { ItWillThrowError } from './ItWillThrowError';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // É possível registrar o erro em um serviço de relatórios de erro
    // console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // É possível renderizar qualquer UI Alternativa
      return <p>Algo deu errado...</p>;
    }

    return this.props.children;
  }
}

MyErrorBoundary.propTypes = {
  children: P.node.isRequired,
};

export default function ErrorBoundaryExample() {
  return (
    <div>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
    </div>
  );
}
