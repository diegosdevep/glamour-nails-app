import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './login.styles';
import LoginForm from '../../../Components/Auth/LoginForm/LoginForm';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.leftCircle} />
      <View style={styles.rightCircle} />

      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;
