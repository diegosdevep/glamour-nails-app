import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('AccountTab', { screen: 'Profile' })}
        title='ir'
      />
    </View>
  );
};

export default HomeScreen;
