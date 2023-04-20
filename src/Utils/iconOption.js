import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { color } from '../Constants/colors';

export const iconOptions = {
  home: {
    default: <AntDesign color={'grey'} size={24} name='home' />,
    focused: <Entypo color={color.secondary} size={24} name='home' />,
  },
  booking: {
    default: <AntDesign color={'grey'} size={24} name='hearto' />,
    focused: <AntDesign color={color.secondary} size={24} name='heart' />,
  },
  saved: {
    default: <Ionicons color={'grey'} size={24} name='notifications-outline' />,
    focused: (
      <Ionicons color={color.secondary} size={24} name='notifications' />
    ),
  },
  profile: {
    default: <Ionicons color={'grey'} size={24} name='person-outline' />,
    focused: <Ionicons color={color.secondary} size={24} name='person' />,
  },
};
