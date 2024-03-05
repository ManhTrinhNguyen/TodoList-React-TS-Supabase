import { FC } from 'react';
import { supabase } from '../../supbase/supabaseClient';
import './SignOut.scss'

interface SignOutProps {
  darkMode: boolean
}

const SignOut: FC<SignOutProps> = ({ darkMode }) => {
  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error)
    }
  }
  return (
    <div className={darkMode ? 'signOut-container-darkmode' : 'signOut-container'}>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default SignOut