import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { styles } from './login.styles';
import { useNavigation } from '@react-navigation/native';
import Form from '../../../Components/Form/Formulario/Form';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.leftCircle} />
      <View style={styles.rightCircle} />

      <Form />
    </SafeAreaView>
  );
};

export default LoginScreen;
