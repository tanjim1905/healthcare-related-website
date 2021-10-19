import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {handleUserRegister, signInUsingGoogle, response} = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault()
        handleUserRegister(email, password);
      };
    return (
        <div className="container my-5">
        <h2 className="text-center my-3">Registration</h2>
            <form className="w-75 mx-auto">
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input onChange={handleEmail} placeholder="type your mail" type="email" className="form-control" id="inputEmail3" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input onChange={handlePassword} placeholder="type your password" type="password" className="form-control" id="inputPassword3" required/>
                </div>
            </div>
            <button onClick={handleRegister} type="submit" className="btn btn-primary">Register</button><br />

            <p>{response}</p>

            <div className="d-flex justify-content-center"><button onClick={signInUsingGoogle} className="btn w-50 btn-success py-1 px-2 my-4 fw-bold"><i className="fab fa-google-plus-g mx-2"></i> Register with google</button></div>
            </form>

            <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;

// <form>
//   <div className="row mb-3">
//     <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//       <input onChange={handleEmail} placeholder="type your mail" type="email" className="form-control" id="inputEmail3"/>
//     </div>
//   </div>
//   <div className="row mb-3">
//     <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//       <input onChange={handlePassword} placeholder="type your password" type="password" className="form-control" id="inputPassword3"/>
//     </div>
//   </div>
//   <button type="submit" className="btn btn-primary">Sign in</button>
// </form>