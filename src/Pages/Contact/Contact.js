import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
        <h1 className="fs-1 fw-bold text-center pt-3">Contact Us</h1>
        <div className="container my-5 row gy-4">
        <div className="col-12 col-lg-6 form-container">
        <h1 className="bg-warning text-center fw-bolder py-2">Make an Appoinment</h1>

        <div className="form py-5">
        <div className="row g-4 pb-3">
        <div className="col-12 col-lg-6">
            <input type="text" name="" id="" placeholder="Your Name"/>
        </div>
        <div className="col-12 col-lg-6"><input type="text" placeholder="Your Email" name="" id="" /></div>
        <div className="col-12 col-lg-6"><input type="text" placeholder="Your Phone" name="" id="" /></div>
        <div className="col-12 col-lg-6"><input type="text" placeholder="Speciality" name="" id="" /></div>
        <div className="col-12 col-lg-6"><input type="text" placeholder="Doctor" name="" id="" /></div>
        <div className="col-12 col-lg-6"><input type="text" placeholder="Date" name="" id="" /></div>
    </div>
    <button className="bg-warning w-100 mx-auto py-2">Make an Appoinment</button>
        </div>
    </div>
    <div className="col-12 col-lg-6">
    <h2>Get in touch with us</h2>
    <p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feug iat bibendum orci, non elementum urna. Cras sit amet sapien aliquam.</p>

    
     
    <div class="input-group mb-3">
  <button class="btn btn-outline-danger btn-danger text-white fw-bolder" type="button" id="button-addon1">Direct Line</button>
  <div class="form-control text-center fw-bolder fs-5" aria-label="Example text with button addon" aria-describedby="button-addon1">01234567890</div>
</div>

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
        </div>
        </div>
    );
};

export default Contact;