import { StyleSheet } from "react-native";
import COLORS from "../constants/colors"; // Ensure you have a COLORS file for your color palette

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    scrollViewStyle: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    cards: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginVertical: 16,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    header: {
        alignItems: "center",
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.textPrimary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.textSecondary,
        textAlign: "center",
    },
    form: {
        marginBottom: 16,
    },
    input: {
        backgroundColor: COLORS.inputBackground,
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: 12,
        fontSize: 16,
        color: COLORS.textPrimary,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "600",
    },
    footer: {
        marginTop: 24,
        alignItems: "center",
    },
    footerText: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    footerLink: {
        color: COLORS.link,
        fontWeight: "600",
    },
    badge: {
        backgroundColor: COLORS.accent,
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: "flex-start",
    },
    badgeText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "600",
    },
    cardImage: {
        width: "100%",
        height: 150,
        borderRadius: 12,
        marginBottom: 12,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: 16,
    },
    iconButton: {
        backgroundColor: COLORS.iconBackground,
        padding: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    iconButtonIcon: {
        fontSize: 20,
        color: COLORS.iconColor,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: COLORS.avatarBackground,
        marginBottom: 16,
    },
    username: {
        fontSize: 18,
        fontWeight: "600",
        color: COLORS.textPrimary,
        marginBottom: 8,
    },
    bookImageContainer: {
        width: 120,
        height: 180,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: COLORS.imageBackground,
        marginBottom: 16,
    },
    userInfo: {
        alignItems: "center",
        marginBottom: 24,
    },
    link: {
        color: COLORS.link,
        fontSize: 14,
        fontWeight: "600",
        textDecorationLine: "underline",
    },
});

export default styles;