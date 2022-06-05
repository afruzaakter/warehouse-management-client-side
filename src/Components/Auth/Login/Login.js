import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SocialIcon from '../SocialIcon/SocialIcon';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Loading/Loading';
const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    // error handle
    const [error, setError] = useState({
        email: "",
        password: "",
        general: "",
    })

    //firebase hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    //Navigate part
    const navigate = useNavigate();

   

    if (user) {
        // navigate('/home');
        navigate(from, { replace: true });

    }
    //Email handle Part
    const handleEmailChange = (e) => {

        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        // console.log(validEmail);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, email: " " });
        }
        else {
            setError({ ...error, email: "❌ Wrong Email" });
            setUserInfo({ ...userInfo, email: " " });
        }
    }

    //Password handle Part

    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: "" });
        } else {
            setError({ ...error, password: "❌ Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);

    }

    //firebase error handle
    useEffect(() => {

        const error = hookError;

        //  loading part
    if(loading){
        return <Loading></Loading>
    }
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided,Please provide a valid email")
                    break;

                case "auth/invalid-password":
                    toast("Wrong password,Please provide a valid password")
                    break;
                default:
                    toast('Something went wrong, Please try again')
            }
        }
    }, [hookError])
    return (
        <div className='container mt-5 pt-5'>
            <div className='mt-5 pt-2'>
                <div className='p-3   mx-auto login-form'>
                    <div>
                        <h3 className='text-center textColor'>LOGIN</h3>
                        <Form className=''  onSubmit={handleLogin}>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control className='inputField' onChange={handleEmailChange} type="email" placeholder="Your Email" />
                            </Form.Group>
                            {error?.email && <p className='text-danger'>{error.email}</p>}

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='inputField' onChange={handlePasswordChange} type="password" placeholder="Password" />
                            </Form.Group>
                            {error?.password && <p className='text-danger'>{error.password}</p>}
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="success" className='w-75 ms-5 social-style fs-5' type="submit">
                                Login
                            </Button>
                            <div className='d-flex mt-2'>
                                <p>New to Brazzer?{" "}</p>
                                <Link to="/signup" className='account-style' >Create New Account</Link>
                            </div>
                            <div className='d-flex mt-2'>
                                <p>Forget Password?{" "}</p>
                                <Link to="/signup" className='account-style' >Resert Password</Link>
                            </div>
                            <ToastContainer />
                        </Form>
                        <SocialIcon></SocialIcon>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;