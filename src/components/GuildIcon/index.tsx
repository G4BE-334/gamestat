import React from "react";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";
import { Image } from "react-native";
import { Avatar } from "../Avatar";

import {styles} from './styles';

export function GuildIcon() {
    const uri = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/563aee18-d547-4bdc-bdbf-23056bc595bb/dczo00v-fc29c0d0-4cdd-4ee9-b95d-64258677d53e.png';
    return (
        <Image source={{uri}} style = {styles.image} resizeMode="cover"/>

    );
}