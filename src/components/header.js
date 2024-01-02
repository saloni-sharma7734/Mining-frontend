import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/black_white_nature_logo-removebg-preview.png';

const navLinkStyle = {
    color: 'white',
};

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg px-3" style={{ background: '#333' }}>
            <Link className="navbar-brand" to="/">
                {/* <img src={Logo} alt="Your Logo" height={'90px'} /> */}
                MineCare
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home" style={navLinkStyle}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/services" style={navLinkStyle}>
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" style={navLinkStyle}>
                            Contact
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/lease" style={navLinkStyle}>
                            Lease
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/feedback" style={navLinkStyle}>
                            FAQ
                        </Link>
                    </li>
                     */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" style={navLinkStyle}>
                            Login
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Header;
