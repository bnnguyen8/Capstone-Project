 import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from '../../../includes/variables'

export default StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardCompleted: {
        backgroundColor: '#e5e5e5',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardColorYellow: {
        backgroundColor: 'yellow',
        color: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardColorGreen: {
        backgroundColor: 'green',
        color: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardColorBlue: {
        backgroundColor: 'blue',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardColorPurple: {
        backgroundColor: 'purple',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColor
    },
    description: {
        fontSize: 14,
        color: secondaryColor,
        maxHeight: 36
    },
    switch: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    switchText: {
        fontSize: 12,
        opacity: 0.5,
        marginLeft: 5
    },
    textContainer: {
        // marginRight: 20,
        // flex: 1
    },
    StartDesription: {
        flex: 1,
        marginRight: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'left',
    },
    starIcon: {
        marginRight: 5,
    },
    button: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        fontSize: 12,
        marginLeft: 180,
    }
})