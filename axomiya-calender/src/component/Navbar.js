import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        পঞ্জিকা
      </Link>
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
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
       
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
            <Link className="nav-link" to="/Xaon">bhado</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">Aahin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">Kati</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">Aaghun</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">Puh</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">Magh</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">Phagun</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Xaon">Sout</Link>
          </li>
          
          {/* Add other navigation links in a similar way */}
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
