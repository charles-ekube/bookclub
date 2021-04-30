import React, {useState} from 'react';
import "./login.css";
import LoginForm from './Form';
import { SignUp } from '../SignUp';




export const  Login = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const submitForm = () => {
      setFormSubmitted(true);
    }

    return (
        <>
         {!formSubmitted ? <LoginForm submitForm={submitForm}/> : <SignUp/>}
        </>
    )
}

// export default Login;