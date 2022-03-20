import {StyleSheet} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: '100%',
        height: 234
    },
    title: {
        fontSize: 28,
        fontFamily: theme.font.title700,
        color: theme.colors.heading,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: theme.font.text400,
        color: theme.colors.heading,
        marginLeft: 10
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 10,
        marginLeft: 80,
    },
    members: {
        marginLeft: 24,
        marginTop: 27,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
})