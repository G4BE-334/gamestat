// This is the SignIn interface where the user will initialize log in into their account
import React from 'react';
import {View,
        Text,
        Image,
        }  from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';


export function SignIn(){
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }


  return (
    <Background>
        <View style={styles.container}>
          
          
          <Image 
            source={IllustrationImg} 
            style={styles.image}
            
          />
        
          <View style = {styles.content}>
            <Text style = {styles.title}>
              Organize {'\n'}
              your gameplays {'\n'}
              with ease
            </Text>

            <Text style = {styles.subtitle}>
              Create squads to play your favorite{'\n'}
              games with your friends
            </Text>

            <View style = {styles.footer}>
              <ButtonIcon
                title = "Log in to Discord"
                onPress={handleSignIn}
              />
            </View>

            

          </View>
        </View>
      </Background>

  );
}