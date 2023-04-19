import { StyleSheet, Dimensions, Platform } from 'react-native';
import { color } from '../../../Constants/colors';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 140 : 60,
  },
  containerTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: color.secondary,
  },
  img: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  form: {
    width: Dimensions.get('window').width * 0.8,
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 18,
  },
  btn: {
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 6,
    marginTop: 20,
  },
  btnText: {
    backgroundColor: color.primary,
    padding: 12,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  span: {
    fontWeight: 'bold',
  },
});
