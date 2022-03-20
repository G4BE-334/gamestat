import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: theme.font.title700,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderColor: theme.colors.background50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        height: 68,
        width: 64,
        backgroundColor: theme.colors.background50,
        borderColor: theme.colors.background60,
        borderRadius: 8,
        borderWidth: 1
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.font.text500,
        color: theme.colors.highlight,
    },
    charLimit: {
        fontFamily: theme.font.text400,
        fontSize: 13,
        color: theme.colors.highlight,
        marginTop: 5
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56,
    },
    button1: {
        width: 22,
        height: 22,
        backgroundColor: theme.colors.background50,
        borderRadius: 5,
        marginBottom: 4,
        marginLeft: 10
    },
    button2: {
        width: 22,
        height: 22,
        backgroundColor: theme.colors.background50,
        borderRadius: 5,
        marginLeft: 10

    },
})