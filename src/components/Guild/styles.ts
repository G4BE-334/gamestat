import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: theme.font.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 11,
    },
    type: {
        fontFamily: theme.font.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginBottom: 24,
    },
})