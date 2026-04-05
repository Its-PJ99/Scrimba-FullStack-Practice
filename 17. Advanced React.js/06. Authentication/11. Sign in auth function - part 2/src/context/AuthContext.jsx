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

  //Auth functions (signin, signup, logout)
  //Sign in (success, data, error)
  const signInUser = async (email, password) => {
    /**
Challenge:
* 1) In the try block, make a asynchronous call to Supabase to sign in with a
	   password
* 2) Passing an object with:
			- email: the user's email converted to lowercase
			- password: the user's password
* 3) Destructuring the response into 'data' and 'error' variables
* 4) Save and test by signing in the user from your Auth.Users table
*/
    try {
      

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


  return (
    <AuthContext.Provider value={{ session, signInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};