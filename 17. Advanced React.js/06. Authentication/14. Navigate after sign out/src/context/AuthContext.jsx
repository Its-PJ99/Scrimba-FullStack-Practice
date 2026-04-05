import { createContext, useState, useContext, useEffect } from 'react';
import supabase from '../supabase-client';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
//Session state (user info, sign-in status)
  const [session, setSession] = useState(undefined);

  useEffect(() => {
  async function getInitialSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        throw error;
      }
      setSession(data.session);
    } catch (error) {
      console.error('Error getting session:', error.message);
    }
  }
  getInitialSession()

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
    console.log('Session changed:', session);
  })

  }, []);

  //Auth functions (signup, logout)
  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(), 
        password: password,
      });
      if (error) {
        console.error('Supabase sign-in error:', error.message);
        return { success: false, error: error.message };
      }
      console.log('Supabase sign-in success:', data);
      return { success: true, data };
    } catch (error) {
      console.error('Unexpected error during sign-in:', error.message);
      return { success: false, error: 'An unexpected error occurred. Please try again.' };
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Supabase sign-out error:', error.message);
        return { success: false, error: error.message };
      }
      return { success: true };
    } catch (error) {
      console.error('Unexpected error during sign-out:', error.message);
      return { success: false, error: 'An unexpected error occurred during sign out.' };
    }
  }


  return (
    <AuthContext.Provider value={{ session, signInUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};