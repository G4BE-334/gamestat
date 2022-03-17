import React, {useState} from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { GuildIcon } from "../GuildIcon";

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Guild({data, ...rest}: Props) {

  return (
    <TouchableOpacity style= {styles.container} activeOpacity={0.7} {...rest}>
        <GuildIcon/>

        <View style={styles.content}>
            <View>
                <Text style={styles.title}></Text>

                <Text style={styles.type}> {data.owner ? 'Admin' : 'Invited Member'} </Text>
            </View>
        </View>

        <Feather name ="chevron-right" color = {theme.colors.heading} size={24}/>
    </TouchableOpacity>
  );
}