import React from 'react';
import './App.css';


function Support () {
    return (
        <>
            <main className="support-section">

                <article className="support-text">
                    <h2>
                        Let us help
                        improve your
                        experience
                    </h2>
                    <p>
                        In these hard times,let us help you sort out
                        your technical problems. Also feedback and
                        reviews are appreciated.
                    </p>
                </article>

                <form className="support-form">
                        <label for="fname">Full Name</label>
                        <input type="text" id="fname"/>
                        
                        <label for="email">Email</label>
                        <input type="email" id="email"/>

                        <label for="message">Message</label>
                        <textarea id="message"></textarea>
                        <div className="btn-box"> 
                                <input type="radio"  className="radio-btn"/>
                                <span>    
                                    Accept <a href="termso.com">terms and conditions</a>
                                </span>
                                <button>Login</button>
                        </div>
                </form>
            </main>
        </>
    )
}

export default Support;