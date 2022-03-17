import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        backgroundColor: theme.colors.overlay,
        flex: 1,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.background50,
        alignSelf: 'center',
        marginTop: 13,
    }
})