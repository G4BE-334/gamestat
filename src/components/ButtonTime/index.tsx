// Here I created a new component to be utilized throughout the code
// This component is a button with an icon that will be used throughout the application
import React from 'react';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles';

// Create a type that will have all the touchable properties
// plus any customized properties that we want to add
type Props = RectButtonProps & {
    title: string;
    checked?: boolean;
}

export function ButtonTime({title, checked, ...rest}: Props) {
    return (
       <RectButton 
       {...rest}>
            <Text style = {styles.title}>
                {title}
            </Text>
       </RectButton>
        
    );
}
