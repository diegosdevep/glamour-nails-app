import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon, Input } from 'react-native-elements';
import { useFormik } from 'formik';
import Toast from 'react-native-toast-message';
import { styles } from './login.styles';
import { color } from '../../../Constants/colors';
import { initialValues, validationSchema } from './loginForm.data';

const LoginForm = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const showHidePassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        await AsyncStorage.setItem('user', userCredential.user.accessToken);
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Usuario o contraseña incorrecta',
        });
      }
    },
  });

  useLayoutEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardShown(true)
    );
    const hideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardShown(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.content}
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}
    >
      {!keyboardShown && (
        <View style={styles.containerTitle}>
          <Image
            source={require('../../../../assets/logoNails.png')}
            style={styles.img}
          />
          <Text style={styles.title}>Glamour Nails </Text>
        </View>
      )}

      <View style={styles.form}>
        <Input
          containerStyle={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          rightIcon={
            <Icon
              type='material-community'
              name='at'
              size={24}
              color={color.secondary}
            />
          }
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />
        <Input
          containerStyle={styles.input}
          placeholder='Password'
          keyboardType='default'
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={color.secondary}
              onPress={showHidePassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}
        />
        <Button
          title='Iniciar Sesion'
          containerStyle={styles.btn}
          buttonStyle={styles.btnText}
          titleStyle={{ fontSize: 19 }}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
        <View>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Register')}
          >
            No tienes cuenta? <Text style={styles.span}>Registrate aqui</Text>
          </Text>
        </View>
      </View>
      <View style={styles.containerRedes}>
        <Image
          style={styles.google}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
          }}
        />
        <Image
          style={styles.apple}
          source={{
            uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png',
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
