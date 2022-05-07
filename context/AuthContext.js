import React, { useContext, useState, useEffect } from 'react';
import {
  auth,
  provider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from '../firebase';

// create context
const AuthContext = React.createContext();


// function to use context elsewhere in app
export function useAuth() {
  return useContext(AuthContext);
}

// provider that renders out children and provides user details and login function
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signInUser(auth, provider) {
    return signInWithPopup(auth, provider);
  }

  function signOutUser(auth) {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
