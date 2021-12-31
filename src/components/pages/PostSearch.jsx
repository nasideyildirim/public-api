import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PostSearch(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(location.search);
  const [UrlQ, setUrlQ] = useState(urlParams.get('q'));

  function formHandler(event) {
    event.preventDefault();
    setUrlQ(event.target.q.value);
    navigate(`/arama?q=${event.target.q.value}`);
  }

  const results = <h1>Search Results : {UrlQ} </h1>;
  return (
    <>
      <form onSubmit={formHandler}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            Search
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            defaultValue={UrlQ}
          />
        </div>
        <button type="reset" className="btn btn-warning">
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {location.pathname === '/arama' && results}
    </>
  );
}

export default PostSearch;