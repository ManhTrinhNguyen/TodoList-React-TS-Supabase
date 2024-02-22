import { FC, useState } from 'react';
import { supabase } from '../../supbase/supabaseClient';
import { GoogleOauth } from '../GoogleOauth/GoogleOauth';
import './SignIn.scss';

type User = {
  email: string;
  password: string;
};

const SignUp: FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });

    if (error) {
      alert('Invalid Login User');
    } else {
      alert('Logged In');
    }

    setUser({
      email: '',
      password: '',
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((preValue) => ({ ...preValue, [name]: value }));
  }
  return (
    <div className='sign-in-container'>
      <h2>Sign In</h2>
      <form className='sign-in-form' onSubmit={handleSignIn}>
        <div className='input-container'>
          <input
            className='input'
            type="email"
            name="email"
            placeholder="Email address"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            className='input'
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <input className='input-button' type="submit" />
      </form>
      <GoogleOauth />
    </div>
  );
};

export default SignUp;
