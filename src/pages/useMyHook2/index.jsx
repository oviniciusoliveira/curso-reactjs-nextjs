import { useEffect, useMemo, useRef, useState } from 'react';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const controller = useRef(new AbortController());
  const signal = useRef(controller.signal);

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleString());
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      try {
        const response = await fetch(url, { ...options, signal });
        const jsonResult = await response.json();
        setResult(jsonResult);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return [result, loading];
};

const useMyHook2 = () => {
  const [postId, setPostsId] = useState('');
  const memoOptions = useMemo(() => {
    return {
      method: 'GET',
      headers: { abc: '1' + postId },
    };
  }, [postId]);
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, memoOptions);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {Array.isArray(result) ? (
          result.map((post) => (
            <p key={post.id} onClick={() => setPostsId(post.id)}>
              {post.title}
            </p>
          ))
        ) : (
          <p onClick={() => setPostsId('')}>Post Único: {result.title}</p>
        )}
      </div>
    );
  }
  return <h1>Oi</h1>;
};

export default useMyHook2;
