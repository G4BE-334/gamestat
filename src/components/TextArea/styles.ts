import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 95,
        backgroundColor: theme.colors.background50,
        color: theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme.font.text400,
        fontSize: 13,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: theme.colors.background80,
        padding: 16,
        textAlignVertical: 'top'
    }
})