import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    title: {
        flex: 1,
        color: theme.colors.primary,
        fontFamily: theme.font.text500,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 3,
    }
});