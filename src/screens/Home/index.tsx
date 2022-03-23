import React, {useState, useCallback} from "react";
import { View, FlatList, Text } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Load } from "../../components/Load";





import { styles } from "./styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/auth.routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";

export function Home() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

  const navigation = useNavigation<homeScreenProp>();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory ('') : setCategory(categoryId);
  }


  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', {guildSelected});
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
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
          <Profile/>
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
    </Background>
  );
}