import { StyleSheet, Platform } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
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
        justifyContent: 'space-between'
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
        marginVertical: 10,
    },
    switchText: {
        fontSize: 12,
        opacity: 0.5,
        marginLeft: 5
    },
    starIcon: {
        marginRight: 5,
    },
    body: {
        // height: 300,
        flex: 1,
        
    }
    
})