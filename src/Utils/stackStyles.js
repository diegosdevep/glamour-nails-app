import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from '../Constants/colors';

export const navigationOptions = {
  headerShown: true,
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerStyle: {
    height: 110,
    borderBottomColor: 'transparent',
    shadowColor: 'transparent',
    backgroundColor: 'transparent',
  },
  headerBackground: () => (
    <LinearGradient
      colors={[color.primary, color.secondary]}
      start={{ x: 0, y: 5 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    />
  ),
};
