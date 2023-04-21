import { StyleSheet } from 'react-native';
import { color } from '../../../../../Constants/colors';

export const styles = StyleSheet.create({
  content: {
    minWidth: '90%',
    alignContent: 'center',
    paddingVertical: 15,
  },
  btnContainer: {
    width: '85%',
    marginTop: 20,
    borderRadius: 6,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: color.secondary,
    color: color.secondary,
    fontWeight: 'bold',
  },
});
