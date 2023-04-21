import { StyleSheet } from 'react-native';
import { color } from '../../Constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 300,
    color: color.secondary,
  },
  greeting: {
    fontSize: 20,
    color: color.secondary,
  },
  text: {
    fontSize: 16,
    color: color.secondary,
    marginTop: 30,
    textAlign: 'center',
  },
  imgCalendar: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  btnContainer: {
    width: '60%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#97389E',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});
