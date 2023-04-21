import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/Auth/Login/LoginScreen';
import RegisterScreen from '../../Screens/Auth/Register/RegisterScreen';
import OnBoardingScreen from '../../Screens/OnBoarding/OnBoardingScreen';
import { useAppContext } from '../../Context/AuthContext';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { hasLogged, setIsLoggedIn } = useAppContext();

  useEffect(() => {
    setIsLoggedIn(hasLogged);
  }, [hasLogged]);

  return (
    <Stack.Navigator
      initialRouteName={hasLogged ? 'OnBoarding' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
