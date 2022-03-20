import React, {useState} from "react";
import { View, FlatList, Text } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props) {
  const guilds = [
      {
        id: '1',
        name: 'The Legends',
        icon: 'image.png',
        owner: true,
      },
      {
        id: '2',
        name: 'The Legends',
        icon: 'image.png',
        owner: true,
      },
      {
        id: '3',
        name: 'The Legends',
        icon: 'image.png',
        owner: true,
      },
      {
        id: '4',
        name: 'The Legends',
        icon: 'image.png',
        owner: true,
      },
      {
        id: '5',
        name: 'The Legends',
        icon: 'image.png',
        owner: true,
      },
      {
        id: '6',
        name: 'The Legends',
        icon: 'image.png',
        owner: true,
      }
  ];

  return (
    <View style={styles.container}>
        <FlatList data={guilds} keyExtractor={item => item.id} 
        renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)}/>
        )}
        showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => <ListDivider isCentered/>}
        contentContainerStyle={{paddingBottom: 69}} style ={styles.guilds} ListHeaderComponent={() => <ListDivider isCentered/>} 
        />
    </View>
  );
}