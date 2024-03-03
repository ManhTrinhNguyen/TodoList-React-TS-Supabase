import { FC, useState, useEffect } from 'react';
import { Auth } from './Auth/Auth';
import { supabase } from './supbase/supabaseClient';
import './App.css';
import Posts from './components/Posts/Posts/Posts';


export type User = {
  id: string;
  email?: string;
};

export type Session = {
  access_token: string;
  refresh_token: string;
  user: User;
};

const App: FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  
  return <div className='container'>{!session ? <Auth /> : <Posts user_id={session?.user.id} />} </div>;
};

export default App;
