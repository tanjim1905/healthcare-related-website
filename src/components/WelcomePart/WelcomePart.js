import React from 'react';
import './WelcomePart.css';

const WelcomePart = () => {
    return (
        <>
            <div className="container row my-5">
                <div className="col-12 col-lg-6 content">
                <h5>This is Dr Pro</h5>
                <h1>Welcome to our Clinic</h1>
                <p>Integer aliquet congue libero, eu gravida odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus, vel pharetra metus dolor.</p>
                </div>
                <div className="col-12 col-lg-6 form-container">
                    <h1 className="bg-warning text-center fw-bolder py-2">Make an Appoinment</h1>

                    <div className=" form py-5">
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

            </div>  
        </>
    );
};

export default WelcomePart;