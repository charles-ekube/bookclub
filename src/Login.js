import React from 'react';
import './App.css';
// import SearchImage from './images/Search-image.png';
// import { FaSearch } from 'react-icons/fa';


function Login () {
    return (
        <>
            <section className="Login-Section">
                <div className="login-text">
                    <h2>Welcome to the galaxy of comics</h2>
                    <p>
                        Enter your login details to continue your journey.
                    </p>
                </div>
                <form>
                    <fieldset>
                        <legend>Log In</legend>
                        <label for="email">Email address</label>
                        <input type="email" id="email" />
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                        <div className="btn-box">
                            <span>
                                Don't have an account? Sign Up
                            </span>
                            <button>Login</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default Login;