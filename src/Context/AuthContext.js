import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext({
  hasLogged: false,
  isLoading: true,
  updateAuthState: () => {},
  logout: () => {},
  setIsLoggedIn: () => {},
});

export const useAppContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [hasLogged, setHasLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);
      updateAuthState(user);
      setIsLoading(false);
    });
  }, []);

  const updateAuthState = (user) => {
    setHasLogged(!!user);
  };

  const logout = async () => {
    try {
      const auth = getAuth();
      await auth.signOut();
      updateAuthState(null);
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  const setIsLoggedIn = (value) => {
    setHasLogged(value);
  };

  return (
    <AuthContext.Provider
      value={{ hasLogged, isLoading, updateAuthState, logout, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
