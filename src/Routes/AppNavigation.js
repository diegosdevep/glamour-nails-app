import React from 'react';
import BottomTab from './BottomTab/BottomTab';
import AuthStack from './Stack/AuthStack';
import { Text } from 'react-native';
import { useAppContext } from '../Context/AuthContext';

const AppNavigation = () => {
  const { hasLogged } = useAppContext();

  if (hasLogged === null) return <Text>Loading...</Text>;

  return hasLogged ? <BottomTab /> : <AuthStack />;
};

export default AppNavigation;
