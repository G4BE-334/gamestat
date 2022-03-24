import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontFamily: theme.font.title700,
        color: theme.colors.primary,
        fontSize: 18,
        marginBottom: 4,
    },
    type: {
        fontFamily: theme.font.text400,
        color: theme.colors.heading,
        fontSize: 13,
    },
})