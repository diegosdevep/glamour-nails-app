import { StyleSheet } from 'react-native';
import { color } from '../../Constants/colors';

export const styles = StyleSheet.create({
  img: {
    flex: 0.5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
    color: color.primary,
  },
  description: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 18,
    paddingHorizontal: 32,
  },
});
