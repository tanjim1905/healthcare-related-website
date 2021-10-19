import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, handleUserLogin, response} = useAuth();
    // console.log(user);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
      const handleLogin = (e) => {
          e.preventDefault();
        handleUserLogin(email, password);
      };
    return (
        <div className="container">
        <h2 className="text-center my-3">Please Login</h2>
        <form className="w-75 mx-auto my-5">
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
        <div className="d-flex justify-content-center"><button onClick={handleLogin} type="submit" className="btn btn-primary">Login</button></div>

        <p className="text-danger mt-2">{response}</p>

        <div className="d-flex justify-content-center"><button onClick={signInUsingGoogle} className="btn w-50 fw-bold btn-success py-1 my-4"> <i className="fab fa-google-plus-g mx-2"></i>Login with google</button></div>
        </form>

        <p className="text-center">New to DrPro website? <Link to="/register">Create Account</Link></p>
        </div>
    );
};

export default Login;