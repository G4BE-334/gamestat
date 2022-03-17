import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: theme.colors.background50,
        color: theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme.font.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
    }
})