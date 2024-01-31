import { FC } from 'react';
import { supabase } from '../../supbase/supabaseClient';
import './GoogleOauth.css'

export const GoogleOauth: FC = () => {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error(error);
    } else {
      alert('Logged in with Google');
    }
  };
  return <button className='google-btn' onClick={handleLogin}>Google Login</button>;
};
