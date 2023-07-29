import { StyleSheet, Platform } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
    label: {
        color: primaryColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        padding: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 10
    },
    textInputDescription: {
        height: 80,
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
    },
    switch: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    firstswitch: {
        marginVertical: 0,
    },
    switchText: {
        fontSize: 12,
        opacity: 0.5,
        marginLeft: 5
    },
    starIcon: {
        marginRight: 5,
    },
    TouchMe: {
        marginLeft: 28,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    IconCat: {
        margin: 10,
    }
})