import { StyleSheet, Platform } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
    containerDarkTheme: {
        backgroundColor: '#2c4228',
        height: '100%',
    },
    container: {
    },
   addButtonContainer: {
        backgroundColor: primaryColor,
        borderRadius: 30,
        position: 'absolute',
        bottom: 15,
        right: 15,

        // android
        elevation: 2,

        //ios
        shadowOpacity: 0.25,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }

   },
   textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 10,
        margin: 50,
        fontSize: 20,
    },
   addButtonText: {
    width: 60,
    height: 60,
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 56,
   }

})