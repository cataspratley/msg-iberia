import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <img src={require('./logo.png')} width={80} height={80} alt="logo" />
      <div className="header-user-settings">
        <p>Logout</p>
        <p>Catarina Mendes</p>
      </div>
    </header>
  );
};

export default Header;
