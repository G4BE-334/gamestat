import React, {useState, useCallback} from "react";
import { View, FlatList, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background';
import { Load } from "../../components/Load";
import { styles } from "./styles";
import { RootStackParamList } from "../../routes/auth.routes";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { ModalSO } from "../../components/ModalSO";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [openSignOutModal, setOpenSignOut] = useState(false);

  const {user, signOut} = useAuth();

  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

  const navigation = useNavigation<homeScreenProp>();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory ('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', {guildSelected});
  }

  function handleSignOut() {
    signOut();
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleOpenSignOut() {
    setOpenSignOut(true);
  }

  function handleCloseSignOut() {
    setOpenSignOut(false);
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointmentsStoraged: AppointmentProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(appointmentsStoraged.filter(item => item.category === category));
    }
    else {
      setAppointments(appointmentsStoraged);
    }
    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
        <View style={styles.header}>
          <Profile onPress= {handleOpenSignOut}/>
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>
        
        <CategorySelect categorySelected={category} setCategory={handleCategorySelect}/>
        {
          loading ? <Load /> :
          <>
          <ListHeader title="Scheduled matches" subtitle={`Total: ${appointments.length}`}/>

          <FlatList data = {appointments} keyExtractor={item => item.id} renderItem={({ item }) => (
            <Appointment 
            data={item}
            onPress={() => handleAppointmentDetails(item)}/>)} 
            style={styles.matches} showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider/>}
            contentContainerStyle={{paddingBottom: 69}}/>
          </>
        }
        <View style={styles.modal}>
          <ModalSO visible={openSignOutModal} closeModal={handleCloseSignOut} dimension={100}>
            <View style={styles.modalSO}>
                <Text style = {styles.desire}>Log out from </Text>
                <Text style = {styles.game}>Game</Text>
                <Text style = {styles.stat}>Stat</Text>
                <Text style = {styles.game}>? </Text>
            </View>
            <View style={styles.buttons}>
                <Button title="No" style={styles.no} onPress={handleCloseSignOut}/>     
                <Button title="Yes" style={styles.yes} onPress={handleSignOut}/>
            </View>
          </ModalSO>
        </View>
    </Background>
    
  );
}