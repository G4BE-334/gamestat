import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import {Fontisto} from "@expo/vector-icons";

import {styles} from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import BannerImg from '../../assets/banner.png';
import { Avatar } from "../Avatar";

export type MemberProps = {
    id: string,
    username: string,
    avatarUrl: string,
    status: string
}

type Props = {
    data: MemberProps;
}

export function Member({ data }: Props) {
    const {on, off} = theme.colors;
    const isOnline = data.status === "Online";
    
    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatarUrl}/>
            <View>
                <Text style = {styles.title}>
                    {data.username}
                </Text>
                <View style = {styles.status}>
                    <View style={[styles.bulletStatus, {backgroundColor: isOnline ? on : off}]} />
                    
                    <Text style = {styles.nameStatus}>
                        {isOnline ? "Online" : "Off"}
                    </Text>
                    <View style = {[styles.bulletStatus]}></View>
                </View>
            </View>
        </View>  
    );
}