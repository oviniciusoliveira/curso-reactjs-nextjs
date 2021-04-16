import P from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import './../../styles/globalStyles.css';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

function UseMemo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai Renderizou!');

  // componentDidMount
  useEffect(() => {
    console.log('Efeito');
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => {
          return setPosts(res);
        });
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      <main className="main-container">
        {useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })
          );
        }, [posts])}
        {posts.length <= 0 && <p>Carregando Posts</p>}
      </main>
    </React.Fragment>
  );
}

export default UseMemo;
