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
        width: '100%',
        height: '100%',
        paddingBottom: 10,
    },
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: primaryColor,
    },
    id: {
        fontSize: 13,
        color: secondaryColor,
        marginBottom: 20,
    },
    description: {
        fontSize: 17,
        marginTop: 10,
    },
    status: {
        fontSize: 13,
        color: secondaryColor,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    switch: {
        alignItems: 'center',
        flexDirection: 'row',
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
        marginLeft: 5,
    },
    body: {
        // height: 300,
        flex: 1,
        
    },
    SendEmail: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 185,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    },
})