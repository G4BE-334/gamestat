import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 20
    },
    title: {
        fontFamily: theme.font.title700,
        color: theme.colors.heading,
        fontSize: 15,
        marginTop: 15,
    },
    notCheck: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.background100,
        borderColor: theme.colors.background50,
        borderWidth: 2,
        borderRadius: 3,
    },
    checked: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 3,
    }
});