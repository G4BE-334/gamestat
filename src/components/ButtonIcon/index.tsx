// Here I created a new component to be utilized throughout the code
// This component is a button with an icon that will be used throughout the application
import React from 'react';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {Text, Image, View, } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

// Create a type that will have all the touchable properties
// plus any customized properties that we want to add
type Props = RectButtonProps & {
    title: string;

}

export function ButtonIcon({title, ...rest}: Props) {
    return (
       <RectButton 
       style = {styles.container}
       {...rest}>
           <View style = {styles.iconWrapper}>
               <Image source = {DiscordImg} style = {styles.icon}/>
           </View>

           <Text style = {styles.title}>
               {title}
           </Text>
       </RectButton>
        
    );
}
