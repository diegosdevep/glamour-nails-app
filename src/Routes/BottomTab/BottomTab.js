import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountStack from '../Stack/AccountStack';
import HomeStack from '../Stack/HomeStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeTab' component={HomeStack} />
      <Tab.Screen name='AccountTab' component={AccountStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;
