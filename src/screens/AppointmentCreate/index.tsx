import React, { useState } from "react";
import { View, ScrollView, Text, KeyboardAvoidingView, Platform } from "react-native";
import {Feather} from "@expo/vector-icons";

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







export function AppointmentCreate() { 
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

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
    
    return (
        <KeyboardAvoidingView style= {styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
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
                                    guild.icon ? <GuildIcon/> : <View style={styles.image}/>
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
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}> / </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            
                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}> Time </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}> : </Text>
                                    <SmallInput maxLength={2} />

                                    <View>
                                        <Button title={"PM"} style={styles.button1}/>
                                        <Button title={"AM"} style={styles.button2}/>

                                    </View>
                                    
                                </View>
                            </View>


                        </View>
                        
                        
                    </View>

                    <View style={[styles.field, {marginBottom: 12}]}>
                        <Text style={[styles.label, {marginLeft: 20}]}> Description </Text>
                        
                        <Text style={[styles.charLimit, {marginRight: 20}]}> Max 100 characters</Text>
                    </View>

                    <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false}/>

                    <View style={styles.footer}>
                        <Button title="Schedule"/>
                    </View>
                    
                </Background>
            </ScrollView>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>
            
        </KeyboardAvoidingView>  
    );
}