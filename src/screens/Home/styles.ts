import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    },
    matches: {
        marginTop: 24,
        marginLeft: 24,
    },
    modal: {
        flex: 1,
        height: '50%',
        backgroundColor: theme.colors.primary,
        color: theme.colors.primary
    },
    title: {
        fontSize: 24,
        fontFamily: theme.font.title700
    },
    modalSO: {
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        marginTop: 24,
    },
    desire: {
        fontFamily: theme.font.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6,
    },
    game: {
        fontFamily: theme.font.title700,
        fontSize: 24,
        color: theme.colors.heading,
    },
    stat: {
        fontFamily: theme.font.title700,
        fontSize: 24,
        color: theme.colors.primary,
    },
    no: {
        width: 150,
        height: 60,
        backgroundColor: theme.colors.background100,
        borderColor: theme.colors.background50,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    yes: {
        width: 150,
        height: 60,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 28,
        marginTop: 20,
    }
})