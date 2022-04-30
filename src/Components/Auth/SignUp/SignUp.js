import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialIcon from '../SocialIcon/SocialIcon';

const SignUp = () => {
    return (
        <div className='container m-5 p-5'>
            <div className='m-5 p-5'>
                <div className='p-3  w-50 mx-auto login-form'>
                    <div>
                        <h3 className='text-center'>SIGN UP</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">                                
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">                                
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="success" className='w-75 ms-5 social-style fs-5' type="submit">
                                Login
                            </Button>
                            <div className='d-flex mt-2'>
                                <p>New to Brazzer?{" "}</p>
                                <Link to="/login" className='account-style' >Login</Link>
                            </div>
                            
                        </Form>
                        <SocialIcon></SocialIcon>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;