import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('');
    const {signUp} = useContext(AuthContext);

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword );
    
        if(password !== confirmPassword){
            setError('Your password did not match');
        }
        else if(password.length <6){
            setError('Your password must be 6 characters or longer')
            return;
        }

        signUp(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
            <div className="form-control">
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' id='email' placeholder='' />
            </div>
            <div className="form-control">
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' id='password' placeholder='' />
            </div>
            <div className="form-control">
                <label htmlFor='Confirm Password'>Confirm Password</label>
                <input type="password" name='confirmPassword' id='confirm-password' placeholder='' />
            </div>
            <button className='btn-submit' type='submit' value='Login'>Sign Up</button>
            </form>
            <span className='link'>Already have an account?<Link to="/login">Login</Link></span>
            <button className='google' type='submit' >Continue with Google </button>
            <p className='error'>{error}</p>  
        </div>
    );
};

export default SignUp;