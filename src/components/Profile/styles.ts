import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 22,
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.font.title500,
        fontSize: 24,
        color: theme.colors.primary,
        marginRight: 6,
    },
    username: {
        fontFamily: theme.font.title700,
        fontSize: 24,
        color: theme.colors.primary,
    },
    message: {
        fontFamily: theme.font.text400,
        color: theme.colors.primary,
        flexDirection: 'column',

    }
})