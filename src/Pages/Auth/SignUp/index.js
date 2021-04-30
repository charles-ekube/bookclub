import React, {useState} from 'react';
import "./signup.css";
import SignUpForm from './form';
import { Login } from '../Login';


export const  SignUp = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const submitForm = () => {
      setFormSubmitted(true);
    }

    return (
        <>
         {!formSubmitted ? <SignUpForm submitForm={submitForm}/> : <Login/>}
        </>
    )
}
