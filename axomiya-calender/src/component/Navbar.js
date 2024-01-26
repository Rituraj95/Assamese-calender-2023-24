import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Asset/logo.jpg'

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light "  style={{background:"#fbf39d"}} >
   <img src={logo} alt="" style={{height:'30px'}} />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
      
       
          <li className="nav-item">
            <Link className="nav-link" to="/Bohag">ব’হাগ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Jeth">জেঠ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Aahar">আহাৰ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">শাওণ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Bhado">ভাদ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Aahin">আহিন</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Kati">কাতি</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Aaghun">আঘোণ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Puh">পুহ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Magh">মাঘ </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Phagun">ফাগুন</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Sout">চ’ত </Link>
          </li>
          
          {/* Add other navigation links in a similar way */}
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
