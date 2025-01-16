import React from 'react';
import { GoogleLogin } from '@react-oauth/google'; //npm install @react-oauth/google@latest
import logo from '../assets/logo.png' // relative path to image 

function SignIn() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div className='signInSection'>
            <h2>Sign In</h2>
            <br />
            <br />
            <div className='login'>
                <img 
                    className='profileAvatar' 
                    src={logo}
                    alt='logo of educator lounge as placeholder for avatar profile'
                />
                <GoogleLogin 
                    className="googleLoginButton"
                    buttonText="Sign in with Google"
                    onSuccess={responseMessage} 
                    onError={errorMessage} 
                    isSignedIn={true}
                />
                <form className='loginForm'>
                    <p style={{textAlign:"center", paddingBottom:"25px"}}>OR</p>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' />
                    </div>
                    <div>
                        <label></label>
                        <button type='submit'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignIn;