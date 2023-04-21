import React, { useState } from 'react';
import { View } from 'react-native';
import { size } from 'lodash';
import { styles } from './carousel.styles';
import CarouselSnap, { Pagination } from 'react-native-snap-carousel';
import { Image } from 'react-native-elements';

const images = [
  require('../../../../assets/nails14.png'),
  require('../../../../assets/nails16.png'),
  require('../../../../assets/nails15.png'),
];

const Carousel = ({ width, height, hideDots }) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View
      style={{
        borderRadius: 10,
        height: 300,
        width: 280,
      }}
    >
      <Image
        source={item}
        style={{
          width: '80%',
          height: '100%',
          resizeMode: 'cover',
          borderRadius: 10,
        }}
      />
    </View>
  );

  const pagination = () => {
    return (
      <Pagination
        dotsLength={size(images)}
        activeDotIndex={activeDotIndex}
        activeDotScale={1}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={{ ...styles.containerStyle }}
        dotStyle={{ ...styles.dotStyle }}
      />
    );
  };

  return (
    <View style={styles.content}>
      <CarouselSnap
        layout='default'
        data={images}
        firstItem={1}
        sliderWidth={width}
        itemWidth={width / 1.9}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveDotIndex(index)}
      />
      {!hideDots && pagination()}
    </View>
  );
};

export default Carousel;
