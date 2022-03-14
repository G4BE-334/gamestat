import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        },
    image: {
        width: '100%',
        height: 480
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50

    },
    title: {
        color: theme.colors.primary,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.font.title700,
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.primary,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.font.title500,
        lineHeight: 25
    }
});