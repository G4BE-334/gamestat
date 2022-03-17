import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '../screens/SignIn';
import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';


import { Background } from '../components/Background';
import { theme } from '../global/styles/theme';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
  return (
    <Background>
      <Navigator headerMode = "none" screenOptions = {{cardStyle: {backgroundColor: theme.colors.background100}}}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
        <Screen name="AppointmentDetails" component={AppointmentDetails} />
        <Screen name="AppointmentCreate" component={AppointmentCreate} />
      </Navigator>
    </Background>
  );
}