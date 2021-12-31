import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';
import routes from './routes';

export default function App() {
  return (
    <>
      <Nav />
      <div className="container my-5">
        <div className="row">
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
