import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        padding: 5
    },
    label: {
        color: '#ccc',
        fontSize: 17,
        textAlign: 'center',
    },
    count: {
        color: '#fff',
        fontWeight: 'bold'
    },
    moreInfo: {
        fontSize: 15,
        color: 'orange',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    modalBox: {
        backgroundColor: 'white',
        padding: 30,
        width: '70%',
        borderRadius: 15,

        // Android  
        elevation: 5,

        // iOS
        shadowOpacity: 0.85,
        shadowRadius: 5,
        shadowColor: '#000', // Also Android
        shadowOffset: { 
            height: 0, 
            width: 4
        }
    }
})