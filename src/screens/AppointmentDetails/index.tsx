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
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";






export function AppointmentDetails() { 
    const members = [
        { 
            id: '1',
            username: "Gabalu",
            avatarUrl: 'https://github.com/G4BE-334.png',
            status: 'Online'
        },
        {   
            id: '2',
            username: "Barroso",
            avatarUrl: 'https://github.com/caiobarroso.png',
            status: 'off'
        },
        {   
            id: '3',
            username: "Felipow",
            avatarUrl: 'https://github.com/Flipe-TI.png',
            status: 'off'
        }
    ]
    
    return (
        <Background>
            <Header title="Details" action={
                <BorderlessButton>
                    <Fontisto name="share" size={24} color={theme.colors.primary}/>
                </BorderlessButton>
            }/>

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>The Legends</Text>
                    <Text style={styles.subtitle}>Tonight we dine in hell!</Text>
                </View>
            </ImageBackground>

            <ListHeader title ="Players" subtitle ="Total 3"/>

            <FlatList data={members} keyExtractor={item =>item.id} renderItem={({ item }) => (
                <Member data={item}/>
                )} ItemSeparatorComponent={() => <ListDivider/>}
                style = {styles.members} 
            />

            <View style={styles.footer}>
                <ButtonIcon title="Start New Game"/>
            </View>
            
        </Background>  
    );
}