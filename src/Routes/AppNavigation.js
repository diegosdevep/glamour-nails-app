import React, { useState } from 'react';
import BottomTab from './BottomTab/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountStack from './Stack/AccountStack';

const AppNavigation = () => {
  const [user, setUser] = useState(false);

  return user ? <BottomTab /> : <AccountStack />;
};

export default AppNavigation;
