import { View } from 'react-native';
import React, { useState } from 'react';
import { Icon, ListItem } from 'react-native-elements';
import { color } from '../../../../Constants/colors';
import Modal from '../../../Shared/Modal/Modal';
import ChangeDisplayName from './changeDisplayName/ChangeDisplayName';
import ChangePassword from './changePassword/ChangePassword';

const AccountOptions = ({ onReload }) => {
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const onCloseModal = () => setShowModal(false);

  const selectedComponent = (key) => {
    switch (key) {
      case 'displayName':
        setRenderComponent(
          <ChangeDisplayName onClose={onCloseModal} onReload={onReload} />
        );
        break;
      case 'password':
        setRenderComponent(<ChangePassword onClose={onCloseModal} />);
        break;
      default:
        setRenderComponent(null);
    }

    setShowModal(true);
  };

  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View>
      {menuOptions.map((menu, index) => {
        return (
          <ListItem key={index} bottomDivider onPress={menu.onPress}>
            <Icon
              type={menu.iconType}
              name={menu.iconNameLeft}
              color={menu.iconColorLeft}
            />
            <ListItem.Content>
              <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
            <Icon
              type={menu.iconType}
              name={menu.iconNameRight}
              color={menu.iconColorRight}
            />
          </ListItem>
        );
      })}
      <Modal show={showModal} close={onCloseModal}>
        {renderComponent}
      </Modal>
    </View>
  );
};

function getMenuOptions(selectedComponent) {
  return [
    {
      title: 'Cambiar nombre de usuario',
      iconType: 'material-community',
      iconNameLeft: 'account-circle',
      iconColorLeft: color.secondary,
      iconNameRight: 'chevron-right',
      iconColorRight: color.secondary,
      onPress: () => selectedComponent('displayName'),
    },
    {
      title: 'Cambiar contraseña',
      iconType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconColorLeft: color.secondary,
      iconNameRight: 'chevron-right',
      iconColorRight: color.secondary,
      onPress: () => selectedComponent('password'),
    },
  ];
}

export default AccountOptions;
