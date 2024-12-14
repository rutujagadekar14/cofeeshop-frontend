import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    const NavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'chocolate' : 'white',
        }
    }

    return (
        <>
            <header className='bg-dark'>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid px-5">
                    <NavLink className="navbar-brand logo" to="/" id='linkstyle'>GrandCoffee</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style={{"--bsScrollHeight": "100px"}}>
                                <li className='nav-item'>
                                        <NavLink style={NavLinkStyle} to="/" id='linkstyle'>Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                        <NavLink style={NavLinkStyle} to="/about" id='linkstyle'> About Us</NavLink>
                                </li>
                                <li className='nav-item'>
                                        <NavLink style={NavLinkStyle} to="/gallery" id='linkstyle'>Gallery</NavLink>
                                </li>
                                <li className='nav-item'>
                                        <NavLink style={NavLinkStyle} to="/services" id='linkstyle'>Services</NavLink>
                                </li>
                                <li className='nav-item'>
                                        <NavLink style={NavLinkStyle} to="/contact" id='linkstyle'> Contact Us</NavLink>
                                </li>
                                <li className="nav-item login">
                                        <NavLink style={NavLinkStyle} to="/login" id='linkstyle'>Log in</NavLink>
                                </li>
                                <li className="nav-item signup">
                                        <NavLink style={NavLinkStyle} to="/signup" id='linkstyle'>Sign up</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;