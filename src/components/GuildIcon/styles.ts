import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    image: {
        width: 61,
        height: 65,
    },
    container: {
        width: 61,
        height: 65,
        borderRadius: 8,
        backgroundColor: theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    }
})