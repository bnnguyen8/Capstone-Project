import { StyleSheet, Platform } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
    containerDarkTheme: {
        backgroundColor: '#2c4228',
        width: '100%',
        height: '100%',
        paddingBottom: 10,
    },
    containerLightTheme: {
    },
    label: {
        color: primaryColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        padding: 10,
        borderRadius: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 10,
    },
    textInputDescription: {
        height: 220,
        textAlignVertical: 'top'
    },
    errorMessageTitle: {
        color: '#c00',
        fontWeight: 'bold',
        paddingTop: 10
    },
    errorMessageItem: {
        color: '#f00'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color: "#444",
        fontSize: 21,
        marginTop: 10
    }

})