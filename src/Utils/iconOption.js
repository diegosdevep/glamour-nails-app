import {
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { color } from '../Constants/colors';

export const iconOptions = {
  home: {
    default: <AntDesign color={'grey'} size={24} name='home' />,
    focused: <Entypo color={color.secondary} size={24} name='home' />,
  },
  booking: {
    default: (
      <MaterialCommunityIcons
        color={'grey'}
        size={24}
        name='bookmark-outline'
      />
    ),
    focused: (
      <MaterialCommunityIcons
        color={color.secondary}
        size={24}
        name='bookmark'
      />
    ),
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
