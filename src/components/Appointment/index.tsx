import React from "react";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";
import { View, Text } from "react-native";

import {styles} from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';


import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";
import {GuildProps} from '../Guild';
import { LinearGradient } from "expo-linear-gradient";

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({data, ...rest}: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const {owner} = data.guild;
    const {primary, on, background50, background60} = theme.colors;
    
    return (
        <RectButton {...rest}> 

            <View style={styles.container}>
                <LinearGradient style = {styles.guildIconContainer} colors = {[background50, background60]}>
                    <GuildIcon/>
                </LinearGradient>
            
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style = {styles.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.info}>
                            <CalendarSvg/>
                        </View>
                        <Text style = {styles.date}>
                            {data.date}
                        </Text>
                    

                        <View style={styles.info}>
                            <PlayerSvg fill={!owner? primary : on}/>

                            <Text style={[styles.player, {color: owner? primary : on}]}>
                                {owner ? 'Host' : 'Player'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}