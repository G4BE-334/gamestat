import React, { useState } from "react";
import { View, ScrollView, Text, KeyboardAvoidingView, Platform,  } from "react-native";
import {Feather} from "@expo/vector-icons";
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLLECTION_APPOINTMENTS} from '../../configs/database';

import {styles} from './styles';
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";






import { CategorySelect } from "../../components/CategorySelect";
import { RectButton } from "react-native-gesture-handler";
import { GuildProps } from "../../components/Guild";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/auth.routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { ButtonTime } from "../../components/ButtonTime";







export function AppointmentCreate() { 
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);


    
    type homeScreenProp = StackNavigationProp<RootStackParamList, 'AppointmentCreate'>;

    const navigation = useNavigation<homeScreenProp>();

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setOpenGuildsModal(false);
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${month}/${day} at ${hour}:${minute}${time}`,
            description
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView style= {styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            {/* ScrollView is used here so the user can scroll up and down when typing in the text box.
            In case the user has a small screen and want to have access to the keyboard without losing UX*/}
            <ScrollView>
                <Background>
                    <Header title="Schedule game"/>

                    <Text style={[styles.label, {marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
                        Categories
                    </Text>

                    <CategorySelect hasCheckBox setCategory={handleCategorySelect} categorySelected={category} />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    /* If there is a guild icon, use it, otherwise just use a regular image */
                                    guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> : <View style={styles.image}/>
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                    {/* If there is a guild name, show it, otherwise display regular message */}
                                        
                                        {guild.name ? guild.name : 'Select a server'}
                                    </Text>
                                </View>

                                <Feather name="chevron-right" color = {theme.colors.heading} size={18} />
                            </View>
                        </RectButton>
                        
                        <View style={styles.field}>
                            <View>
                                <Text style = {[styles.label, {marginBottom: 12}]}> Date </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setMonth} />
                                    <Text style={styles.divider}> / </Text>
                                    <SmallInput maxLength={2} onChangeText={setDay} />
                                </View>
                            </View>
                            
                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}> Time </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setHour} />
                                    <Text style={styles.divider}> : </Text>
                                    <SmallInput maxLength={2} onChangeText={setMinute} />

                                    <View >
                                        <ButtonTime title={"AM"} style={[styles.button1, {opacity: checked1 ? 1 : 0.4}]} onPress={() => {setTime("AM"); setChecked1(true); setChecked2(false)}}/>
                                        <ButtonTime title={"PM"} style={[styles.button2, {opacity: checked2 ? 1 : 0.4}]} onPress={() => {setTime("PM"); setChecked2(true); setChecked1(false)}}/>

                                    </View>
                                    
                                </View>
                            </View>


                        </View>
                        
                        
                    </View>

                    <View style={[styles.field, {marginBottom: 12}]}>
                        <Text style={[styles.label, {marginLeft: 20}]}> Description </Text>
                        
                        <Text style={[styles.charLimit, {marginRight: 20}]}> Max 100 characters</Text>
                    </View>

                    <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} onChangeText={setDescription} />

                    <View style={styles.footer}>
                        <Button title="Schedule" onPress={handleSave}/>
                    </View>
                    
                </Background>
            </ScrollView>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>
            
        </KeyboardAvoidingView>  
    );
}