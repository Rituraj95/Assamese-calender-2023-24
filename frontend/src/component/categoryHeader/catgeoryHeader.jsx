import React from 'react';
import { Link } from 'react-router-dom';
import './categoryHeader.css'
// import logo from './Asset/logo.jpg';

const CategoryHeader = () => {
    return (
        <div className="category-header">
            {/* Top Bar */}
            <div className="top-bar" style={{background: "#fbf39d"}}>
                <div className="left-section">
                    {/*<img src={logo} alt="Logo" style={{height: '30px', marginRight: '15px'}} />*/}
                    <span className="delivery-info">অসমীয়া কেলেণ্ডাৰ</span>
                </div>

                <div className="right-section">
                    <Link to="/login" className="auth-button">লগিন</Link>
                    <span> | </span>
                    <Link to="/signup" className="auth-button">ৰেজিষ্টাৰ</Link>
                </div>
            </div>

            {/* Category Navigation */}
            <nav className="category-nav">
                <ul>
                    <li><Link to="/Bohag">ব'হাগ</Link></li>
                    <li><Link to="/Jeth">জেঠ</Link></li>
                    <li><Link to="/Aahar">আহাৰ</Link></li>
                    <li><Link to="/Xaon">শাওণ</Link></li>
                    <li><Link to="/Bhado">ভাদ</Link></li>
                    <li><Link to="/Aahin">আহিন</Link></li>
                    <li><Link to="/Kati">কাতি</Link></li>
                    <li><Link to="/Aaghun">আঘোণ</Link></li>
                    <li><Link to="/Puh">পুহ</Link></li>
                    <li><Link to="/Magh">মাঘ</Link></li>
                    <li><Link to="/Phagun">ফাগুন</Link></li>
                    <li><Link to="/Sout">চ'ত</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default CategoryHeader;