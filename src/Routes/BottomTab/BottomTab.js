import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../Stack/HomeStack';
import AccountStack from '../Stack/AccountStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='HomeTab' component={HomeStack} />
      <Tab.Screen name='AccountTab' component={AccountStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;
