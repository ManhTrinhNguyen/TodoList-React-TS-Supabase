import { FC, useState } from 'react';
import { supabase } from '../../supbase/supabaseClient';
import './SignUp.scss'

type User = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp: FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert('Password does not match!');
      return;
    }
    const { error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    if (error) {
      console.error(error);
    } else {
      alert('Verify Your Email!');
    }

    setUser({
      email: '',
      password: '',
      confirmPassword: '',
    });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((preValue) => ({ ...preValue, [name]: value }));
  }
  return (
    <div className='sign-up-container'>
      <h2>Sign Up</h2>
      <form className='sign-up-form' onSubmit={handleSignUp}>
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
        <div className='input-container'>
          <input
            className='input'
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <input className='input-button' type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
