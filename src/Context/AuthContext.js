import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext({
  hasLogged: false,
  isLoading: true,
  updateAuthState: () => {},
  logout: () => {},
  setIsLoggedIn: () => {}, // añadido
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

  useEffect(() => {
    const checkUserLogin = async () => {
      setIsLoading(true);
      try {
        const hasLogged = await AsyncStorage.getItem('hasLogged');
        updateAuthState(hasLogged === 'true' ? { uid: 'fake_uid' } : null);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    checkUserLogin();
  }, []);

  const updateAuthState = (user) => {
    setHasLogged(!!user);
    if (user) {
      AsyncStorage.setItem('isLoggedIn', 'true');
    } else {
      AsyncStorage.removeItem('isLoggedIn');
    }
  };

  const logout = () => {
    updateAuthState(null);
  };

  const setIsLoggedIn = (value) => {
    // añadido
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
