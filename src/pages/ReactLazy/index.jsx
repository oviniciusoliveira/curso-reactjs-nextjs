import React, { useState, Suspense } from 'react';

const importLazyComponent = () => {
  console.log('Component carregando...');
  return import('./LazyComponent');
};

const LazyComponent = React.lazy(importLazyComponent);

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onMouseOver={importLazyComponent} onClick={() => setShow((prevShow) => !prevShow)}>
        {show ? 'LC on Screen' : 'LC is off scren'}
      </button>
      <Suspense fallback={<p>Loading...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};

export default Home;
