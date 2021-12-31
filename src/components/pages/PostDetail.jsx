import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BASE_URL from '../../info.js';

function PostDetail(props) {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const { postId } = params;
    fetch(`${BASE_URL}/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  return (
    <>
      <h1 className="text-primary">Product {params.postId} </h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://picsum.photos/200/300"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-uppercase mt-3">
                {product.title}
              </h5>
              <p className="card-text mt-5">{product.body}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetail;