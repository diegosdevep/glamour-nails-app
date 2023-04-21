import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import { styles } from './loading.styles';
import { color } from '../../../Constants/colors';

const Loading = ({ show }) => {
  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size='large' color={color.secondary} />
      </View>
    </Overlay>
  );
};

Loading.defaultProps = {
  show: false,
};

export default Loading;
