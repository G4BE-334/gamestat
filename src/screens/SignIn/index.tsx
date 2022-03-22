// This is the SignIn interface where the user will initialize log in into their account
import React, {useContext} from 'react';
import {View,
        Text,
        Image,
        Alert,
        ActivityIndicator
        }  from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'
import {styles} from './styles';
import { Background } from '../../components/Background';
import {useAuth} from '../../hooks/auth';
import { theme } from '../../global/styles/theme';


export function SignIn(){

  const {loading, signIn} = useAuth();




  async function handleSignIn() {
    try {
      await signIn();
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
    
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
              {
                loading ? <ActivityIndicator color={theme.colors.primary}/>
                :
                <ButtonIcon
                  title = "Log in to Discord"
                  onPress={handleSignIn}
                />
              }
            </View>         
          </View>
        </View>
      </Background>

  );
}