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
    containerSubDarkTheme: {
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
    containerSubLightTheme: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10
    },
})