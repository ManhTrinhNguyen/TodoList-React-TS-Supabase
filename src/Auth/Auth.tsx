import { useState, FC } from 'react';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import './Auth.css';

export const Auth: FC = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  return (
    <div className="auth-container">
      {haveAccount ? (
        <div>
          <SignIn />
          <p className='haveAccount-text'>
            Don't have an account ? <span className='haveAccount-btn' onClick={() => setHaveAccount(false)}>Sign Up</span> 
          </p>
        </div>
      ) : (
        <div>
          <SignUp />
          <p className='haveAccount-text' >
            Have an account ? <span className='haveAccount-btn' onClick={() => setHaveAccount(true)}>Log in</span>
          </p>
        </div>
      )}
    </div>
  );
};
