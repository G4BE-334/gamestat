import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: 27
    },
    title: {
        fontFamily: theme.font.title700,
        color: theme.colors.primary,
        fontSize: 18,
    },
    subtitle: {
        fontFamily: theme.font.text500,
        color: theme.colors.highlight,
        fontSize: 15,
        marginTop: 3
    }
});