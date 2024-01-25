import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header>
      <nav>
        পঞ্জিকা
        <button></button>

        <ul>
        
          <li><Link to="/Bohag">ব’হাগ</Link></li>
          <li><Link to="/Jeth">জেঠ</Link></li>
          <li><Link to="/Aahar">আহাৰ</Link></li>
          <li><Link to="/Xaon">শাওণ</Link></li>
          <li><Link to="/Bhado">ভাদ</Link></li>
          <li><Link to="/Aahin">আহিন</Link></li>
          <li><Link to="/kati">কাতি</Link></li>
          <li><Link to="/Aaghun">আঘোণ</Link></li>
          <li><Link to="/Puh">পুহ</Link></li>
          <li><Link to="/Magh">মাঘ</Link></li>
          <li><Link to="/Phagun">ফাগুন</Link></li>
          <li><Link to="/Sout">চ’ত</Link></li>

          


         
      
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
