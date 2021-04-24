import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const SignUp = () => {

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        isSubmitting: false,
        errorMessage: null
    }
    const history = useHistory();
    const [data, setData] = useState(initialState);
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        fetch("https://hookdbe.herokuapp.com/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(resJson => {
                history.push({
                    path: "/login",
                    state: {
                        email: `${data.email}`,
                        password: `${data.password}`
                    }
                })
            })
            .catch(error => {
                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: error.message || error.statusText
                });
            });
    }

    return (
        <>
            <Form style={{ width: '30%', height: "90vh", margin: "auto", borderRadius: "5px", padding: "100px 20px" }}>
                <header>
                    <h2>Sign In</h2>
                    <p>Welcome Back!</p>
                </header>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        // value={data.email}
                        name="email"
                        id="email"
                    // onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        // value={data.password}
                        name="password"
                        id="password"
                    // onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Text>
                    {/* {data.errorMessage && (<small className="form-error">
              {data.errorMessage}
            </small>)} */}
                </Form.Text>
                <Button
                    type="submit"
                    variant="primary"
                //   disabled={data.isSubmitting}
                >
                    {/* {data.isSubmitting ? (
                "Loading..."
              ): (
                "Login"
              )} */}
                </Button>
            </Form>
        </>
    )
}
