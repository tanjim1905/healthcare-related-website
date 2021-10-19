import React from 'react';
import { Link } from 'react-router-dom';
import aboutus from '../../images/aboutus.jpg';

const Aboutus = () => {
    return (
        <div>
            <div className="container aboutus my-5 row">
                <div className="col-12 col-md-6">
                    <img className="img-fluid h-100" src={aboutus} alt="" />
                </div>
                <div className="col-12 col-md-6 py-2">
                    <h2 className="fw-bolder">About Us</h2>
                    <p className="fw-bold">This clinic was founded by Dr. Mary Zimmerman MD on January 5th, 1992.</p>

                    <p className="text-secondary">Since those times we were vocal in expanding both the number of pediatric and related services we after, just as well as the size of our team of skilled and caring pediatricians.</p>
                    <p className="fw-bold">All in all, our medical facility for minors provides a range of therapy services to children aged 0-18 years of age and their families.</p>

                    <Link to="/contact"><button className="btn-primary fw-bold py-2 px-3">Contact us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;