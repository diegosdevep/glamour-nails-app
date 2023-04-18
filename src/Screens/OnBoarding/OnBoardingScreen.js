import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, SafeAreaView, View } from 'react-native';
import Btn from '../../Components/OnBoarding/Button/Btn';
import OnBoarding from '../../Components/OnBoarding/OnBoarding';
import Paginator from '../../Components/OnBoarding/Paginator/Paginator';
import slides from '../../Utils/slides';
import { styles } from './onboarding.styles';

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('last item');
      goToLogin();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={({ item }) => <OnBoarding item={item} />}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <Btn
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
