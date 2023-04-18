import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './form.styles';
import { Icon, Input } from 'react-native-elements';
import { color } from '../../../Constants/colors';

const Form = () => {
  const navigation = useNavigation();
  const [keyboardShown, setKeyboardShown] = useState(false);

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
            source={require('../../../../assets/icon.png')}
            style={styles.img}
          />
          <Text style={styles.title}>Glamour Nails </Text>
        </View>
      )}

      <View style={styles.form}>
        <Input
          containerStyle={styles.input}
          placeholder='Email'
          rightIcon={
            <Icon
              type='material-community'
              name='at'
              size={24}
              color={color.secondary}
            />
          }
        />
        <Input
          containerStyle={styles.input}
          placeholder='Password'
          secureTextEntry
          rightIcon={
            <Icon
              type='material-community'
              name='eye-off-outline'
              size={24}
              color={color.secondary}
            />
          }
        />
        <View>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={styles.btnText}>Iniciar Sesion</Text>
          </TouchableOpacity>

          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Register')}
          >
            No tienes cuenta? <Text style={styles.span}>Registrate aqui</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Form;
