import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { FiSearch, FiHome, FiFileText, FiShoppingCart, FiBook, FiBarChart2, FiUsers, FiDollarSign, FiCreditCard, FiTruck, FiBox, FiSettings, FiUser, FiDollarSign as FiPricing, FiChevronLeft } from 'react-icons/fi';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Dashboard', icon: <FiHome />, path: '/' },
        { name: 'To Do', icon: <FiFileText />, path: '/todo' },
    ];

    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleItemClick = (path) => {
        navigate(path);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="search-container">
                <div className="search-input">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Ctrl + F to Search All"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <nav className="menu">
                <ul>
                    {filteredItems.map((item, index) => (
                        <li
                            key={index}
                            className={index === 0 ? 'active' : ''}
                            onClick={() => handleItemClick(item.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            {item.icon}
                            {!collapsed && <span>{item.name}</span>}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-footer">
                {!collapsed && <div className="new-badge">NEW</div>}
                <button
                    className="collapse-btn"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <FiChevronLeft className={collapsed ? 'rotate-180' : ''} />
                    {!collapsed && <span>Collapse Sidebar</span>}
                </button>
            </div>


        </div>
    );
};

export default Sidebar;