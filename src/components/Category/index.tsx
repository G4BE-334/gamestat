import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from "./styles";
import {SvgProps} from 'react-native-svg';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
    title: string;
    icon?: React.FC<SvgProps>;
    checked?: boolean;
    hasCheckBox?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {
    const {background60, background50} = theme.colors;
  
    return (
    <RectButton {...rest}>

        <LinearGradient style = {styles.container}
            colors = {[background50, background60]}>

            <LinearGradient style= {[styles.content, {opacity: checked ? 1 : 0.4}]} colors = {[background50, background60]}>
                {
                    hasCheckBox &&
                    <View style={checked ? styles.checked : styles.notCheck}/>
                }    
                    
                    <Icon width={48} height={48}/>
                    <Text style={styles.title}>
                        {title}
                    </Text>
            </LinearGradient>
        </LinearGradient>

    </RectButton>
  );
}