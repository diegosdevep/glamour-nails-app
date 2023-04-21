import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../Screens/Profile/ProfileScreen';
import { navigationOptions } from '../../Utils/stackStyles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const AccountStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          ...navigationOptions,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                color={'white'}
                size={24}
                name='arrow-back'
                style={{ marginRight: 12 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
