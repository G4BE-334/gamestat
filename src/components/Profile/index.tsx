import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import {styles} from './styles';

export function Profile({...rest}: RectButtonProps) {
    const {user} = useAuth();

    return (
        <View style={styles.container}> 
            <RectButton {...rest}>
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