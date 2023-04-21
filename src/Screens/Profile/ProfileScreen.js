import { View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import InfoUser from '../../Components/Account/Profile/InfoUser/InfoUser';
import AccountOptions from '../../Components/Account/Profile/AccountOptions/AccountOptions';
import { useAppContext } from '../../Context/AuthContext';
import { Button } from 'react-native-elements';
import { styles } from './profile.styles';

const ProfileScreen = () => {
  const { logout } = useAppContext();
  const [_, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />

      <View>
        <InfoUser />
        <AccountOptions onReload={onReload} />
      </View>

      <Button
        title='Cerrar sesion'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        titleStyle={styles.text}
        onPress={logout}
      />
    </View>
  );
};

export default ProfileScreen;
