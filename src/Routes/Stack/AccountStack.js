import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/Auth/Login/LoginScreen';
import RegisterScreen from '../../Screens/Auth/Register/RegisterScreen';
import ProfileScreen from '../../Screens/Profile/ProfileScreen';
import OnBoardingScreen from '../../Screens/OnBoarding/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
