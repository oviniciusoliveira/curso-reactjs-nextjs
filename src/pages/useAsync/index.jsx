import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, immediate) => {
  const [state, setState] = useState({ result: null, error: null, status: 'idle' });

  const execute = useCallback(() => {
    console.log('EFFECT', new Date().toLocaleString());
    setState({ result: null, error: null, status: 'pending' });

    return asyncFunction()
      .then((response) => {
        setState({ result: response, error: null, status: 'done' });
      })
      .catch((error) => {
        setState({ result: null, error: error, status: 'error' });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  return [execute, state.result, state.status, state.error];
};

const fetchPosts = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  // throw new Error('Erro fetch');
  return posts;
};

const useMyHook2 = () => {
  const [refetchPosts, posts, status, error] = useAsync(fetchPosts, true);

  function handleClick() {
    refetchPosts();
  }

  return (
    <div>
      <button className="button-increment" onClick={handleClick}>
        Refetch
      </button>
      {status === 'idle' && <pre>Idle: Nada sendo executado</pre>}
      {status === 'pending' && <pre>Pending: Loading...</pre>}
      {status === 'error' && <pre>Error: {error.message}</pre>}
      {status === 'done' && <pre>Done: {JSON.stringify(posts, null, 2)}</pre>}
    </div>
  );
};

export default useMyHook2;
