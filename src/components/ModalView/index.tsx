import React, {ReactNode} from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
    dimension?: number;
}

export function ModalView({children, closeModal, dimension, ...rest}: Props) {
  return (
    <Modal transparent statusBarTranslucent animationType = "slide" {...rest} >
        <TouchableWithoutFeedback onPress={closeModal}>
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