import React from 'react';
import logo from './photo_2024-06-29 16.48.55.jpeg'; // лого свое закиньте и юзайте

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Header;