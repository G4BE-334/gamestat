import React from "react";
import { ScrollView } from "react-native";

import {categories} from '../../utils/categories';
import { Category } from "../Category";
import { styles } from "./styles";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({categorySelected, setCategory, hasCheckBox = false,}: Props) {
  return (
    // ScrollView is a good option when there is not a lot of elements to be dislpayed
    // FlatList is better for many items because it will render them as they are being scrolled
    <ScrollView horizontal style = {styles.container} showsHorizontalScrollIndicator={false} contentContainerStyle= {{paddingRight: 40}}>
      {
        categories.map(category => (
          <Category key={category.id} title={category.title} icon={category.icon} checked={category.id === categorySelected} onPress={() => setCategory(category.id)} hasCheckBox={hasCheckBox}/>
          ))
      }
    </ScrollView>
  );
}