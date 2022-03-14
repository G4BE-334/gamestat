import React from 'react';
import {StatusBar} from 'react-native';
import {useFonts} from  'expo-font';
import { Mulish_500Medium, Mulish_700Bold} from '@expo-google-fonts/mulish';
import {Rubik_400Regular, Rubik_500Medium} from '@expo-google-fonts/rubik';
import AppLoading from 'expo-app-loading';

import { SignIn }  from './src/screens/SignIn';
import {Background} from './src/components/Background';

export default function App(){
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
    <Background> {/* This is a fragment that will encapsule all the elements that will be return on the react native app
    React native app will only return 1 element at once, so this is used to return more than on element as one */}
      {/* This status bar will make sure that the bar on top of the mobile phone is showing but containing the background color*/}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <SignIn/>
    </Background>
  );
}