import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 95,
        backgroundColor: theme.colors.background50,
        color: theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme.font.text400,
        fontSize: 13,
        marginLeft: 10,
        textAlign: 'center',
    }
})