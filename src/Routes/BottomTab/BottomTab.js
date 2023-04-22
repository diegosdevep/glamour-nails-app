import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../Stack/HomeStack';
import AccountStack from '../Stack/AccountStack';
import { iconOptions } from '../../Utils/iconOption';
import { color } from '../../Constants/colors';
import Booking from '../../Screens/Booking/Booking';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.secondary,
        tabBarLabelStyle: { fontSize: 13 },
        tabBarStyle: { backgroundColor: '#FFF' },
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.home.focused : iconOptions.home.default,
        }}
      />
      <Tab.Screen
        name='BookingTab'
        component={Booking}
        options={{
          title: 'Turnos',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.booking.focused : iconOptions.booking.default,
        }}
      />
      <Tab.Screen
        name='AccountTab'
        component={AccountStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.profile.focused : iconOptions.profile.default,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
