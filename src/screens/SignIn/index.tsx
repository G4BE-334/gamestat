// This is the SignIn interface where the user will initialize log in into their account
import React from 'react';
import {View,
        Text,
        Image,
        StatusBar }  from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'
import {styles} from './styles';

export function SignIn(){

  return (
    <View style={styles.container}>
      {/* This status bar will make sure that the bar on top of the mobile phone is showing but containing the background color*/}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      
      <Image 
        source={IllustrationImg} 
        style={styles.image}
        
      />
     
      <View style = {styles.content}>
        <Text style = {styles.title}>
          Organize {`\n`}
          your gameplays {`\n`}
          with ease
        </Text>

        <Text style = {styles.subtitle}>
          Create squads to play your favorite{`\n`}
          games with your friends
        </Text>

        <ButtonIcon
          title = "Log in to Discord"
          activeOpacity={0.7}
          />

      </View>
    </View>

  );
}