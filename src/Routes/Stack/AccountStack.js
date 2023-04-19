import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../Screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
