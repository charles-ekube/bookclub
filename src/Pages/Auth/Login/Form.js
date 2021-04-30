import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from './FormControl';

const LoginForm = ({formSubmitted}) => { 

    const {handleInputChange, handleSubmit, data, errors} = FormControl(formSubmitted);
    return (
        <>
            <section className='form-container'>
          <Form onSubmit={handleSubmit} className="login-form-container">
            <header className="login-header">
              <h2>Sign In</h2>
              <p>Welcome Back!</p>
            </header>
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
              className="login-btn"
            >
              {data.isSubmitting ? (
                "Loading..."
              ): (
                "Login"
              )}
            </Button>
          </Form>
        </section>        
        </>  
    )
}

export default LoginForm;
