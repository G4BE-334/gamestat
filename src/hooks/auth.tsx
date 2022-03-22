import React, {createContext, ReactNode, useContext, useState} from 'react';

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}


import * as AuthSession from 'expo-auth-session'

import {SCOPE, CLIENT_ID, REDIRECT_URI, CDN_IMAGE, RESPONSE_TYPE} from '../configs';
import { api } from '../services/api';
import { Alert } from 'react-native';

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            
            const {type, params} = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if (type === "success") {
                // Get the access token and parse it to all the screens for it to use.
                api.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`;

                const userInfo = await api.get('/users/@me');
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                setUser({
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                });

               

            AuthSession.startAsync({ authUrl });
            }
        } catch  {
            throw new Error("It was not possible to sign in to Discord")
        } finally{
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{user, loading, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

// 
function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth};