import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { initFirebase } from './src/Firebase/firebase';
import Toast from 'react-native-toast-message';
import AppNavigation from './src/Routes/AppNavigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <Toast />
    </>
  );
};

export default App;
