import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { useAppContext } from '../../Context/AuthContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAppContext();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={logout} title='Logout' />
    </View>
  );
};

export default HomeScreen;
