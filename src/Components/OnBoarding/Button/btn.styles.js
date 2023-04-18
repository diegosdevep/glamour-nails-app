import { StyleSheet } from 'react-native';
import { color } from '../../../Constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    backgroundColor: color.primary,
    borderRadius: 100,
    padding: 20,
  },
});
