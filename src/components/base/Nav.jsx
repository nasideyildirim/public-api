import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';

function Nav(props) {
  return <>
  
  <nav className="navbar navbar-expand-sm navbar-light bg-primary ">
   <Link className="navbar-brand text-light mt-2" to="/">
       
      </Link>
    <div className="collapse navbar-collapse my-2" id="navbarNavAltMarkup">
    {routes
      .filter((item) => item.isNav)
      .map((item, index) => (
        <div className="navbar-nav nav-item nav-link text-light  " key={index}>
          <Link to={item.path} style={{ textDecoration: 'none' ,color:'white' }}>{item.title}</Link>
        </div>
      ))}
  </div>
  </nav>
  
  </>
  
}
export default Nav;