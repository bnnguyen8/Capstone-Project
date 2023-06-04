import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: primaryColor,
        alignItems: 'center',
        marginTop: 20,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7
    },
    title: {
        fontSize: 20,
        color: primaryColor,
        fontWeight: 'bold',
        paddingLeft: 5,
        letterSpacing: -1.3
    },
    titleRight: {
        paddingRight: 10,
        paddingLeft: 160,
        color: secondaryColor
    }
})