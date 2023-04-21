import { StyleSheet } from 'react-native';
import { color } from '../../Constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 50,
    width: '80%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: color.secondary,
    borderRadius: 6,
  },
  text: {
    fontSize: 18,
  },
});
