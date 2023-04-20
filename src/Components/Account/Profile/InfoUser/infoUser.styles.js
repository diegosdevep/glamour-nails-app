import { StyleSheet } from 'react-native';
import { color } from '../../../../Constants/colors';

export const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 30,
  },
  avatar: {
    marginRight: 20,
    backgroundColor: color.secondary,
  },
  displayName: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
