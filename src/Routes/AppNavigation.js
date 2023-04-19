import React from 'react';
import BottomTab from './BottomTab/BottomTab';
import AuthStack from './Stack/AuthStack';
import { Text } from 'react-native';
import { useAppContext } from '../Context/AuthContext';

const AppNavigation = () => {
  const { hasLogged, isLoading } = useAppContext();

  if (isLoading) return <Text>Loading...</Text>;

  return hasLogged ? <BottomTab /> : <AuthStack />;
};

export default AppNavigation;
