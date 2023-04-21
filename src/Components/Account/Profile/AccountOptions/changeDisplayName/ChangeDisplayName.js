import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { styles } from './changeDisplayName.styles';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './ChangeDisplayName.data';
import { getAuth, updateProfile } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { color } from '../../../../../Constants/colors';

const ChangeDisplayName = ({ onClose, onReload }) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { displayName } = formValue;
        const currentUser = getAuth().currentUser;

        await updateProfile(currentUser, { displayName });

        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al cambiar Usuario',
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder='Nuevo nombre de usuario'
        rightIcon={{
          name: 'account-circle-outline',
          type: 'material-community',
          color: color.secondary,
        }}
        onChangeText={(text) => formik.setFieldValue('displayName', text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        title='Guardar'
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default ChangeDisplayName;
