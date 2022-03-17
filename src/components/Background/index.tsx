import React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from './styles';
import { theme } from "../../global/styles/theme";

type Props = {
    children: React.ReactNode;
}

export function Background({children}: Props) {
    
    const {background100, background80, background50} = theme.colors;

    return (
    <LinearGradient style = {styles.container}
    colors = {[background50, background80]}>
        {children}
    </LinearGradient>
  );
}