import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '../screens/SignIn';
import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';


import { Background } from '../components/Background';
import { theme } from '../global/styles/theme';

const {Navigator, Screen} = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  AppointmentDetails: undefined;
  AppointmentCreate: undefined;
}

export function AuthRoutes() {
  return (
    <Background>
      <Navigator screenOptions = {{cardStyle: {backgroundColor: theme.colors.background100}}}>
        <Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Screen name="AppointmentDetails" component={AppointmentDetails} options={{ headerShown: false}}/>
        <Screen name="AppointmentCreate" component={AppointmentCreate}options={{ headerShown: false}} />
      </Navigator>
    </Background>
  );
}