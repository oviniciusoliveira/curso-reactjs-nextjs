import P from 'prop-types';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import './../../styles/globalStyles.css';

// Alterar o valor de REF não faz o componente renderizar novamente

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function UseRef() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const contadorRef = useRef(0);

  console.log('Pai Renderizou!');

  // componentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        return setPosts(res);
      });
  }, []);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, [value]);

  useEffect(() => {
    contadorRef.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <h1>Renderizou: {contadorRef.current}x</h1>
      <p>
        <input ref={inputRef} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      <main className="main-container">
        {useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map((post) => {
              return <Post key={post.id} post={post} handleClick={handleClick} />;
            })
          );
        }, [posts])}
        {posts.length <= 0 && <p>Carregando Posts</p>}
      </main>
    </React.Fragment>
  );
}

export default UseRef;
