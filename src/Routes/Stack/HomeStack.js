import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/Home/HomeScreen';
import { navigationOptions } from '../../Utils/stackStyles';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Glamour Nails', ...navigationOptions }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
