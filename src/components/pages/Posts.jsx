import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../info.js'

function Posts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`${BASE_URL}/posts`)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setData(json);
        });
    }, 1000);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} item={item}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;