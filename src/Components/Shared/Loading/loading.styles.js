import { StyleSheet } from 'react-native';
import { color } from '../../../Constants/colors';

export const styles = StyleSheet.create({
  overlay: {
    height: 130,
    width: 130,
    backgroundColor: 'transparent',
    // borderColor: Colors.light,
    // borderWidth: 2,
    // borderRadius: 100,
    // shadowColor: Colors.light,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    // elevation: 5,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.secondary,
    fontWeight: 'bold',
  },
});
