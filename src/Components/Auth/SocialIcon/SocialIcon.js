import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../images/social/google.png'
import gitHub from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook (1).png'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialIcon = () => {
    //react firebase hook
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(user){
        navigate('/home');
    }


    return (
        <div>
            <div className='line-container'>
                <div className='line-left'></div>
                <p>Or</p>
                <div className='line-right'></div>
            </div>
            <div className='mt-2'>
                <Button onClick={() => signInWithGoogle()} className='btn btn-success social-style fs-5 w-75 ms-5 '>
                <img className='me-4' src={google} alt="" />
                <span>Continue with Google</span>
                </Button>
            </div>
            <div className='mt-2'>
                <Button className='btn btn-success social-style fs-5 w-75 ms-5 '>
                <img className='me-4' src={gitHub} alt="" />
                <span>Continue with GitHub</span>
                </Button>
            </div>
            <div className='mt-2'>
                <Button className='btn social-style btn-success fs-5 w-75 ms-5 '>
                <img className='me-4' src={facebook} alt="" />
                <span>Continue with Facebook</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialIcon;