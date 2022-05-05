import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    // const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <p>loading...</p>;
      }

    //   if(sending){
    //       return <p>sending...</p>
    //   }
      if (!user) {
       return children;
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


     
    // if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
    //     return <div className='text-center mt-5'>
    //         <h3 className='text-danger'>Your Email is not verified!!</h3>
    //         <h5 className='text-success'> Please Verify your email address</h5>
    
        
    //          <button
    //     onClick={async () => {
    //       await sendEmailVerification();
    //       alert('Sent email');
    //     }}
    //   >
    //     Verify email
    //   </button>
    //     </div>
//     }
// return children;
  
};

export default RequireAuth;