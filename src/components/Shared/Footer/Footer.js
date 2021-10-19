import React from 'react';
import { Link } from 'react-router-dom';
import Newsteller from '../Newsteller/Newsteller';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <Newsteller></Newsteller>
        <div className="bg-dark text-center" id="footer">
        <div className="container">
            <div className="footer-top row pb-5">
            <div className="col-12 col-md-6 col-lg-3">
            <div className="logo">
            <Link className="navbar-brand" to="/home"><span className="">Dr</span><span className="text-info">Pro</span></Link>
          </div>
          <div className="description">
            <p className="text-secondary">Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci eleme ntum eleifend tempor, nunc libero porttitor tellus.</p>
          </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-white">Contact info</h5>
            <p className="text-secondary">+880 123 456 7890</p>
            <p className="text-secondary">yourmail@gmail.com</p>                
            <p className="text-secondary">contact@gmail.com</p>
            <div className="icons">
            <a href="https://www.facebook.com/Aarya.Tanjim2804//" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/tanjim1905/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/AaryaTanjim2804" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.linkedin.com/in/tanjimahmed1905/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-white">Our Location</h5>
            <p className="text-secondary">Matuail</p>
            <p className="text-secondary">Jatrabari</p>
            <p className="text-secondary">Dhaka- 1204</p>
            <p className="text-secondary">Bangladesh</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="office-time py-3 px-2">
                    <h5 className="text-white">Opening Hours</h5>
                    <p className="text-secondary">Monday: 8:00am - 9:00pm</p>
                    <p className="text-secondary">Thuesday: 8:00am - 9:00pm</p>
                    <p className="text-secondary">Wednesday: 8:00am - 9:00pm</p>
                    <p className="text-secondary">Thursday: 8:00am - 9:00pm</p>
                    <p className="text-secondary">Friday: 8:00am - 7:00pm</p>
                </div>
            </div>
            </div>
            
        </div>

        <div className="footer-bottom py-2">
                <div className="container text-center"><p className="text-secondary">Copyright &copy;2021 || All rights reserved by - Tanjim Ahmed</p></div>
            </div>
    </div>
        </>
    );
};

export default Footer;