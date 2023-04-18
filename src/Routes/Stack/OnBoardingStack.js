import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../../Screens/OnBoarding/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const OnBoardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingStack;
