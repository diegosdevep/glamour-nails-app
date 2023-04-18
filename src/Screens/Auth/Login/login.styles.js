import { StyleSheet, Platform, Dimensions } from 'react-native';
import { color } from '../../../Constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
  },

  rightCircle: {
    backgroundColor: color.primary,
    position: 'absolute',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderRadius: Dimensions.get('window').width * 0.275,
    left: -50,
    top: -110,
  },
  leftCircle: {
    backgroundColor: color.secondary,
    position: 'absolute',
    width: Dimensions.get('window').width * 0.98,
    height: Dimensions.get('window').width * 0.98,
    borderRadius: Dimensions.get('window').width * 0.575,
    right: -90,
    top: -260,
  },
});
