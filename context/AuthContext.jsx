import React, {
  useContext, useState, useEffect, useMemo,
} from 'react';
import {
  auth,
  provider,
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
  const [currentUser, setCurrentUser] = useState({
    displayName: null,
    email: null,
  });

  function signInUser() {
    return signInWithPopup(auth, provider);
  }

  function signOutUser() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(() => ({
    currentUser,
    signInUser,
    signOutUser,
    setCurrentUser,
  }), [currentUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
