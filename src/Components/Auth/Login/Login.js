import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
const Login = () => {
    return (
        <div className='container m-5 p-5'>
            <div className='m-5 p-5'>
                <div className='p-3  w-50 mx-auto login-form'>
                    <div>
                        <h3 className='text-center'>LOGIN</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">                                
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                            <div>
                                
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;