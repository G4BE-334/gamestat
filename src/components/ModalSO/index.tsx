import React, {ReactNode} from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background";



type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
    dimension?: number;
}


import { styles } from "./styles";

export function ModalSO({children, closeModal, dimension, ...rest}: Props) {
  
  return (
    <Modal transparent statusBarTranslucent animationType = "slide" {...rest} >
        <TouchableWithoutFeedback>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar}/>
                        {children}
                    </Background>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
  );
}