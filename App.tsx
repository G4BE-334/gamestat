import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {useFonts} from  'expo-font';
import { Mulish_500Medium, Mulish_700Bold} from '@expo-google-fonts/mulish';
import {Rubik_400Regular, Rubik_500Medium} from '@expo-google-fonts/rubik';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/hooks/auth';

import { Routes }  from './src/routes';
import {Background} from './src/components/Background';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App(){
  // Load fonts before application start
  const [fontsLoaded] = useFonts ({
    Mulish_500Medium,
    Mulish_700Bold,
    Rubik_400Regular,
    Rubik_500Medium
  });

  // While the fonts aren't installed yet
  // maintain the splash screen using the apploading component
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>{/* This is a fragment that will encapsule all the elements that will be return on the react native app
  React native app will only return 1 element at once, so this is used to return more than on element as one */}
      {/* This status bar will make sure that the bar on top of the mobile phone is showing but containing the background color*/}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </>
  );
}