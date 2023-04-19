import React, { useEffect, useState } from 'react';
import BottomTab from './BottomTab/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './Stack/AuthStack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Text } from 'react-native';

const AppNavigation = () => {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      setHasLogged(user ? true : false);

      if (user) {
        try {
          await AsyncStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await AsyncStorage.removeItem('user');
        } catch (error) {
          console.log(error);
        }
      }
    });
  }, []);

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          setHasLogged(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUserLogin();
  }, []);

  if (hasLogged === null) return <Text>Loading...</Text>;

  return hasLogged ? <BottomTab /> : <AuthStack />;
};

export default AppNavigation;
