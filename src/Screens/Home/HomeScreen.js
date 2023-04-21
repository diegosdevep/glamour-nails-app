import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { getAuth } from 'firebase/auth';
import Carousel from '../../Components/Shared/Carousel/Carousel';
import { styles } from './home.styles';
import { Button } from 'react-native-elements';

const HomeScreen = () => {
  const { email } = getAuth().currentUser;

  const { width } = Dimensions.get('window');

  const userName =
    email.substring(0, email.indexOf('@')).charAt(0).toUpperCase() +
    email.substring(1, email.indexOf('@')).toLocaleLowerCase();

  return (
    <View>
      <View style={{ marginHorizontal: '3%', marginVertical: 10, gap: 5 }}>
        <Text style={styles.greeting}>Hola {userName}</Text>
        <Text style={styles.title}>
          ¿Qué diseños elegirás en tu próxima reserva?
        </Text>
      </View>
      <Carousel width={width} height={250} />

      <Text style={styles.text}>
        No tienes turnos agendados en este momento
      </Text>

      <Image
        source={require('../../../assets/calendar.png')}
        style={styles.imgCalendar}
      />
      <Button
        title='Agendar Turno'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        titleStyle={styles.text}
      />
    </View>
  );
};

export default HomeScreen;
