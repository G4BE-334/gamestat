import React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';
import { theme } from "../../global/styles/theme";

type Props = {
    children: React.ReactNode;
}

export function Background({children}: Props) {
    
    const {background100, background80} = theme.colors;

    return (
    <LinearGradient style = {styles.container}
    colors = {[background80, background100]}>
        {children}
    </LinearGradient>
  );
}