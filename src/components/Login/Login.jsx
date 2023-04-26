import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Login = () => {
    const location = useLocation();
    console.log(location);
    const [show, setShow] = useState(false)
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then((result) =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
            <div className="form-control">
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' id='email' placeholder='' />
            </div>
            <div className="form-control">
                <label htmlFor='password'>Password</label>
                <input type={show?'text':'password'} name='password' id='password' placeholder='' />
                <p onClick={()=>setShow(!show)}>
                {
                    show ? <span>Hide Password</span> : <span>Show Password</span>
                }
                </p>
                
            </div>
            <button className='btn-submit' type='submit' value='Login'>Login</button>
            </form>
            <span className='link'>New to Ema-john?<Link to="/signup">Create New Account</Link></span>
            <p className='or'>or</p>
            <button className='google' type='submit' >Continue with Google </button>
        </div>
    );
};

export default Login;