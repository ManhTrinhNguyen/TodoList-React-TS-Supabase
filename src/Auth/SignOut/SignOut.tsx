import { FC } from 'react';
import { supabase } from '../../supbase/supabaseClient';

const SignOut: FC = () => {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default SignOut