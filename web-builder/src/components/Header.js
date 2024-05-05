import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="header-bg">
      <div className="wrap">
        <div className="header">
          <link href="/css/style.css" rel="stylesheet" type="text/css" media="all" />
          <div className="logo">
            <Link to="/"><img src="images/log.jpg" style={{ width: '130px', height: '70px', marginTop: '10px' }} alt="" title="logo" /></Link>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
