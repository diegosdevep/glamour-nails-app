import { StyleSheet } from 'react-native';
import { color } from '../../../../Constants/colors';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: color.secondary,
  },
  displayName: {
    fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'center',
  },
  email: {
    textAlign: 'center',
  },
});
