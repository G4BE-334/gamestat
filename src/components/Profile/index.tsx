import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import {styles} from './styles';



export function Profile() {
    function handleSignOut() {
        Alert.alert('Logout', 'Are you sure you want to log out?', [
            {
                text: 'Yes',
                onPress: () => signOut()
            },
            {
                text: 'No',
                style: 'cancel',
            }
        ])
    }
    
    const {user, signOut} = useAuth();
    return (
        <View style={styles.container}> 
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage = {user.avatar}/>
            </RectButton>
            <View>
                <View style = {styles.user}>
                    <Text style = {styles.greeting}>
                        Hello
                    </Text>
                    <Text style = {styles.username}>
                        {user.firstName}    
                    </Text>
                </View>

                <Text style = {styles.message}>
                    Today is victory day!
                </Text>
            </View>

        </View>
    );
}