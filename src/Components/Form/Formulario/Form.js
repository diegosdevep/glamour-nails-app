import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './form.styles';
import { Icon, Input } from 'react-native-elements';
import { color } from '../../../Constants/colors';

const Form = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <View style={styles.containerTitle}>
        <Image
          source={require('../../../../assets/icon.png')}
          style={styles.img}
        />
        <Text style={styles.title}>Glamour Nails </Text>
      </View>

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
      </View>

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
  );
};

export default Form;
