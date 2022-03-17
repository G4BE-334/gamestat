import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: theme.font.title700,
        color : theme.colors.primary,
        fontSize: 18,
    },
    nameStatus: {
        fontFamily: theme.font.text400,
        color : theme.colors.highlight,
        fontSize: 13,
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9,
    }
})