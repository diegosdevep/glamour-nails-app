import React, { useRef } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { styles } from './carouselads.styles';

const advertising = [
  {
    title: 'En Manicuria',
    description: '50% Descuento',
    img: require('../../../../assets/banner3.png'),
  },
  {
    title: 'Recomendanos y Gana!',
    description: '25% descuento',
    img: require('../../../../assets/banner2.png'),
  },
  {
    title: 'Reserva tu lugar',
    description: 'Bella Salon',
    img: require('../../../../assets/banner1.png'),
  },
];

const CarouselAds = ({ width }) => {
  const scrollViewRef = useRef(null);

  return (
    <View style={styles.content}>
      <ScrollView
        horizontal={true}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        style={{
          width: width,
        }}
      >
        {advertising.map((ads, index) => (
          <View key={index} style={styles.container}>
            <Image source={ads.img} style={styles.img} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{ads.title}</Text>
              <Text style={styles.description}>{ads.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CarouselAds;
