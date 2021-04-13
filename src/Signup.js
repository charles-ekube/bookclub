import React from 'react';
import './App.css';


function SignUp () {
    return (
        <>
            <section className="SignUp-Section">
                <div className="signup-text">
                    <h2>Explore comics
                        you won’t see
                        anywhere else
                    </h2>
                     <p>
                        Enter your personal details to start your
                        journey with us.
                     </p>
                </div>
                 <form>
                     <fieldset>
                            <legend>Log In</legend>
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" />
                            <label for="email">Email address</label>
                            <input type="email" id="email" />
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                            <label for="confirm_password">Confirm Password</label>
                            <input type="password" id="confirm_password" />
                            
                            <div className="btn-box"> 
                                <input type="radio"  className="radio-btn"/>
                                <span>    
                                    Accept <a href="termso.com">terms and conditions</a>
                                </span>
                                <button>Login</button>
                            </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}
export default SignUp;