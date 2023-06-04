import { StyleSheet, Platform } from "react-native";
import { primaryColor, secondaryColor } from '../../includes/variables'

export default StyleSheet.create({
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