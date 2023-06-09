import React from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { getAuth } from 'firebase/auth';
import Carousel from '../../Components/Shared/Carousel/Carousel';
import { styles } from './home.styles';
import { Button } from 'react-native-elements';
import CarouselAds from '../../Components/Shared/CarouselAds/CarouselAds';

const HomeScreen = () => {
  const { email } = getAuth().currentUser;

  const { width } = Dimensions.get('window');

  const userName =
    email.substring(0, email.indexOf('@')).charAt(0).toUpperCase() +
    email.substring(1, email.indexOf('@')).toLocaleLowerCase();

  return (
    <ScrollView>
      <View style={{ marginHorizontal: '3%', marginVertical: 10, gap: 5 }}>
        <Text style={styles.greeting}>
          Hola <Text style={styles.span}>{userName}</Text>
        </Text>
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
        titleStyle={styles.textBtn}
      />

      <CarouselAds width={width} height={250} />
    </ScrollView>
  );
};

export default HomeScreen;
