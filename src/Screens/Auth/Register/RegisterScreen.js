import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import RegisterForm from '../../../Components/Form/RegisterForm/RegisterForm';
import { styles } from './register.styles';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.leftCircle} />
      <View style={styles.rightCircle} />

      <RegisterForm />
    </SafeAreaView>
  );
};

export default RegisterScreen;
