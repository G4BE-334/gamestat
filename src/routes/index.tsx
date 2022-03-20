import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from '../hooks/auth';
import {AuthRoutes} from './auth.routes';
import { Background } from '../components/Background';
import { SignIn } from '../screens/SignIn';

export function Routes () {
    const {user} = useAuth();

    return (
        <Background> 
            <NavigationContainer>
                {user.id ? <AuthRoutes /> : <SignIn />}
            </NavigationContainer>
        </Background>
    );
}