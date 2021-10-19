import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Nav.css';

const NavBar = () => {
    const {user, logOut} = useAuth();
    // console.log(user);
    return (
        <>
        <nav className="navbar sticky-top bg-light navbar-expand-lg navbar-light py-3">
        <div className="container px-5">
          <div className="logo">
            <Link className="navbar-brand" to="/home"><span className="">Dr</span><span className="text-info">Pro</span></Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors">Doctors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="register-part">
                { user.email ? <button onClick={logOut}>Logout</button> :
                <span><Link to="/login"><button>Login</button></Link> 
                <Link to="/register"><button>Register</button></Link></span>}
                
                {(user.email) &&( <span className="ms-2 bg-dark text-white fw-bold p-2 rounded">{user.email.slice(0, 6).toUpperCase()}</span>)}
            </div>
          </div>
        </div>
      </nav>
        </>
    );
};

export default NavBar;