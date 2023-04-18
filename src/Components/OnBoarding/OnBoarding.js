import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import { styles } from './onboarding.styles';

const OnBoarding = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Image
        source={item.img}
        style={[styles.img, { width, resizeMode: 'contain' }]}
      />
      <View style={{ flex: 0.3, width, marginTop: 40 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoarding;
