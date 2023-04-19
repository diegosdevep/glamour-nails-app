import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { initFirebase } from './src/Firebase/firebase';
import Toast from 'react-native-toast-message';
import AppNavigation from './src/Routes/AppNavigation';
import { AuthProvider } from './src/Context/AuthContext';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <AppNavigation />
        </AuthProvider>
      </NavigationContainer>

      <Toast />
    </>
  );
};

export default App;
