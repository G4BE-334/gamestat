import React from "react";
import { Image } from "react-native";

import {styles} from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props) {
    const {background60, background50} = theme.colors;
    
    return (
        <LinearGradient style = {styles.container}
            colors = {[background50, background60]}>
           <Image source={{uri: urlImage}} style={styles.avatar}/>
        </LinearGradient>
    );
}