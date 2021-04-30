import {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import SignUpValidation from './validations';



const FormControl = () => {

const dispatch = useContext(AuthContext);
const initialState = {
  fullname : "",
  email : "",
  password : "",
  isSubmitting : false,
};

const [data, setData] = useState(initialState);
const [errors, setErrors] = useState({});
const [formComplete, setFormComplete] = useState(false)

const handleInputChange = (e) => {
  setData({
    ...data,
    [e.target.name] : e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormComplete(true);
  setErrors(SignUpValidation(data));
  setData({
    ...data,
    // isSubmitting : true,  
  });

  fetch("localhost:8000/api/v1/users/login",{
    method : "post",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      fullname : data.fullname,
      email : data.email,
      password : data.password
    })
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    throw res;
  })
  .then(resJson => {
    dispatch({
      type : "LOGIN",
      payload : resJson
    })
  })
  .catch(error => {
    setData({
      ...data,
      isSubmitting : false,
    });
    setErrors(SignUpValidation(data));
  });
};

useEffect(() => {
    if(Object.keys(errors).length === 0 && formComplete) {
      setFormComplete(true);
      setData({
        isSubmitting : true
      })    
    }
},[errors, formComplete]);

return {handleInputChange, handleSubmit, data, errors};

}

export default FormControl;