import React from "react";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";
import { Image } from "react-native";
import { Avatar } from "../Avatar";

import {styles} from './styles';

export function GuildIcon() {
    const uri = 'https://progsoft.net/images/apex-legends-icon-e73d62bbd3e385ccb1fba38cde51f9851fea5ec0.png';
    return (
        <Image source={{uri}} style = {styles.image} resizeMode="cover"/>

    );
}