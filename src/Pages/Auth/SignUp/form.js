import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from './formControl';

const SignUpForm = ({formSubmitted}) => { 

    const {handleInputChange, handleSubmit, data, errors} = FormControl(formSubmitted);
    return (
        <>
            <section className='form-container'>
          <Form onSubmit={handleSubmit} className="signup-form-container">
            <header className="signup-header">
              <h2>Sign Up</h2>
              <p>Create an account</p>
            </header>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Full Name"
                value={data.fullname}
                name="fullname"
                id="fullname"
                onChange={handleInputChange}
              />
              <Form.Text>
            {errors.fullname && (<small className="form-error">
              {errors.fullname}
            </small>)}
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter Email"
                value={data.email}
                name="email"
                id="email"
                onChange={handleInputChange}
              />
              <Form.Text>
            {errors.email && (<small className="form-error">
              {errors.email}
            </small>)}
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter Password"
                value={data.password}
                name="password"
                id="password"
                onChange={handleInputChange}
              />
              <Form.Text>
            {errors.password && (<small className="form-error">
              {errors.password}
            </small>)}
            </Form.Text>
            </Form.Group>
            
            <Button 
              type="submit"
              variant="primary"
              disabled={data.isSubmitting}
              className="signup-btn"
            >
              {data.isSubmitting ? (
                "Loading..."
              ): (
                "Sign Up"
              )}
            </Button>
          </Form>
        </section>        
        </>  
    )
}

export default SignUpForm;
