import React, { useEffect, useState } from "react";
import { View, ImageBackground, Text, FlatList, Alert, Share, Platform } from "react-native";
import {Fontisto} from "@expo/vector-icons";

import {styles} from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import BannerImg from '../../assets/banner.png';
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";
import { Load } from "../../components/Load";

import * as Linking from 'expo-linking';

import {api} from '../../services/api';

type Params = {
    guildSelected: AppointmentProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}
export function AppointmentDetails() {
    const [Widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    const route = useRoute();
    const {guildSelected} = route.params as Params;

    async function fetchGuildInfo() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
        }
        catch {
            Alert.alert("Verify the server's configuration. Is the server widget enabled?")
        }
        finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios' ? `Join ${guildSelected.guild.name}` : Widget.instant_invite;

        Share.share({
            message,
            url: Widget.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(Widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildInfo();
    },[]);
    
    return (
        <Background>
            <Header title="Details" action={
                guildSelected.guild.owner &&
                <BorderlessButton onPress={handleShareInvitation}>
                    <Fontisto name="share" size={24} color={theme.colors.primary}/>
                </BorderlessButton>
            }/>

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>{guildSelected.guild.name}</Text>
                    <Text style={styles.subtitle}>{guildSelected.description}</Text>
                </View>
            </ImageBackground>
            {loading ? <Load/> :
                <>
                    <ListHeader title ="Players" subtitle ={`Total: ${Widget.members.length}`}/>
                    <FlatList data={Widget.members} keyExtractor={item => item.id} renderItem={({ item }) => (
                        <Member data={item}/>
                        )} ItemSeparatorComponent={() => <ListDivider isCentered/>}
                        style = {styles.members} 
                    />
                </>
            }
            
            {
                guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon title="Start New Game" onPress={handleOpenGuild}/>
                </View>
            }
            
        </Background>  
    );
}