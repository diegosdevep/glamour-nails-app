import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getAuth, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { styles } from './infoUser.styles';
import { color } from '../../../../Constants/colors';
import Loading from '../../../Shared/Loading/Loading';

const InfoUser = () => {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);
  const [isLoading, setIsLoading] = useState(false);

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setIsLoading(true); // activa el estado de carga
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const blobResponse = await axios.get(uri, { responseType: 'blob' });
    const blob = blobResponse.data;

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        updatePhotoUrl(snapshot.metadata.fullPath);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);
    const auth = getAuth();

    updateProfile(auth.currentUser, { photoURL: imageUrl }).then(() => {
      setIsLoading(false); // desactiva el estado de carga
      setAvatar(imageUrl);
    });
  };

  return (
    <View style={styles.content}>
      <Avatar
        size={100}
        rounded
        containerStyle={styles.avatar}
        icon={{ type: 'material', name: 'person' }}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory
          size={28}
          borderRadius={50}
          backgroundColor={color.secondary}
          onPress={changeAvatar}
          style={{ borderWidth: 0, backgroundColor: color.secondary }}
        />
      </Avatar>

      {isLoading ? (
        <Loading show={isLoading} />
      ) : (
        <View style={{ marginTop: 10 }}>
          <Text style={styles.displayName}>{displayName || 'Anonimo'}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      )}
    </View>
  );
};

export default InfoUser;
