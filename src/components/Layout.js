import React from 'react';
// import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/global.css';

const Layout = ({ children }) => {
  const path = window.location.pathname;
  return (
    <div className="layout">
      {/* {path === '/projects' ? null : <Navbar />} */}
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
