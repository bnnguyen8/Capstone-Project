import { StyleSheet, Platform } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    optionText: {
        marginLeft: 10,
        fontSize: 17,
    },
    button: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        fontSize: 12,
        marginLeft: 80,
    }
})