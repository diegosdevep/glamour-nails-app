import { View, Text, Image, StatusBar } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { color } from '../../Constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import InfoUser from '../../Components/Account/Profile/InfoUser/InfoUser';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Perfil',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        backgroundColor: 'transparent',
      },
      headerBackground: () => (
        <LinearGradient
          colors={[color.primary, color.secondary]}
          start={{ x: 0, y: 5 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        />
      ),
      headerLeft: () => (
        <Ionicons
          color={'white'}
          size={24}
          name='arrow-back'
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  return (
    <View>
      <StatusBar barStyle='light-content' />
      <InfoUser />
    </View>
  );
};

export default ProfileScreen;
