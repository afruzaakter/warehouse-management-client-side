import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialIcon from '../SocialIcon/SocialIcon';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';






const SignUp = () => {
    //email, password and confirmPassord validation
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    //error handle part
    const [error, setError] = useState({
        email: "",
        password: "",
        general: "",
    })
    //firebase hooks create email and password
    const [
        createUserWithEmailAndPassword,
        user,
        
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);
      //navigate part
      const navigate = useNavigate()
      if(user){
          navigate('/home');
      }
//handle email validation
const handleEmailChange = (e) =>{
    // console.log({...userInfo, email: e.target.value});
 const emailRegex = /\S+@\S+\.\S+/;
 const validEmail = emailRegex.test(e.target.value);
 if(validEmail){
     setUserInfo({...userInfo, email: e.target.value});
     setError({...error, email: " "});
 }
 else{
     setError({...error, email: "❌ Invalid Email "});
     setUserInfo({...userInfo, email: " "});
 }


}

//handle password validation
const handlePasswordChange = (e) =>{
//    console.log(({...userInfo,password: e.target.value}));
const passwordRegex = /.{6,}/;
const validPassword = passwordRegex.test(e.target.value);
if(validPassword){
    setUserInfo({...userInfo, password: e.target.value});
    setError({...error, password: " "});
}
else{
    setError({...error, password: " ❌ Password Minimum 6 characters!"});
    setUserInfo({...userInfo, password: " "})
}
}
//handle Confirm Password validation
const handleConfirmPassword = (e) =>{
//   console.log({...userInfo, ConfirmPassword: e.target.value});
if(e.target.value === userInfo.password){
    setUserInfo({...userInfo, confirmPassword: e.target.value});
    setError({...error, password: " "});
}
else{
    setError({...error, password: " ❌ Password's don't match!!"});
    setUserInfo({...userInfo, confirmPassword: " "});
}

}
//handle signup part
const handleSignUp = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
}
//firebase error handle
useEffect(()=>{
const error = hookError;
if(error){
    switch(error?.code){
        case "auth/invalid-email":
        toast("Invalid email provided,Please provide a valid email")
        break;

        case"auth/invalid-password":
        toast("Wrong password,Please provide a valid password")
        break;
        default:
            toast('Something went wrong, Please try again')
    }
}
},[hookError])

    return (
        <div className='container m-5 p-5'>
            <div className='m-5 p-5'>
                <div className='p-3  w-50 mx-auto login-form'>
                    <div>
                        <h3 className='text-center'>SIGN UP</h3>
                        <Form onSubmit={handleSignUp}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={handleEmailChange} type="email" placeholder="Your Email" />
                            </Form.Group>
                        {error?.email && <p className='text-danger'>{error.email}</p>}

                            <Form.Group className="mb-3" controlId="formBasicPassword">                                
                                <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                            </Form.Group>

                            {error?.password && <p className='text-danger'>{error.password}</p>}

                            <Form.Group className="mb-3" controlId="formBasicPassword">                                
                                <Form.Control onChange={handleConfirmPassword} type="password" placeholder="Confirm Password" />
                            </Form.Group>

                          
                      
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            
                            <Button variant="success" className='w-75 ms-5 social-style fs-5' type="submit">
                                Sign Up
                            </Button>
                            <div className='d-flex mt-2'>
                                <p>New to Brazzer?{" "}</p>
                                <Link to="/login" className='account-style' >Login</Link>
                            </div>

                            <ToastContainer/>
                            
                        </Form>
                        <SocialIcon></SocialIcon>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;