import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {handleUserRegister, signInUsingGoogle} = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = () => {
        handleUserRegister(email, password);
      };
    return (
        <div className="container my-5">
        <h2 className="text-center my-3">Registration</h2>
            <form className="w-75 mx-auto">
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input onChange={handleEmail} placeholder="type your mail" type="email" class="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input onChange={handlePassword} placeholder="type your password" type="password" class="form-control" id="inputPassword3"/>
                </div>
            </div>
            <button onClick={handleRegister} type="submit" class="btn btn-primary">Register</button><br />

            <div onClick={signInUsingGoogle} className="btn w-50 btn-success py-1 px-2 my-4 mx-auto">Register with google</div>
            </form>

            <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;

// <form>
//   <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10">
//       <input onChange={handleEmail} placeholder="type your mail" type="email" class="form-control" id="inputEmail3"/>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//     <div class="col-sm-10">
//       <input onChange={handlePassword} placeholder="type your password" type="password" class="form-control" id="inputPassword3"/>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>